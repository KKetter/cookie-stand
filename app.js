'use strict';
// Global Values
// array to hold all locations
var locations = [];
var salesTable = document.getElementById('sales');
// Hard code this to populate as the table head with a for loop
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
// function makeHeaderRow(){
//     var trEl = document.createElement('tr');
//     var thEl = document.createElement('th');
//     thEl.textContent = hours[0];

// }
function generate_table() {
    // get the reference for the body
    var body = document.getElementById("body");
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < locations.length; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < hours.length; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        //below line should push an hourlycookiesarray - one at a time
        var cellText = document.createTextNode(storeOne.hourlyCookies[i]);
        //cell.textContent = "cell in row ";
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
  };

function storeConstructor(locationName,minCustPerHour,maxCustPerHour,avgCookiesPerCust){
    this.locationName = locationName;
    this.hourlyCookies = [];
    this.sales = {
        minCustPerHour : minCustPerHour,
        maxCustPerHour : maxCustPerHour,
        avgCookiesPerCust : avgCookiesPerCust,
        totalCookiesForDay : 0,
    },
    this.getHourlyCookies = function(){
        return (Math.ceil((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour) * this.sales.avgCookiesPerCust));
    },
    this.calculateHourlyCookieSales = function(){
        for (let index = 0; index < hours.length; index++) {
            var currentCookie = this.getHourlyCookies();
            this.hourlyCookies.push(currentCookie);
            this.sales.totalCookiesForDay += currentCookie;
        }
    },
    this.render = function(){
        var pEl = document.createElement('p');
        pEl.textContent = this.locationName;
        var ulEl = document.createElement('ul');
        for (let index = 0; index < hours.length; index++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[index]}: ${this.hourlyCookies[index]} cookies`;
            ulEl.appendChild(liEl);
            }
            liEl = document.createElement('li');
            liEl.textContent = `Total: ${this.sales.totalCookiesForDay} cookies`;
            ulEl.appendChild(liEl);
            var bodyEl = document.getElementById('body');
            bodyEl.appendChild(pEl);
            bodyEl.appendChild(ulEl);
    }
    locations.push(this);
};
var storeOne = new storeConstructor('1st and Pike',23,65,6.3);
storeOne.calculateHourlyCookieSales();
//storeOne.render();
var storeTwo = new storeConstructor('SeaTac Airport',3,24,1.2);
storeTwo.calculateHourlyCookieSales();
//storeTwo.render();
var storeThree = new storeConstructor('Seattle Center',11,38,3,7);
storeThree.calculateHourlyCookieSales();
//storeThree.render();
var storeFour = new storeConstructor('Capitol Hill',20,38,2.3);
storeFour.calculateHourlyCookieSales();
//storeFour.render();
var storeFive = new storeConstructor('Alki',2,16,4.6);
storeFive.calculateHourlyCookieSales();
//storeFive.render();
//makes table - please order after constructors
generate_table();





