// const cambridge = {
//   minCookie: "",
//   maxCookie: "",
//   avCookie: "",
// };

// function getRandomInt() {
//   return Math.floor(Math.random(30) * max);
// }

// console.log(getRandomInt(3));
// // Expected output: 0, 1 or 2

// console.log(getRandomInt(1));
// // Expected output: 0

// console.log(Math.random());
// getRandomInt(50);
// console.log(getRandomInt);

// const southend = {};
// const manchester = {};
// getRandomInt(50);
// console.log(getRandomInt);
// math.random(30);
// console.log(math.random(100));
//create our first shop

// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// const seattle = {
// location: "seattle"
// minCust: 23,
// maxCust: 65,
// avgCookiesPerCust: 6.3,
// customersPerHour:[30, 42, 50, 37, 23, 33, 65, 49, 36, 29, 27, 44, 60, 54],
// avgCookiespPer: [],
// totalCookiesSold: 661.5

// };

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Math.floor(Math.random()

const seattle = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calcCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      //adds a random number to the customerPerHour array
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      console.log(this);
    }
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      //to work out sales per hour
      const custThisHour = this.avgCookiesPerCust * this.customersPerHour[i];
      this.cookiesPerHour.push(custThisHour);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

// const test = randomNumber(seattle.minCust, seattle.maxCust);
// console.log(test);

seattle.calcCustPerHour();
console.log(seattle);
// ()parenthesis
// {}braces
// []square bracket

// customersPerHour:[30, 42, 50, 37, 23, 33, 65, 49, 36, 29, 27, 44, 60, 54],
