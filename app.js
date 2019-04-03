'use strict';
// Global Values
// array to hold all locations
var locations = [];
var salesTable = document.getElementById('sales');
// Hard code this to populate as the table head with a for loop
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// //make table body
// function generate_table() {
//     // get the reference for the body
//     //var body = document.getElementById("body");
  
//     // creates a <table> element and a <tbody> element
//     var tbl = document.createElement("table");
//     //var tblBody = document.createElement("tbody");
    
//     //tblHeadData.textContent = this.locationName;
//     for (let index = 0; index < locations.length; index++) {
//         var trEl = document.createElement("tr");
//         var tblHeadData = document.createElement("tr");
//         tblHeadData.textContent = locations[index].locationName;
//         console.log('info', locations[index].locationName); 
//         trEl.appendChild(tblHeadData);
//         //where do we append this? Tried:tblBody(all in 1x1 position)
//         tbl.appendChild(trEl); 
//         //var tr = document.createElement("tr");
//     }
//     createHeaderRow(tbl);
//     // creating all body cells
//     for (var i = 0; i < locations.length; i++) {
//       // creates a table row
//       var row = document.createElement("tr");
//       for (var j = 0; j < hours.length; j++) {
//         var cell = document.createElement("td");
//         var cellText = document.createTextNode(locations[i].hourlyCookies[j]);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       }
//       // add the row to the end of the table body
//       tbl.appendChild(row);
//     }
//     // put the <tbody> in the <table>
//     //tbl.appendChild(tblBody);
//     // appends <table> into <body>
//     body.appendChild(tbl);
//   };

//   //create table header
//   function createHeaderRow(tbl){
//     var tr = document.createElement("tr");
//     tbl.appendChild(tr);
//     for (let index = 0; index < hours.length; index++) {
//         var header = document.createElement("th");
//         header.textContent = hours[index];
//         tr.appendChild(header);
//     }
//   };

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
var storeTwo = new storeConstructor('SeaTac Airport',3,24,1.2);
storeTwo.calculateHourlyCookieSales();
var storeThree = new storeConstructor('Seattle Center',11,38,3,7);
storeThree.calculateHourlyCookieSales();
var storeFour = new storeConstructor('Capitol Hill',20,38,2.3);
storeFour.calculateHourlyCookieSales();
var storeFive = new storeConstructor('Alki',2,16,4.6);
storeFive.calculateHourlyCookieSales();






