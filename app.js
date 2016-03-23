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

var slu = new PizzaLocation('SLU');
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

// function fillInTable(name){
//   for(var i = 0; i < hourlyData.length; i++){
//     var dataTime = name.hourlyData[i].time;
//     var dataPizzas = name.hourlyData[i].pizzasSold;
//     var dataDeliveries = name.hourlyData[i].deliveriesMade;
//     var dataDrivers = name.hourlyData[i].driversNeeded;
//   }
//   return dataTime;
//   return dataPizzas;
//   return dataDeliveries;
//   return dataDrivers;
// }

var labelRow = generateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);

var dataTable = document.createElement('table');

document.getElementById('ballard').appendChild(dataTable);

dataTable.appendChild(labelRow);

var eightAmRow = generateDataRow([ballard.hourlyData[0].time, ballard.hourlyData[0].pizzasSold, ballard.hourlyData[0].deliveriesMade, ballard.hourlyData[0].driversNeeded]);

dataTable.appendChild(eightAmRow);

var nineAmRow = generateDataRow([ballard.hourlyData[1].time, ballard.hourlyData[1].pizzasSold, ballard.hourlyData[1].deliveriesMade, ballard.hourlyData[1].driversNeeded]);

dataTable.appendChild(nineAmRow);

var tenAmRow = generateDataRow([ballard.hourlyData[2].time, ballard.hourlyData[2].pizzasSold, ballard.hourlyData[2].deliveriesMade, ballard.hourlyData[2].driversNeeded]);

dataTable.appendChild(tenAmRow);

var elevenAmRow = generateDataRow([ballard.hourlyData[3].time, ballard.hourlyData[3].pizzasSold, ballard.hourlyData[3].deliveriesMade, ballard.hourlyData[3].driversNeeded]);

dataTable.appendChild(elevenAmRow);

var twelveNoonRow = generateDataRow([ballard.hourlyData[4].time, ballard.hourlyData[4].pizzasSold, ballard.hourlyData[4].deliveriesMade, ballard.hourlyData[4].driversNeeded]);

dataTable.appendChild(twelveNoonRow);

var onePmRow = generateDataRow([ballard.hourlyData[5].time, ballard.hourlyData[5].pizzasSold, ballard.hourlyData[5].deliveriesMade, ballard.hourlyData[5].driversNeeded]);

dataTable.appendChild(onePmRow);

var twoPmRow = generateDataRow([ballard.hourlyData[6].time, ballard.hourlyData[6].pizzasSold, ballard.hourlyData[6].deliveriesMade, ballard.hourlyData[6].driversNeeded]);

dataTable.appendChild(twoPmRow);

var threePmRow = generateDataRow([ballard.hourlyData[7].time, ballard.hourlyData[7].pizzasSold, ballard.hourlyData[7].deliveriesMade, ballard.hourlyData[7].driversNeeded]);

dataTable.appendChild(threePmRow);

var fourPmRow = generateDataRow([ballard.hourlyData[8].time, ballard.hourlyData[8].pizzasSold, ballard.hourlyData[8].deliveriesMade, ballard.hourlyData[8].driversNeeded]);

dataTable.appendChild(fourPmRow);

var fivePmRow = generateDataRow([ballard.hourlyData[9].time, ballard.hourlyData[9].pizzasSold, ballard.hourlyData[9].deliveriesMade, ballard.hourlyData[9].driversNeeded]);

dataTable.appendChild(fivePmRow);

var sixPmRow = generateDataRow([ballard.hourlyData[10].time, ballard.hourlyData[10].pizzasSold, ballard.hourlyData[10].deliveriesMade, ballard.hourlyData[10].driversNeeded]);

dataTable.appendChild(sixPmRow);

var sevenPmRow = generateDataRow([ballard.hourlyData[11].time, ballard.hourlyData[11].pizzasSold, ballard.hourlyData[11].deliveriesMade, ballard.hourlyData[11].driversNeeded]);

dataTable.appendChild(sevenPmRow);

var eightPmRow = generateDataRow([ballard.hourlyData[12].time, ballard.hourlyData[12].pizzasSold, ballard.hourlyData[12].deliveriesMade, ballard.hourlyData[12].driversNeeded]);

dataTable.appendChild(eightPmRow);

var ninePmRow = generateDataRow([ballard.hourlyData[13].time, ballard.hourlyData[13].pizzasSold, ballard.hourlyData[13].deliveriesMade, ballard.hourlyData[13].driversNeeded]);

dataTable.appendChild(ninePmRow);

var tenPmRow = generateDataRow([ballard.hourlyData[14].time, ballard.hourlyData[14].pizzasSold, ballard.hourlyData[14].deliveriesMade, ballard.hourlyData[14].driversNeeded]);

dataTable.appendChild(tenPmRow);

var elevenPmRow = generateDataRow([ballard.hourlyData[15].time, ballard.hourlyData[15].pizzasSold, ballard.hourlyData[15].deliveriesMade, ballard.hourlyData[15].driversNeeded]);

dataTable.appendChild(elevenPmRow);

var twelveMidnightRow = generateDataRow([ballard.hourlyData[16].time, ballard.hourlyData[16].pizzasSold, ballard.hourlyData[16].deliveriesMade, ballard.hourlyData[16].driversNeeded]);

dataTable.appendChild(twelveMidnightRow);

var oneAmRow = generateDataRow([ballard.hourlyData[17].time, ballard.hourlyData[17].pizzasSold, ballard.hourlyData[17].deliveriesMade, ballard.hourlyData[17].driversNeeded]);

dataTable.appendChild(oneAmRow);

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
