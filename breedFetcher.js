const request = require('request');

const API = `https://api.thecatapi.com/v1/breeds/search`;

const fetchBreedDescription = (breedName, callback) => {
  
  (request(API + `/?q=${breedName}`, (error,response, body) => {
    const data = JSON.parse(body);
    callback(error, data[0]['description']);
  })
  );
};

module.exports = { fetchBreedDescription };