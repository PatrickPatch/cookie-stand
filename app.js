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

const table = document.getElementById("salesData");

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//constructor for cookies
function CookieShop(location, minCust, maxCust, avgCookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSold = 0;
}

CookieShop.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    const hourCustomers = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(hourCustomers);

    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);
    this.cookiesPerHour.push(hourCookiesSold);

    this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
  }
};

CookieShop.prototype.bakecookies = function () {
  this.calculateSales();

  const tr = document.createElement("tr");
  const th = document.createElement("th");

  th.textContent = this.location;
  tr.appendChild(th);

  // add this store's data to that row
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    // create a new td and put the sales number in it
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }
  //add total to end of row
  const totalTd = document.createElement("td");

  totalTd.textContent = this.totalCookieSold;
  tr.appendChild(totalTd);
  //add row to table
  table.appendChild(tr);
};

const seattle = new CookieShop("Seattle", 23, 65, 6.3);
const tokyo = new CookieShop("Tokyo", 3, 24, 1.2);
const dubai = new CookieShop("Dubai", 11, 38, 3.7);
const paris = new CookieShop("Paris", 20, 38, 2.3);
const lima = new CookieShop("Lima", 2, 16, 4.6);

const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);

// add each time in a th
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours[i];
  headerRow.appendChild(th);
}

// add a total heading
const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading);

// add the row to the table
table.appendChild(headerRow);

seattle.bakecookies();
tokyo.bakecookies();
dubai.bakecookies();
paris.bakecookies();
lima.bakecookies();
