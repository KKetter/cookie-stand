'use strict';
var locations = [];
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Store(locationName,minCustPerHour,maxCustPerHour,avgCookiesPerCust){
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
    }
    locations.push(this);
};

new Store('1st and Pike',23,65,6.3);
new Store('SeaTac Airport',3,24,1.2);
new Store('Seattle Center',11,38,3,7);
new Store('Capitol Hill',20,38,2.3);
new Store('Alki',2,16,4.6);

for (let index = 0; index < locations.length; index++) {
    locations[index].calculateHourlyCookieSales();
};

function makeHeaderRow(){
    //anchor
    var table = document.getElementById('sales');    
    //create element
    var tableRow = document.createElement('tr');
    //create first td for empty space Lines 44-46
    var tableCell = document.createElement('td');
    tableCell.textContent = 'Location';
    tableRow.appendChild(tableCell);
    for (let index = 0; index < hours.length; index++) {
        var tableCell = document.createElement('td');
        //assign text to created cell
        tableCell.textContent = hours[index];
        //append cell to row
        tableRow.appendChild(tableCell);
    }
    //Create Total Field
    var tableCell = document.createElement('td');
    tableCell.textContent = 'Daily Total';
    tableRow.appendChild(tableCell);
    //append row to table
    table.appendChild(tableRow);
};
makeHeaderRow();

function makeTableRow(){
    //anchor
    var table = document.getElementById('sales');  
    for (let index = 0; index < locations.length; index++) {
    //create element
    var salesRow = document.createElement('tr');
    //create element to hold data
    var salesCell = document.createElement('td');
    //assign text to created
        salesCell.textContent = locations[index].locationName;
        salesRow.appendChild(salesCell);
        table.appendChild(salesRow);
        var runningTotal = 0;

        for (let index2 = 0; index2 < hours.length; index2++) {
            var salesCell2 =  document.createElement('td');
            salesCell2.textContent = locations[index].hourlyCookies[index2];
            salesRow.appendChild(salesCell2);
            runningTotal += locations[index].hourlyCookies[index2];
        };
        var salesCell2 = document.createElement('td');
        salesCell2.textContent = runningTotal;
        salesRow.appendChild(salesCell2);

    };
};
makeTableRow();

function makeFooterRow(){
    //anchor
    var table = document.getElementById('sales');
    //create elements - next 2 lines  
    var salesRow = document.createElement('tr');
    var salesCell = document.createElement('td');
    //assign text
    salesCell.textContent = 'Hourly Total';
    //put value into element
    salesRow.appendChild(salesCell);
    var grandTotal = 0;
    for (let index = 0; index < hours.length; index++) {
    var salesCell2 = document.createElement('td');
    var runningTotal = 0;
        for (let index2 = 0; index2 < locations.length; index2++) {
            runningTotal += locations[index2].hourlyCookies[index];
            

        }
        salesCell2.textContent = runningTotal;
        //grand total is sum of all daily totals
        grandTotal += runningTotal;

    salesRow.appendChild(salesCell2);
    };
    var salesCell3 = document.createElement('td');
    salesCell3.textContent = grandTotal;
    salesRow.appendChild(salesCell3);
    //put new element into table
    table.appendChild(salesRow);

};
makeFooterRow();









