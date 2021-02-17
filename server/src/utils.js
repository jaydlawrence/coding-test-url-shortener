const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const generateNewURLStub = (length = 6) => {
  // 64 seed chars
  // 64^6 possible combinations
  // can get more out later by increasing length if we start to hit collisions more often
  const seedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-';

  return Array(length) // array of size of length variable
  .fill(0) // fill with values to iterate
  // for each item in array, get a random value from the seedCharacters string
  .map(() => seedCharacters[
    Math.min(
      getRandomArbitrary(0, seedCharacters.length),
      seedCharacters.length - 1 // handle long-shot edge-case of Math.random returning 1.000000
    )
  ])
  // join them into a string
  .join('');
}

module.exports = {
  generateNewURLStub
}