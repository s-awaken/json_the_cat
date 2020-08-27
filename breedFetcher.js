const request = require('request');

const breed = process.argv.slice(2).toString();

const API = `https://api.thecatapi.com/v1/breeds/search`;

request(API + `/?q=${breed}`, (error, response, body) => {
  if (error) console.log(error);
  console.log("response: ", response && response.statusCode);

  const data = JSON.parse(body);
    
  console.log(data);
});
