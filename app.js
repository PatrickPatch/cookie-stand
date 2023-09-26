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

// create our first shop
const seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    // add a random number to the customersPerHour array
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      console.log(randNum);
    }
  },
};

seattle.calculateSales();
console.log(seattle);

// we need to:
// get (from the DOM) who the parent element is going to be. where am I attaching this new element
const saleLocations = document.getElementById("seattle");

// create a new element, or elements, that represent frankie
const article = document.createElement("article");

const h2 = document.createElement("h2");
h2.textContent = seattle.location;
article.appendChild(h2);

const ul = document.createElement("ul");
for (let i = 0; i < seattle.cookiesPerHour.length; i++) {
  const li = document.createElement("li");
  li.textContent = seattle.cookiesPerHour[i];
  ul.appendChild(li);
}
article.appendChild(ul);

// add the article to the page (by appending to the kittenProfiles div)
saleLocations.appendChild(article);

const seattle = new cookieshop("Seattle", 23, 65, 6.3);
const tokyo = new cookieshop("Tokyo", 3, 24, 1.2);
const dubai = new cookieshop("Dubai", 11, 38, 3.7);
const paris = new cookieshop("Paris", 20, 38, 2.3);
const lima = new cookieshop("Lima", 2, 16, 4.6);

// Kitten Factory
function Kitten(name, age, interests, image, kids, dogs, cats, breed) {
  this.name = name;
  this.age = age;
  this.interests = interests;
  this.image = image;
  this.goodWithKids = kids;
  this.goodWithDogs = dogs;
  this.goodWithCats = cats;
  this.breed = breed;
}

// Adding a method to ALL Kittens called render (we chose the name render, it can be called anything)
Kitten.prototype.render = function () {
  // get (from the DOM) who the parent element is going to be. where am I attaching this new element
  const kittenProfiles = document.getElementById("kittenProfiles");

  // create a new element, or elements, that represent frankie
  const article = document.createElement("article");

  // inside that article, i need to put a h2 for the name, paragraph with their age, ul and some li's with their interests, image
  // name
  const h2 = document.createElement("h2"); // <h2></h2>
  h2.textContent = this.name; // <h2>Trevor</h2>
  article.appendChild(h2); // <article><h2>Trevor</h2></article>

  // age
  const p = document.createElement("p");
  p.textContent = `${this.name} is ${this.age} months old.`;
  article.appendChild(p);

  // interests
  const ul = document.createElement("ul");
  for (let i = 0; i < this.interests.length; i++) {
    const li = document.createElement("li");
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }
  article.appendChild(ul);

  // image
  const img = document.createElement("img");
  img.src = this.image;
  img.setAttribute("alt", this.name);
  article.appendChild(img);

  // add the article to the page (by appending to the kittenProfiles div)
  kittenProfiles.appendChild(article);
};

const trevor = new Kitten(
  "Trevor",
  2,
  ["Philosophy", "Bacon", "Fish", "Minimilism"],
  "./images/trevor.jpg",
  true,
  false,
  false,
  "ginger"
);

trevor.render();
phylis.render();

// const tokyo = {
//   location: "tokyo",
//   minCust: 3,
//   maxCust: 24,
//   avgCookiesPerCust: 1.2,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookieSold: 0,
//   calculateSales: function () {
//     // add a random number to the customersPerHour array
//     for (let i = 0; i < hours.length; i++) {
//       const randNum = randomNumber(this.minCust, this.maxCust);
//       this.customersPerHour.push(randNum);
//       this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
//       console.log(randNum);
//     }
//   },
// };

// const dubai = {
//   location: "dubai",
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesPerCust: 3.7,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookieSold: 0,
//   calculateSales: function () {
//     // add a random number to the customersPerHour array
//     for (let i = 0; i < hours.length; i++) {
//       const randNum = randomNumber(this.minCust, this.maxCust);
//       this.customersPerHour.push(randNum);
//       this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
//       console.log(randNum);
//     }
//   },
// };

// const paris = {
//   location: "paris",
//   minCust: 20,
//   maxCust: 38,
//   avgCookiesPerCust: 2.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookieSold: 0,
//   calculateSales: function () {
//     // add a random number to the customersPerHour array
//     for (let i = 0; i < hours.length; i++) {
//       const randNum = randomNumber(this.minCust, this.maxCust);
//       this.customersPerHour.push(randNum);
//       this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
//       console.log(randNum);
//     }
//   },
// };

// const lima = {
//   location: "lima",
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesPerCust: 4.6,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookieSold: 0,
//   calculateSales: function () {
//     // add a random number to the customersPerHour array
//     for (let i = 0; i < hours.length; i++) {
//       const randNum = randomNumber(this.minCust, this.maxCust);
//       this.customersPerHour.push(randNum);
//       this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
//       console.log(randNum);
//     }
//   },
// };
