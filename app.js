'use strict';
//Global Values
var locations = [];
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


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
};
var storeOne = new storeConstructor('1st and Pike',23,65,6.3);
storeOne.calculateHourlyCookieSales();
storeOne.render();
var storeTwo = new storeConstructor('SeaTac Airport',3,24,1.2);
storeTwo.calculateHourlyCookieSales();
storeTwo.render();
var storeThree = new storeConstructor('Seattle Center',11,38,3,7);
storeThree.calculateHourlyCookieSales();
storeThree.render();
var storeFour = new storeConstructor('Capitol Hill',20,38,2.3);
storeFour.calculateHourlyCookieSales();
storeFour.render();
var storeFive = new storeConstructor('Alki',2,16,4.6);
storeFive.calculateHourlyCookieSales();
storeFive.render();





