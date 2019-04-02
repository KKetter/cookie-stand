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
        totalCookiesForDay: 0,
        },
        //fill that array with random numbers with getRandomArbitrary and multiply by avgCookiesPerCust
        getHourlyCookies: function(){
            return (Math.ceil((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour) * this.sales.avgCookiesPerCust));
        },
        hourlyCookies: [],
        calculateHourlyCookieSales: function(){
            for (let index = 0; index < hours.length; index++) {
                var currentCookie = this.getHourlyCookies();
                this.hourlyCookies.push(currentCookie);
                this.sales.totalCookiesForDay += currentCookie;
            }
        },
        render: function(){
            var ulEl = document.getElementById('1st And Pike');
            for (let index = 0; index < hours.length; index++) {
                var liEl = document.createElement('li');
                liEl.textContent = `${hours[index]}: ${this.hourlyCookies[index]} cookies`;
                ulEl.appendChild(liEl);
                }
                liEl = document.createElement('li');
                liEl.textContent = `Total: ${this.sales.totalCookiesForDay} cookies`;
                ulEl.appendChild(liEl);
        },
};
firstAndPike.calculateHourlyCookieSales();
firstAndPike.render();

var seaTacAirport = {
    locationName: 'SeaTac Airport',
    sales:{
        minCustPerHour: 3,
        maxCustPerHour: 24,
        avgCookiesPerCust: 1.2,
        totalCookiesForDay: 0,
        },
        //fill that array with random numbers with getRandomArbitrary and multiply by avgCookiesPerCust
        getHourlyCookies: function(){
            return (Math.ceil((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour) * this.sales.avgCookiesPerCust));
        },
        hourlyCookies: [],
        calculateHourlyCookieSales: function(){
            for (let index = 0; index < hours.length; index++) {
                var currentCookie = this.getHourlyCookies();
                this.hourlyCookies.push(currentCookie);
                this.sales.totalCookiesForDay += currentCookie;
            }
        },
        render: function(){
            var ulEl = document.getElementById('SeaTac Airport');
            for (let index = 0; index < hours.length; index++) {
                var liEl = document.createElement('li');
                liEl.textContent = `${hours[index]}: ${this.hourlyCookies[index]} cookies`;
                ulEl.appendChild(liEl);
                }
                liEl = document.createElement('li');
                liEl.textContent = `Total: ${this.sales.totalCookiesForDay} cookies`;
                ulEl.appendChild(liEl);
        },
};
seaTacAirport.calculateHourlyCookieSales();
seaTacAirport.render();

var seattleCenter = {
    locationName: 'Seattle Center',
    sales:{
        minCustPerHour: 11,
        maxCustPerHour: 38,
        avgCookiesPerCust: 3.7,
        totalCookiesForDay: 0,
        },
        //fill that array with random numbers with getRandomArbitrary and multiply by avgCookiesPerCust
        getHourlyCookies: function(){
            return (Math.ceil((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour) * this.sales.avgCookiesPerCust));
        },
        hourlyCookies: [],
        calculateHourlyCookieSales: function(){
            for (let index = 0; index < hours.length; index++) {
                var currentCookie = this.getHourlyCookies();
                this.hourlyCookies.push(currentCookie);
                this.sales.totalCookiesForDay += currentCookie;
            }
        },
        render: function(){
            var ulEl = document.getElementById('Seattle Center');
            for (let index = 0; index < hours.length; index++) {
                var liEl = document.createElement('li');
                liEl.textContent = `${hours[index]}: ${this.hourlyCookies[index]} cookies`;
                ulEl.appendChild(liEl);
                }
                liEl = document.createElement('li');
                liEl.textContent = `Total: ${this.sales.totalCookiesForDay} cookies`;
                ulEl.appendChild(liEl);
        },
};
seattleCenter.calculateHourlyCookieSales();
seattleCenter.render();

var capitolHill = {
    locationName: 'Capitol Hill',
    sales:{
        minCustPerHour: 20,
        maxCustPerHour: 38,
        avgCookiesPerCust: 2.3,
        totalCookiesForDay: 0,
        },
        //fill that array with random numbers with getRandomArbitrary and multiply by avgCookiesPerCust
        getHourlyCookies: function(){
            return (Math.ceil((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour) * this.sales.avgCookiesPerCust));
        },
        hourlyCookies: [],
        calculateHourlyCookieSales: function(){
            for (let index = 0; index < hours.length; index++) {
                var currentCookie = this.getHourlyCookies();
                this.hourlyCookies.push(currentCookie);
                this.sales.totalCookiesForDay += currentCookie;
            }
        },
        render: function(){
            var ulEl = document.getElementById('Capitol Hill');
            for (let index = 0; index < hours.length; index++) {
                var liEl = document.createElement('li');
                liEl.textContent = `${hours[index]}: ${this.hourlyCookies[index]} cookies`;
                ulEl.appendChild(liEl);
                }
                liEl = document.createElement('li');
                console.log('', this.sales.totalCookiesForDay);
                liEl.textContent = `Total: ${this.sales.totalCookiesForDay} cookies`;
                ulEl.appendChild(liEl);
        },
};
capitolHill.calculateHourlyCookieSales();
capitolHill.render();

var alki = {
    locationName: 'Alki',
    sales:{
        minCustPerHour: 2,
        maxCustPerHour: 16,
        avgCookiesPerCust: 4.6,
        totalCookiesForDay: 0,
        },
        //fill that array with random numbers with getRandomArbitrary and multiply by avgCookiesPerCust
        getHourlyCookies: function(){
            return (Math.ceil((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour) * this.sales.avgCookiesPerCust));
        },
        hourlyCookies: [],
        calculateHourlyCookieSales: function(){
            for (let index = 0; index < hours.length; index++) {
                var currentCookie = this.getHourlyCookies();
                this.hourlyCookies.push(currentCookie);
                this.sales.totalCookiesForDay += currentCookie;
            }
        },
        render: function(){
            var ulEl = document.getElementById('Alki');
            for (let index = 0; index < hours.length; index++) {
                var liEl = document.createElement('li');
                liEl.textContent = `${hours[index]}: ${this.hourlyCookies[index]} cookies`;
                ulEl.appendChild(liEl);
                }
                liEl = document.createElement('li');
                liEl.textContent = `Total: ${this.sales.totalCookiesForDay} cookies`;
                ulEl.appendChild(liEl);
        },
};
alki.calculateHourlyCookieSales();
alki.render();



