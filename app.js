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

function cookieshop(location, minCust, maxCust, avgCookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
}



{
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {

    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      console.log(randNum);
    }
  }
}

{
cookieshop.prototype.bakecookies = function () {
  const CookieSales = document.getElementById("CookieSales");
};

  const article = document.createElement("article");

  const h2 = document.createElement("h2"); 
  h2.textContent = this.location; 
  article.appendChild(h2); 

  article.appendChild(ul);

  CookieSales.appendChild(article);
}

const seattle = new cookieshop("Seattle", 23, 65, 6.3, [], [], 0);
const tokyo = new cookieshop("Tokyo", 3, 24, 1.2, [], [], 0);
const dubai = new cookieshop("Dubai", 11, 38, 3.7, [], [], 0);
const paris = new cookieshop("Paris", 20, 38, 2.3, [], [], 0);
const lima = new cookieshop("Lima", 2, 16, 4.6, [], [], 0);

seattle.bakecookies();
tokyo.bakecookies();
dubai.bakecookies();
paris.bakecookies();
lima.bakecookies();
