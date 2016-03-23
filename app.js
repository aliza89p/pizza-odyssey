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

var firstHill = new PizzaLocation('firstHill');
slu.pushHourlyData(new HourlyData('8:00 am', 1, 3, 1, 7));
slu.pushHourlyData(new HourlyData('9:00 am', 1, 3, 1, 7));
slu.pushHourlyData(new HourlyData('10:00 am', 1, 3, 1, 7));
slu.pushHourlyData(new HourlyData('11:00 am', 5, 9, 2, 8));
slu.pushHourlyData(new HourlyData('12 noon', 5, 9, 2, 8));
slu.pushHourlyData(new HourlyData('1:00 pm', 5, 9, 2, 8));
slu.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 6));
slu.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 6));
slu.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 6));
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

var ballardTable = document.createElement('table');

var labelRow = generateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);

ballardTable.appendChild(labelRow);

var eightAmRow = generateDataRow([ballard.hourlyData[0].time, ballard.hourlyData[0].pizzasSold, ballard.hourlyData[0].deliveriesMade, ballard.hourlyData[0].driversNeeded]);

ballardTable.appendChild(eightAmRow);

var nineAmRow = generateDataRow([ballard.hourlyData[1].time, ballard.hourlyData[1].pizzasSold, ballard.hourlyData[1].deliveriesMade, ballard.hourlyData[1].driversNeeded]);

ballardTable.appendChild(nineAmRow);

var tenAmRow = generateDataRow([ballard.hourlyData[2].time, ballard.hourlyData[2].pizzasSold, ballard.hourlyData[2].deliveriesMade, ballard.hourlyData[2].driversNeeded]);

ballardTable.appendChild(tenAmRow);

var elevenAmRow = generateDataRow([ballard.hourlyData[3].time, ballard.hourlyData[3].pizzasSold, ballard.hourlyData[3].deliveriesMade, ballard.hourlyData[3].driversNeeded]);

ballardTable.appendChild(elevenAmRow);

var twelveNoonRow = generateDataRow([ballard.hourlyData[4].time, ballard.hourlyData[4].pizzasSold, ballard.hourlyData[4].deliveriesMade, ballard.hourlyData[4].driversNeeded]);

ballardTable.appendChild(twelveNoonRow);

var onePmRow = generateDataRow([ballard.hourlyData[5].time, ballard.hourlyData[5].pizzasSold, ballard.hourlyData[5].deliveriesMade, ballard.hourlyData[5].driversNeeded]);

ballardTable.appendChild(onePmRow);

var twoPmRow = generateDataRow([ballard.hourlyData[6].time, ballard.hourlyData[6].pizzasSold, ballard.hourlyData[6].deliveriesMade, ballard.hourlyData[6].driversNeeded]);

ballardTable.appendChild(twoPmRow);

var threePmRow = generateDataRow([ballard.hourlyData[7].time, ballard.hourlyData[7].pizzasSold, ballard.hourlyData[7].deliveriesMade, ballard.hourlyData[7].driversNeeded]);

ballardTable.appendChild(threePmRow);

var fourPmRow = generateDataRow([ballard.hourlyData[8].time, ballard.hourlyData[8].pizzasSold, ballard.hourlyData[8].deliveriesMade, ballard.hourlyData[8].driversNeeded]);

ballardTable.appendChild(fourPmRow);

var fivePmRow = generateDataRow([ballard.hourlyData[9].time, ballard.hourlyData[9].pizzasSold, ballard.hourlyData[9].deliveriesMade, ballard.hourlyData[9].driversNeeded]);

ballardTable.appendChild(fivePmRow);

var sixPmRow = generateDataRow([ballard.hourlyData[10].time, ballard.hourlyData[10].pizzasSold, ballard.hourlyData[10].deliveriesMade, ballard.hourlyData[10].driversNeeded]);

ballardTable.appendChild(sixPmRow);

var sevenPmRow = generateDataRow([ballard.hourlyData[11].time, ballard.hourlyData[11].pizzasSold, ballard.hourlyData[11].deliveriesMade, ballard.hourlyData[11].driversNeeded]);

ballardTable.appendChild(sevenPmRow);

var eightPmRow = generateDataRow([ballard.hourlyData[12].time, ballard.hourlyData[12].pizzasSold, ballard.hourlyData[12].deliveriesMade, ballard.hourlyData[12].driversNeeded]);

ballardTable.appendChild(eightPmRow);

var ninePmRow = generateDataRow([ballard.hourlyData[13].time, ballard.hourlyData[13].pizzasSold, ballard.hourlyData[13].deliveriesMade, ballard.hourlyData[13].driversNeeded]);

ballardTable.appendChild(ninePmRow);

var tenPmRow = generateDataRow([ballard.hourlyData[14].time, ballard.hourlyData[14].pizzasSold, ballard.hourlyData[14].deliveriesMade, ballard.hourlyData[14].driversNeeded]);

ballardTable.appendChild(tenPmRow);

var elevenPmRow = generateDataRow([ballard.hourlyData[15].time, ballard.hourlyData[15].pizzasSold, ballard.hourlyData[15].deliveriesMade, ballard.hourlyData[15].driversNeeded]);

ballardTable.appendChild(elevenPmRow);

var twelveMidnightRow = generateDataRow([ballard.hourlyData[16].time, ballard.hourlyData[16].pizzasSold, ballard.hourlyData[16].deliveriesMade, ballard.hourlyData[16].driversNeeded]);

ballardTable.appendChild(twelveMidnightRow);

var oneAmRow = generateDataRow([ballard.hourlyData[17].time, ballard.hourlyData[17].pizzasSold, ballard.hourlyData[17].deliveriesMade, ballard.hourlyData[17].driversNeeded]);

ballardTable.appendChild(oneAmRow);

document.getElementById('ballard').appendChild(ballardTable);

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
