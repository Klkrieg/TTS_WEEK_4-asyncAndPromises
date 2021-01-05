// Write function called getRandomNumber that returns a promise
// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// Invoke your async function

const getRandomNumber = () => {
  let myPromise = new Promise((res, rej) => {
    setTimeout(() => res(Math.random()), 500);
  });
  return myPromise;
};

const asyncFunction = async () => {
  let result = await getRandomNumber();
  console.log(result);
};

asyncFunction();

// Write an asynchronous function that accepts 1 parameter
// A city name
// When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:
// https://geocode.xyz/seattle?json=1
// Once retrieved, print to the console the latitude and longitude
// Invoke your async function with a few cities as a test
// (Note: the API will only allow you 2 calls per second, so if you are getting errors and you think you shouldn't be, try calling fetching only ONCE per execution.)

const button = document.getElementById('btn');
const input = document.getElementById('search-box');
const main = document.getElementById('main');
const queryFunction = () => {
  let query = input.value;
  const getGeoCodes = async (query) => {
    let result = await fetch(
      `https://geocode.xyz/${query}?json=1`
    ).then((res) => res.json());
    return result;
  };
  return getGeoCodes(query);
};

const renderFunction = async () => {
  const data = await queryFunction();
  const newContent = document.createElement('div');
  const city = document.createElement('h1');
  const lat = document.createElement('h2');
  const long = document.createElement('h2');
  city.innerText = `The city you entered: ${data.standard.city}`;
  lat.innerText = `${data.standard.city}'s lattitude is: ${data.latt}`;
  long.innerText = `${data.standard.city}'s longitude is: ${data.longt}`;
  console.log(data);
  newContent.appendChild(city);
  newContent.appendChild(lat);
  newContent.appendChild(long);
  main.appendChild(newContent);
};
button.addEventListener('click', renderFunction);
