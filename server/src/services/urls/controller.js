const { UniqueViolationError } = require('objection');
const { success, error } = require('../../lib/https/responses');
const { generateNewURLStub } = require('../../utils');
const Urls = require('./model');


const add = async (req, res) => {
  const {
    url
  } = req.body;
  let successfulInsertion = false;
  let newRecord;
  while (!successfulInsertion) {
    const newId = generateNewURLStub();
    try {    
      newRecord = await Urls.query().insertAndFetch({
        id: newId,
        url
      });
      successfulInsertion = true;
    }
    catch(e) {
      if (e instanceof UniqueViolationError) {
        // we need to try again as we had an id collision
        console.error(`New ID collision ${newId}`)
      } else {
        return error(res, e.message)
      }
    }
  }
  
  success(res, newRecord);
}
const get = async (req, res) => {
  const { id } = req.query;
  const urlRecord = await Urls.query().findOne({id});
  success(res, urlRecord);
}

module.exports = {
  add,
  get,
};