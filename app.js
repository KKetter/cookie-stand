'use strict';
//Global Values
var locations = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var firstAndPike = {
    locationName: '1st and Pike',
    sales:{
        minCustPerHour: 23,
        maxCustPerHour: 65,
        avgCookiesPerCust: 6.3,
        },
        //array equal to hours of operation
        //fill that array with random numbers with getRandomArbitrary and multiply by avgCookiesPerCust
        getHourlyCookies: function(){
            return (Math.ceil((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour) * this.sales.avgCookiesPerCust));
        },
        hourlyCookies: [],
        calculateHourlyCookieSales: function(){
            for (let index = 0; index < hours.length; index++) {
                this.hourlyCookies.push(this.getHourlyCookies())
            }
        }
};
firstAndPike.calculateHourlyCookieSales();

var seaTacAirport = {
    locationName: 'SeaTac Airport',
    sales:{
        minCustPerHour: 3,
        maxCustPerHour: 24,
        avgCookiesPerCust: 1.2,
        },
        //array equal to hours of operation
        //fill that array with random numbers with getRandomArbitrary and multiply by avgCookiesPerCust
        getHourlyCookies: function(){
            return (Math.ceil((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour) * this.sales.avgCookiesPerCust));
        },
        hourlyCookies: [],
        calculateHourlyCookieSales: function(){
            for (let index = 0; index < hours.length; index++) {
                this.hourlyCookies.push(this.getHourlyCookies())
            }
        }
};
seaTacAirport.calculateHourlyCookieSales();

var seattleCenter = {
    locationName: 'Seattle Center',
    sales:{
        minCustPerHour: 11,
        maxCustPerHour: 38,
        avgCookiesPerCust: 3.7,
        },
        //array equal to hours of operation
        //fill that array with random numbers with getRandomArbitrary and multiply by avgCookiesPerCust
        getHourlyCookies: function(){
            return (Math.ceil((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour) * this.sales.avgCookiesPerCust));
        },
        hourlyCookies: [],
        calculateHourlyCookieSales: function(){
            for (let index = 0; index < hours.length; index++) {
                this.hourlyCookies.push(this.getHourlyCookies())
            }
        }
};
seattleCenter.calculateHourlyCookieSales();

var capitolHill = {
    locationName: 'Capitol Hill',
    sales:{
        minCustPerHour: 20,
        maxCustPerHour: 38,
        avgCookiesPerCust: 2.3,
        },
        //array equal to hours of operation
        //fill that array with random numbers with getRandomArbitrary and multiply by avgCookiesPerCust
        getHourlyCookies: function(){
            return (Math.ceil((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour) * this.sales.avgCookiesPerCust));
        },
        hourlyCookies: [],
        calculateHourlyCookieSales: function(){
            for (let index = 0; index < hours.length; index++) {
                this.hourlyCookies.push(this.getHourlyCookies())
            }
        }
};
capitolHill.calculateHourlyCookieSales();

var alki = {
    locationName: 'Alki',
    sales:{
        minCustPerHour: 2,
        maxCustPerHour: 16,
        avgCookiesPerCust: 4.6,
        },
        //array equal to hours of operation
        //fill that array with random numbers with getRandomArbitrary and multiply by avgCookiesPerCust
        getHourlyCookies: function(){
            return (Math.ceil((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour) * this.sales.avgCookiesPerCust));
        },
        hourlyCookies: [],
        calculateHourlyCookieSales: function(){
            for (let index = 0; index < hours.length; index++) {
                this.hourlyCookies.push(this.getHourlyCookies())
            }
        }
};
alki.calculateHourlyCookieSales();
//invoke calculator functions for each
//Randomly select a value between minCust and maxCust, multiple by avgCook sold to find hourly sales total
//find whole integers
function getRandomCookies(minCustPerHour,maxCustPerHour,avgCookiesPerCust){
    return ((Math.random() * (maxCustPerHour - minCustPerHour) + minCustPerHour)* avgCookiesPerCust);
    };

//lets make some stuff appear on the page
var ulEl = document.getElementById('1st And Pike');
for (let index = 0; index < hours.length; index++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[index] + ': ' + firstAndPike.hourlyCookies[index] + ' cookies';
    ulEl.appendChild(liEl);
};
var ulEl = document.getElementById('SeaTac Airport');
for (let index = 0; index < hours.length; index++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[index] + ': ' + seaTacAirport.hourlyCookies[index] + ' cookies';
    ulEl.appendChild(liEl);
};
var ulEl = document.getElementById('Seattle Center');
for (let index = 0; index < hours.length; index++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[index] + ': ' + seattleCenter.hourlyCookies[index] + ' cookies';
    ulEl.appendChild(liEl);
};
var ulEl = document.getElementById('Capitol Hill');
for (let index = 0; index < hours.length; index++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[index] + ': ' + capitolHill.hourlyCookies[index] + ' cookies';
    ulEl.appendChild(liEl);
};
var ulEl = document.getElementById('Alki');
for (let index = 0; index < hours.length; index++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[index] + ': ' + alki.hourlyCookies[index] + ' cookies';
    ulEl.appendChild(liEl);
};

