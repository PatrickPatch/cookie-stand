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
  location: "seattle",
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

// inside that article, i need to put a h2 for the name, paragraph with their age, ul and some li's with their interests, image
// name
const h2 = document.createElement("h2"); // <h2></h2>
h2.textContent = seattle.location; // <h2>Trevor</h2>
article.appendChild(h2); // <article><h2>Trevor</h2></article>

// age
// const p = document.createElement("p");
// p.textContent = `${trevor.name} is ${trevor.age} months old.`;
// article.appendChild(p);

// interests
const ul = document.createElement("ul");
for (let i = 0; i < seattle.cookiesPerHour.length; i++) {
  const li = document.createElement("li");
  li.textContent = seattle.cookiesPerHour[i];
  ul.appendChild(li);
}
article.appendChild(ul);

// image
// const img = document.createElement("img");
// img.src = trevor.image;
// img.setAttribute("alt", trevor.name);
// article.appendChild(img);

// add the article to the page (by appending to the kittenProfiles div)
saleLocations.appendChild(article);
