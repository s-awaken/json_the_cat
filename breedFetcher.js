const breed = process.argv.slice(2).toString();
const request = require('request');
const APIkey = '356bef78-0ef8-4194-86df-1f3984dc002f';
const API = `https://${APIkey}.thecatapi.com/v1/breeds/search`;


const breedDetailsFromAPI = (breed, done) => {
  request(API + '/' + breed, (error, response, body) => {
    console.log("error: ", error);
    console.log("response: ", response && response.statusCode);

    const data = JSON.parse(body);
    
    console.log(data);
    done(data);
  });
};
const printOutCatBreed = breed => {
  console.log('Return value: ', breed);
};
breedDetailsFromAPI(breed, printOutCatBreed);