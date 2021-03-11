const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`${breedName} is not a valid breed`);
    }
  });

};

module.exports = { fetchBreedDescription };