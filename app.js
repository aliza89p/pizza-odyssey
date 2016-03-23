function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var eightAM = {
  time: '8:00am',
  pizzasSold: getRandomIntInclusive(0, 4),
  deliveriesMade: getRandomIntInclusive(0, 4)
};
var deliveriesEightAM = eightAM.deliveriesMade;
eightAM.driversNeeded = Math.ceil(deliveriesEightAM / 3);

var nineAM = {
  time: '9:00am',
  pizzasSold: getRandomIntInclusive(0, 4),
  deliveriesMade: getRandomIntInclusive(0, 4)
};
var deliveriesNineAM = nineAM.deliveriesMade;
nineAM.driversNeeded = Math.ceil(deliveriesNineAM / 3);

var tenAM = {
  time: '10:00am',
  pizzasSold: getRandomIntInclusive(0, 4),
  deliveriesMade: getRandomIntInclusive(0, 4)
};
var deliveriesTenAM = tenAM.deliveriesMade;
tenAM.driversNeeded = Math.ceil(deliveriesTenAM / 3);

var elevenAM = {
  time: '11:00am',
  pizzasSold: getRandomIntInclusive(0, 7),
  deliveriesMade: getRandomIntInclusive(0, 4)
};
var deliveriesElevenAM = elevenAM.deliveriesMade;
elevenAM.driversNeeded = Math.ceil(deliveriesElevenAM / 3);

var twelveNoon = {
  time: '12 noon',
  pizzasSold: getRandomIntInclusive(0, 7),
  deliveriesMade: getRandomIntInclusive(0, 4),
};
var deliveriesTwelveNoon = twelveNoon.deliveriesMade;
twelveNoon.driversNeeded = Math.ceil(deliveriesTwelveNoon / 3);

var onePM = {
  time: '1:00pm',
  pizzasSold: getRandomIntInclusive(0, 7),
  deliveriesMade: getRandomIntInclusive(0, 4)
};
var deliveriesOnePM = onePM.deliveriesMade;
onePM.driversNeeded = Math.ceil(deliveriesOnePM / 3);

var twoPM = {
  time: '2:00pm',
  pizzasSold: getRandomIntInclusive(2, 15),
  deliveriesMade: getRandomIntInclusive(1, 4)
};
var deliveriesTwoPM = twoPM.deliveriesMade;
twoPM.driversNeeded = Math.ceil(deliveriesTwoPM / 3);

var threePM = {
  time: '3:00pm',
  pizzasSold: getRandomIntInclusive(2, 15),
  deliveriesMade: getRandomIntInclusive(1, 4)
};
var deliveriesThreePM = threePM.deliveriesMade;
threePM.driversNeeded = Math.ceil(deliveriesThreePM / 3);

var fourPM = {
  time: '4:00pm',
  pizzasSold: getRandomIntInclusive(2, 15),
  deliveriesMade: getRandomIntInclusive(1, 4)
};
var deliveriesFourPM = fourPM.deliveriesMade;
fourPM.driversNeeded = Math.ceil(deliveriesFourPM / 3);

var fivePM = {
  time: '5:00pm',
  pizzasSold: getRandomIntInclusive(15, 35),
  deliveriesMade: getRandomIntInclusive(3, 8)
};
var deliveriesFivePM = fivePM.deliveriesMade;
fivePM.driversNeeded = Math.ceil(deliveriesFivePM / 3);

var sixPM = {
  time: '6:00pm',
  pizzasSold: getRandomIntInclusive(15, 35),
  deliveriesMade: getRandomIntInclusive(3, 8)
};
var deliveriesSixPM = sixPM.deliveriesMade;
sixPM.driversNeeded = Math.ceil(deliveriesSixPM / 3);

var sevenPM = {
  time: '7:00pm',
  pizzasSold: getRandomIntInclusive(15, 35),
  deliveriesMade: getRandomIntInclusive(3, 8)
};
var deliveriesSevenPM = sevenPM.deliveriesMade;
sevenPM.driversNeeded = Math.ceil(deliveriesSevenPM / 3);

var eightPM = {
  time: '8:00pm',
  pizzasSold: getRandomIntInclusive(12, 31),
  deliveriesMade: getRandomIntInclusive(5, 12)
};
var deliveriesEightPM = eightPM.deliveriesMade;
eightPM.driversNeeded = Math.ceil(deliveriesEightPM / 3);

var ninePM = {
  time: '9:00pm',
  pizzasSold: getRandomIntInclusive(12, 31),
  deliveriesMade: getRandomIntInclusive(5, 12)
};
var deliveriesNinePM = ninePM.deliveriesMade;
ninePM.driversNeeded = Math.ceil(deliveriesNinePM / 3);

var tenPM = {
  time: '10:00pm',
  pizzasSold: getRandomIntInclusive(12, 31),
  deliveriesMade: getRandomIntInclusive(5, 12)
};
var deliveriesTenPM = tenPM.deliveriesMade;
tenPM.driversNeeded = Math.ceil(deliveriesTenPM / 3);

var elevenPM = {
  time: '11:00pm',
  pizzasSold: getRandomIntInclusive(5, 20),
  deliveriesMade: getRandomIntInclusive(6, 11)
};
var deliveriesElevenPM = elevenPM.deliveriesMade;
elevenPM.driversNeeded = Math.ceil(deliveriesElevenPM / 3);

var twelveMidnight = {
  time: '12 midnight',
  pizzasSold: getRandomIntInclusive(5, 20),
  deliveriesMade: getRandomIntInclusive(6, 11)
};
var deliveriesTwelveMidnight = twelveMidnight.deliveriesMade;
twelveMidnight.driversNeeded = Math.ceil(deliveriesTwelveMidnight / 3);

var oneAM = {
  time: '1:00 am',
  pizzasSold: getRandomIntInclusive(5, 20),
  deliveriesMade: getRandomIntInclusive(6, 11)
};
var deliveriesOneAM = oneAM.deliveriesMade;
oneAM.driversNeeded = Math.ceil(deliveriesOneAM / 3);

var dataArray = [eightAM, nineAM, tenAM, elevenAM, twelveNoon, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM, tenPM, elevenPM, twelveMidnight, oneAM];

var ballardId = document.getElementById('ballard');
for(var i = 0; i < dataArray.length; i++) {
  var liTag = document.createElement('li');
  liTag.textContent = dataArray[i];
  ballardId.appendChild(liTag);
}

var firstHillId = document.getElementById('firstHill');
for(var i = 0; i < dataArray.length; i++){
  var liTag = document.createElement('li');
  liTag.textContent = dataArray[i];
  firstHillId.appendChild(liTag);
}

var internationalDistrictId = document.getElementById('internationalDistrict');
for(var i = 0; i < dataArray.length; i++){
  var liTag = document.createElement('li');
  liTag.textContent = dataArray[i];
  internationalDistrictId.appendChild(liTag);
}

var SLUId = document.getElementById('SLU');
for(var i = 0; i < dataArray.length; i++){
  var liTag = document.createElement('li');
  liTag.textContent = dataArray[i];
  SLUId.appendChild(liTag);
}

var georgetownId = document.getElementById('georgetown');
for(var i = 0; i < dataArray.length; i++){
  var liTag = document.createElement('li');
  liTag.textContent = dataArray;
  georgetownId.appendChild(liTag);
}

var ravennaId = document.getElementById('ravenna');
for(var i = 0; i < dataArray.length; i++){
  var liTag = document.createElement('li');
  liTag.textContent = dataArray[i];
  ravennaId.appendChild(liTag);
}
