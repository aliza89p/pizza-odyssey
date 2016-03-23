function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PizzaLocation(name){
  this.name = name;
  this.hourlyData = [];
}

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
ballard.pushHourlyData(new HourlyData('12:00 am', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('1:00 am', 8, 15, 6, 16));

var slu = new PizzaLocation('South Lake Union');
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

function generateDataRow(hourlyData){
  var row = ducment.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = hourlyData[i];
    row.appendChild(col);
  }
  return row;
}

var ballardTable = document.createElement('table')

var secondRow = generateDataRow([])
// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// var eightAM = {
//   time: '8:00am',
//   pizzasSold: getRandomIntInclusive(0, 4),
//   deliveriesMade: getRandomIntInclusive(0, 4)
// };
// var deliveriesEightAM = eightAM.deliveriesMade;
// eightAM.driversNeeded = Math.ceil(deliveriesEightAM / 3);
// console.log('8am object');
//
// var nineAM = {
//   time: '9:00am',
//   pizzasSold: getRandomIntInclusive(0, 4),
//   deliveriesMade: getRandomIntInclusive(0, 4)
// };
// var deliveriesNineAM = nineAM.deliveriesMade;
// nineAM.driversNeeded = Math.ceil(deliveriesNineAM / 3);
// console.log('9am object');
//
// var tenAM = {
//   time: '10:00am',
//   pizzasSold: getRandomIntInclusive(0, 4),
//   deliveriesMade: getRandomIntInclusive(0, 4)
// };
// var deliveriesTenAM = tenAM.deliveriesMade;
// tenAM.driversNeeded = Math.ceil(deliveriesTenAM / 3);
// console.log('10am object');
//
// var elevenAM = {
//   time: '11:00am',
//   pizzasSold: getRandomIntInclusive(0, 7),
//   deliveriesMade: getRandomIntInclusive(0, 4)
// };
// var deliveriesElevenAM = elevenAM.deliveriesMade;
// elevenAM.driversNeeded = Math.ceil(deliveriesElevenAM / 3);
// console.log('10am object');
//
// var twelveNoon = {
//   time: '12 noon',
//   pizzasSold: getRandomIntInclusive(0, 7),
//   deliveriesMade: getRandomIntInclusive(0, 4),
// };
// var deliveriesTwelveNoon = twelveNoon.deliveriesMade;
// twelveNoon.driversNeeded = Math.ceil(deliveriesTwelveNoon / 3);
// console.log('noon object');
//
// var onePM = {
//   time: '1:00pm',
//   pizzasSold: getRandomIntInclusive(0, 7),
//   deliveriesMade: getRandomIntInclusive(0, 4)
// };
// var deliveriesOnePM = onePM.deliveriesMade;
// onePM.driversNeeded = Math.ceil(deliveriesOnePM / 3);
// console.log('1pm object');
//
// var twoPM = {
//   time: '2:00pm',
//   pizzasSold: getRandomIntInclusive(2, 15),
//   deliveriesMade: getRandomIntInclusive(1, 4)
// };
// var deliveriesTwoPM = twoPM.deliveriesMade;
// twoPM.driversNeeded = Math.ceil(deliveriesTwoPM / 3);
// console.log('2pm object');
//
// var threePM = {
//   time: '3:00pm',
//   pizzasSold: getRandomIntInclusive(2, 15),
//   deliveriesMade: getRandomIntInclusive(1, 4)
// };
// var deliveriesThreePM = threePM.deliveriesMade;
// threePM.driversNeeded = Math.ceil(deliveriesThreePM / 3);
// console.log('3pm object');
//
// var fourPM = {
//   time: '4:00pm',
//   pizzasSold: getRandomIntInclusive(2, 15),
//   deliveriesMade: getRandomIntInclusive(1, 4)
// };
// var deliveriesFourPM = fourPM.deliveriesMade;
// fourPM.driversNeeded = Math.ceil(deliveriesFourPM / 3);
// console.log('4pm object');
//
// var fivePM = {
//   time: '5:00pm',
//   pizzasSold: getRandomIntInclusive(15, 35),
//   deliveriesMade: getRandomIntInclusive(3, 8)
// };
// var deliveriesFivePM = fivePM.deliveriesMade;
// fivePM.driversNeeded = Math.ceil(deliveriesFivePM / 3);
// console.log('5pm object');
//
// var sixPM = {
//   time: '6:00pm',
//   pizzasSold: getRandomIntInclusive(15, 35),
//   deliveriesMade: getRandomIntInclusive(3, 8)
// };
// var deliveriesSixPM = sixPM.deliveriesMade;
// sixPM.driversNeeded = Math.ceil(deliveriesSixPM / 3);
// console.log('6pm object');
//
// var sevenPM = {
//   time: '7:00pm',
//   pizzasSold: getRandomIntInclusive(15, 35),
//   deliveriesMade: getRandomIntInclusive(3, 8)
// };
// var deliveriesSevenPM = sevenPM.deliveriesMade;
// sevenPM.driversNeeded = Math.ceil(deliveriesSevenPM / 3);
// console.log('7pm object');
//
// var eightPM = {
//   time: '8:00pm',
//   pizzasSold: getRandomIntInclusive(12, 31),
//   deliveriesMade: getRandomIntInclusive(5, 12)
// };
// var deliveriesEightPM = eightPM.deliveriesMade;
// eightPM.driversNeeded = Math.ceil(deliveriesEightPM / 3);
// console.log('8pm object');
//
// var ninePM = {
//   time: '9:00pm',
//   pizzasSold: getRandomIntInclusive(12, 31),
//   deliveriesMade: getRandomIntInclusive(5, 12)
// };
// var deliveriesNinePM = ninePM.deliveriesMade;
// ninePM.driversNeeded = Math.ceil(deliveriesNinePM / 3);
// console.log('9pm object');
//
// var tenPM = {
//   time: '10:00pm',
//   pizzasSold: getRandomIntInclusive(12, 31),
//   deliveriesMade: getRandomIntInclusive(5, 12)
// };
// var deliveriesTenPM = tenPM.deliveriesMade;
// tenPM.driversNeeded = Math.ceil(deliveriesTenPM / 3);
// console.log('10pm object');
//
// var elevenPM = {
//   time: '11:00pm',
//   pizzasSold: getRandomIntInclusive(5, 20),
//   deliveriesMade: getRandomIntInclusive(6, 11)
// };
// var deliveriesElevenPM = elevenPM.deliveriesMade;
// elevenPM.driversNeeded = Math.ceil(deliveriesElevenPM / 3);
// console.log('11pm object');
//
// var twelveMidnight = {
//   time: '12 midnight',
//   pizzasSold: getRandomIntInclusive(5, 20),
//   deliveriesMade: getRandomIntInclusive(6, 11)
// };
// var deliveriesTwelveMidnight = twelveMidnight.deliveriesMade;
// twelveMidnight.driversNeeded = Math.ceil(deliveriesTwelveMidnight / 3);
// console.log('midnight object');
//
// var oneAM = {
//   time: '1:00 am',
//   pizzasSold: getRandomIntInclusive(5, 20),
//   deliveriesMade: getRandomIntInclusive(6, 11)
// };
// var deliveriesOneAM = oneAM.deliveriesMade;
// oneAM.driversNeeded = Math.ceil(deliveriesOneAM / 3);
// console.log('1am object');
//
// var dataArray = [eightAM, nineAM, tenAM, elevenAM, twelveNoon, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM, tenPM, elevenPM, twelveMidnight, oneAM];
// console.log('dataArray');
//
// var ballardId = document.getElementById('ballard');
// for(var i = 0; i < dataArray.length; i++) {
//   var liTag = document.createElement('li');
//   liTag.textContent = dataArray[i].time + ' ' + dataArray[i].pizzasSold + ' pizzas, ' + dataArray[i].deliveriesMade + ' deliveries -- [drivers recommended: ' + dataArray[i].driversNeeded + ']';
//   ballardId.appendChild(liTag);
// }
// console.log('ballard list');
//
// var firstHillId = document.getElementById('firstHill');
// for(var i = 0; i < dataArray.length; i++){
//   var liTag = document.createElement('li');
//   liTag.textContent = dataArray[i].time + ' ' + dataArray[i].pizzasSold + ' pizzas, ' + dataArray[i].deliveriesMade + ' deliveries -- [drivers recommended: ' + dataArray[i].driversNeeded + ']';
//   firstHillId.appendChild(liTag);
// }
// console.log('first hill list');
//
// var internationalDistrictId = document.getElementById('internationalDistrict');
// for(var i = 0; i < dataArray.length; i++){
//   var liTag = document.createElement('li');
//   liTag.textContent = dataArray[i].time + ' ' + dataArray[i].pizzasSold + ' pizzas, ' + dataArray[i].deliveriesMade + ' deliveries -- [drivers recommended: ' + dataArray[i].driversNeeded + ']';
//   internationalDistrictId.appendChild(liTag);
// }
// console.log('international district list');
//
// var SLUId = document.getElementById('SLU');
// for(var i = 0; i < dataArray.length; i++){
//   var liTag = document.createElement('li');
//   liTag.textContent = dataArray[i].time + ' ' + dataArray[i].pizzasSold + ' pizzas, ' + dataArray[i].deliveriesMade + ' deliveries -- [drivers recommended: ' + dataArray[i].driversNeeded + ']';
//   SLUId.appendChild(liTag);
// }
// console.log('SLU list');
//
// var georgetownId = document.getElementById('georgetown');
// for(var i = 0; i < dataArray.length; i++){
//   var liTag = document.createElement('li');
//   liTag.textContent = dataArray[i].time + ' ' + dataArray[i].pizzasSold + ' pizzas, ' + dataArray[i].deliveriesMade + ' deliveries -- [drivers recommended: ' + dataArray[i].driversNeeded + ']';
//   georgetownId.appendChild(liTag);
// }
// console.log('georgetown list');
//
// var ravennaId = document.getElementById('ravenna');
// for(var i = 0; i < dataArray.length; i++){
//   var liTag = document.createElement('li');
//   liTag.textContent = dataArray[i].time + ' ' + dataArray[i].pizzasSold + ' pizzas, ' + dataArray[i].deliveriesMade + ' deliveries -- [drivers recommended: ' + dataArray[i].driversNeeded + ']';
//   ravennaId.appendChild(liTag);
// }
// console.log('ravenna list');
//
// // Figure out how to add exact total number of pizzas this week to index.html:
//
// //Work on this code:
// // function weeklyPizzas() {
// //   var pizzaTag = document.getElementById('pizzasThisWeek');
// //   var pTag = document.createElement('p');
// //   pTag.textContent = 'best page heading ever!';
// // }
// // weeklyPizzas();
// // console.log('number of weekly pizzas for homepage');
