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
        hourlyCookies: [],
        getHourlyCookies: function(){
            return ((Math.random() * (this.sales.maxCustPerHour - this.sales.minCustPerHour) + this.sales.minCustPerHour)* this.sales.avgCookiesPerCust);
        },
};
console.log('', firstAndPike.hoursOfOperation);

//Randomly select a value between minCust and maxCust, multiple by avgCook sold to find hourly sales total
function getRandomCookies(minCustPerHour,maxCustPerHour,avgCookiesPerCust){
    return ((Math.random() * (maxCustPerHour - minCustPerHour) + minCustPerHour)* avgCookiesPerCust);
    };

//lets make some stuff appear on the page

var ulEL = document.getElementById("results");
for (let index = 0; firstAndPike.hoursOfOperation.length; index++) {
    var liEL = document.createElement('li');
    liEL.textContent = hoursOfOperation[i];
    ulEl.appendChild(liEl);
};
