const BaseModel = require('../../db/base.model');

const TABLE_NAME = 'urls';

class Model extends BaseModel {
  static get tableName() {
    return TABLE_NAME;
  }
}

module.exports = Model;
