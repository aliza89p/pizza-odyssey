'use strict';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PizzaLocation(name){
  this.name = name;
  this.hourlyData = [];

}

//Use constructor? ^^^^^^

PizzaLocation.prototype.pushHourlyData = function(data){
  this.hourlyData.push(data);
};

function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

var ballard = new PizzaLocation('ballard');
ballard.pushHourlyData(new HourlyData('8:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('9:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('10:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('11:00 am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('12 noon', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('1:00 pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('5:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('6:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('7:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('8:00 pm', 1,3, 4, 12));
ballard.pushHourlyData(new HourlyData('9:00 pm', 1,3, 4, 12));
ballard.pushHourlyData(new HourlyData('10:00 pm', 1,3, 4, 12));
ballard.pushHourlyData(new HourlyData('11:00 pm', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('12:00 midnight', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('1:00 am', 8, 15, 6, 16));

var firstHill = new PizzaLocation('firstHill');
firstHill.pushHourlyData(new HourlyData('8:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('9:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('10:00 am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('11:00 am', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('12 noon', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('1:00 pm', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('5:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('6:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('7:00 pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('11:00 pm', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('12 midnight', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('1:00 am', 8, 20, 6, 16));

var iDistrict = new PizzaLocation('iDistrict');
iDistrict.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
iDistrict.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
iDistrict.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
iDistrict.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
iDistrict.pushHourlyData(new HourlyData('12 noon', 0, 7, 0, 4));
iDistrict.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
iDistrict.pushHourlyData(new HourlyData('2:00 pm', 2, 15, 1, 4));
iDistrict.pushHourlyData(new HourlyData('3:00 pm', 2, 15, 1, 4));
iDistrict.pushHourlyData(new HourlyData('4:00 pm', 2, 15, 1, 4));
iDistrict.pushHourlyData(new HourlyData('5:00 pm', 10, 26, 4, 6));
iDistrict.pushHourlyData(new HourlyData('6:00 pm', 10, 26, 4, 6));
iDistrict.pushHourlyData(new HourlyData('7:00 pm', 10, 26, 4, 6));
iDistrict.pushHourlyData(new HourlyData('8:00 pm', 8, 22, 7, 15));
iDistrict.pushHourlyData(new HourlyData('9:00 pm', 8, 22, 7, 15));
iDistrict.pushHourlyData(new HourlyData('10:00 pm', 8, 22, 7, 15));
iDistrict.pushHourlyData(new HourlyData('11:00 pm', 0, 2, 2, 18));
iDistrict.pushHourlyData(new HourlyData('12 midnight', 0, 2, 2, 18));
iDistrict.pushHourlyData(new HourlyData('1:00 am', 0, 2, 2, 18));

var slu = new PizzaLocation('slu');
slu.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
slu.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
slu.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
slu.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
slu.pushHourlyData(new HourlyData('12 noon', 0, 7, 0, 4));
slu.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
slu.pushHourlyData(new HourlyData('2:00 pm', 5, 15, 0, 4));
slu.pushHourlyData(new HourlyData('3:00 pm', 5, 15, 0, 4));
slu.pushHourlyData(new HourlyData('4:00 pm', 5, 15, 0, 4));
slu.pushHourlyData(new HourlyData('5:00 pm', 25, 39, 13, 18));
slu.pushHourlyData(new HourlyData('6:00 pm', 25, 39, 13, 18));
slu.pushHourlyData(new HourlyData('7:00 pm', 25, 39, 13, 18));
slu.pushHourlyData(new HourlyData('8:00 pm', 22, 36, 5, 22));
slu.pushHourlyData(new HourlyData('9:00 pm', 22, 36, 5, 22));
slu.pushHourlyData(new HourlyData('10:00 pm', 22, 36, 5, 22));
slu.pushHourlyData(new HourlyData('11:00 pm', 5, 21, 16, 31));
slu.pushHourlyData(new HourlyData('12 midnight', 5, 21, 16, 31));
slu.pushHourlyData(new HourlyData('1:00 am', 5, 21, 16, 31));

var georgetown = new PizzaLocation('georgetown');
georgetown.pushHourlyData(new HourlyData('8:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('9:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('10:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('11:00 am', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('12 noon', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('1:00 pm', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('2:00 pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('3:00 pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('4:00 pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('5:00 pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('6:00 pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('7:00 pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('8:00 pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('9:00 pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('10:00 pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('11:00 pm', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData('12 midnight', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData('1:00 am', 15, 20, 6, 21));

var ravenna = new PizzaLocation('ravenna');
ravenna.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('12 noon', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('2:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('3:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('4:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('5:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('6:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('7:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('8:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('9:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('10:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('11:00 pm', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('12 midnight', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('1:00 am', 2, 4, 3, 11));

function generateDataRow(hourlyData){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < hourlyData.length; i++){
    col = document.createElement('td');
    col.textContent = hourlyData[i];
    row.appendChild(col);
  }
  return row;
}

function generateHeadingRow(hourlyData){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < hourlyData.length; i++){
    col = document.createElement('th');
    col.textContent = hourlyData[i];
    row.appendChild(col);
  }
  return row;
}

function repeatTable(dataLocation, locationId) {
  var labelRow = generateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);

  var dataTable = document.createElement('table');

  document.getElementById(locationId).appendChild(dataTable);

  dataTable.appendChild(labelRow);

  var createTableData = document.getElementById(locationId);
  for(var i = 0; i < dataLocation.hourlyData.length; i++){
    var genericRow = generateDataRow([dataLocation.hourlyData[i].time, dataLocation.hourlyData[i].pizzasSold, dataLocation.hourlyData[i].deliveriesMade, dataLocation.hourlyData[i].driversNeeded]);
    dataTable.appendChild(genericRow);
  }
}

repeatTable(ballard, 'ballard');

repeatTable(firstHill, 'firstHill');

repeatTable(iDistrict, 'iDistrict');

repeatTable(slu, 'slu');

repeatTable(georgetown, 'georgetown');

repeatTable(ravenna, 'ravenna');

function collectDataInfo(event){
  event.preventDefault();

  var storeLocation = event.target.storeLocation.value;
  console.log('getting input for store', storeLocation);

  var timeStringOne = event.target.timeStringOne.value;
  console.log('getting input from timeStringOne', timeStringOne);

  var pizzasMinOne = parseInt(event.target.pizzasMinOne.value);
  console.log('getting input for pizzasMinOne', pizzasMinOne);

  var pizzasMaxOne = parseInt(event.target.pizzasMaxOne.value);
  console.log('getting input for pizzasMaxOne', pizzasMaxOne);

  var deliveriesMinOne = parseInt(event.target.deliveriesMinOne.value);
  console.log('getting input for deliveriesMinOne', deliveriesMinOne);

  var deliveriesMaxOne = parseInt(event.target.deliveriesMaxOne.value);
  console.log('getting input for deliveriesMaxOne', deliveriesMaxOne);

  var userLocation = new PizzaLocation(storeLocation);
  var hourlyData = new HourlyData(timeStringOne, pizzasMinOne, pizzasMaxOne, deliveriesMinOne, deliveriesMaxOne);

  userLocation.pushHourlyData(hourlyData);

//code for adding table location heading below
  var storeTableHeading = document.getElementById('thead');
  var storeHeading = document.createElement('h1');
  console.log('creating variable for h1 ', storeHeading);

  storeHeading.textContent = storeLocation;
  storeTableHeading.appendChild(storeHeading);
  console.log('displaying location heading');
}

var createStoreForm = document.getElementById('input-data-form');

createStoreForm.addEventListener('submit', collectDataInfo);

if (document.getElementById('pizzasThisWeek')){
  // // Figure out how to add exact total number of pizzas this week to index.html:
  //
  // //Work on this code:
  // function weeklyPizzas() {
  //   var pizzaTag = document.getElementById('pizzasThisWeek');
  //   var pTag = document.createElement('p');
  //   pTag.textContent = 'best page heading ever!';
  // }
  // weeklyPizzas();
  // console.log('number of weekly pizzas for homepage');
}
