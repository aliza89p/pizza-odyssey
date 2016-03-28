'use strict';
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (document.getElementById('salesDataHtml')){

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
  ballard.name = 'Ballard';

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
  firstHill.name = 'First Hill';

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
  iDistrict.name = 'International District';

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
  slu.name = 'South Lake Union';

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
  georgetown.name = 'Georgetown';

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
  ravenna.name = 'Ravenna';

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

  function repeatTable(dataLocation) {

    var labelRow = generateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);

    var dataTable = document.createElement('table');

    var locationHeading = document.createElement('h1');

    locationHeading.textContent = dataLocation.name;

    document.getElementById('tables').appendChild(locationHeading);
    document.getElementById('tables').appendChild(dataTable);

    dataTable.appendChild(labelRow);

    var createTableData = document.getElementById('tables');

    for(var i = 0; i < dataLocation.hourlyData.length; i++){
      var genericRow = generateDataRow([dataLocation.hourlyData[i].time, dataLocation.hourlyData[i].pizzasSold, dataLocation.hourlyData[i].deliveriesMade, dataLocation.hourlyData[i].driversNeeded]);
      dataTable.appendChild(genericRow);
    }
  }

  repeatTable(ballard);

  repeatTable(firstHill);

  repeatTable(iDistrict);

  repeatTable(slu);

  repeatTable(georgetown);

  repeatTable(ravenna);

  function collectDataInfo(event){
    event.preventDefault();

    var storeLocation = event.target.storeLocation.value;
    var timeStringOne = event.target.timeStringOne.value;
    var pizzasMinOne = parseInt(event.target.pizzasMinOne.value);
    var pizzasMaxOne = parseInt(event.target.pizzasMaxOne.value);
    var deliveriesMinOne = parseInt(event.target.deliveriesMinOne.value);
    var deliveriesMaxOne = parseInt(event.target.deliveriesMaxOne.value);
    var timeStringTwo = event.target.timeStringTwo.value;
    var pizzasMinTwo = parseInt(event.target.pizzasMinTwo.value);
    var pizzasMaxTwo = parseInt(event.target.pizzasMaxTwo.value);
    var deliveriesMinTwo = parseInt(event.target.deliveriesMinTwo.value);
    var deliveriesMaxTwo = parseInt(event.target.deliveriesMaxTwo.value);
    var timeStringThree = event.target.timeStringThree.value;
    var pizzasMinThree = parseInt(event.target.pizzasMinThree.value);
    var pizzasMaxThree = parseInt(event.target.pizzasMaxThree.value);
    var deliveriesMinThree = parseInt(event.target.deliveriesMinThree.value);
    var deliveriesMaxThree = parseInt(event.target.deliveriesMaxThree.value);
    var timeStringFour = event.target.timeStringFour.value;
    var pizzasMinFour = parseInt(event.target.pizzasMinFour.value);
    var pizzasMaxFour = parseInt(event.target.pizzasMaxFour.value);
    var deliveriesMinFour = parseInt(event.target.deliveriesMinFour.value);
    var deliveriesMaxFour = parseInt(event.target.deliveriesMaxFour.value);
    var timeStringFive = event.target.timeStringFive.value;
    var pizzasMinFive = parseInt(event.target.pizzasMinFive.value);
    var pizzasMaxFive = parseInt(event.target.pizzasMaxFive.value);
    var deliveriesMinFive = parseInt(event.target.deliveriesMinFive.value);
    var deliveriesMaxFive = parseInt(event.target.deliveriesMaxFive.value);
    var timeStringSix = event.target.timeStringSix.value;
    var pizzasMinSix = parseInt(event.target.pizzasMinSix.value);
    var pizzasMaxSix = parseInt(event.target.pizzasMaxSix.value);
    var deliveriesMinSix = parseInt(event.target.deliveriesMinSix.value);
    var deliveriesMaxSix = parseInt(event.target.deliveriesMaxSix.value);
    var timeStringSeven = event.target.timeStringSeven.value;
    var pizzasMinSeven = parseInt(event.target.pizzasMinSeven.value);
    var pizzasMaxSeven = parseInt(event.target.pizzasMaxSeven.value);
    var deliveriesMinSeven = parseInt(event.target.deliveriesMinSeven.value);
    var deliveriesMaxSeven = parseInt(event.target.deliveriesMaxSeven.value);
    var timeStringEight = event.target.timeStringEight.value;
    var pizzasMinEight = parseInt(event.target.pizzasMinEight.value);
    var pizzasMaxEight = parseInt(event.target.pizzasMaxEight.value);
    var deliveriesMinEight = parseInt(event.target.deliveriesMinEight.value);
    var deliveriesMaxEight = parseInt(event.target.deliveriesMaxEight.value);
    var timeStringNine = event.target.timeStringNine.value;
    var pizzasMinNine = parseInt(event.target.pizzasMinNine.value);
    var pizzasMaxNine = parseInt(event.target.pizzasMaxNine.value);
    var deliveriesMinNine = parseInt(event.target.deliveriesMinNine.value);
    var deliveriesMaxNine = parseInt(event.target.deliveriesMaxNine.value);
    var timeStringTen = event.target.timeStringTen.value;
    var pizzasMinTen = parseInt(event.target.pizzasMinTen.value);
    var pizzasMaxTen = parseInt(event.target.pizzasMaxTen.value);
    var deliveriesMinTen = parseInt(event.target.deliveriesMinTen.value);
    var deliveriesMaxTen = parseInt(event.target.deliveriesMaxTen.value);
    var timeStringEleven = event.target.timeStringEleven.value;
    var pizzasMinEleven = parseInt(event.target.pizzasMinEleven.value);
    var pizzasMaxEleven = parseInt(event.target.pizzasMaxEleven.value);
    var deliveriesMinEleven = parseInt(event.target.deliveriesMinEleven.value);
    var deliveriesMaxEleven = parseInt(event.target.deliveriesMaxEleven.value);
    var timeStringTwelve = event.target.timeStringTwelve.value;
    var pizzasMinTwelve = parseInt(event.target.pizzasMinTwelve.value);
    var pizzasMaxTwelve = parseInt(event.target.pizzasMaxTwelve.value);
    var deliveriesMinTwelve = parseInt(event.target.deliveriesMinTwelve.value);
    var deliveriesMaxTwelve = parseInt(event.target.deliveriesMaxTwelve.value);
    var timeStringThirteen = event.target.timeStringThirteen.value;
    var pizzasMinThirteen = parseInt(event.target.pizzasMinThirteen.value);
    var pizzasMaxThirteen = parseInt(event.target.pizzasMaxThirteen.value);
    var deliveriesMinThirteen = parseInt(event.target.deliveriesMinThirteen.value);
    var deliveriesMaxThirteen = parseInt(event.target.deliveriesMaxThirteen.value);
    var timeStringFourteen = event.target.timeStringFourteen.value;
    var pizzasMinFourteen = parseInt(event.target.pizzasMinFourteen.value);
    var pizzasMaxFourteen = parseInt(event.target.pizzasMaxFourteen.value);
    var deliveriesMinFourteen = parseInt(event.target.deliveriesMinFourteen.value);
    var deliveriesMaxFourteen = parseInt(event.target.deliveriesMaxFourteen.value);
    var timeStringFifteen = event.target.timeStringFifteen.value;
    var pizzasMinFifteen = parseInt(event.target.pizzasMinFifteen.value);
    var pizzasMaxFifteen = parseInt(event.target.pizzasMaxFifteen.value);
    var deliveriesMinFifteen = parseInt(event.target.deliveriesMinFifteen.value);
    var deliveriesMaxFifteen = parseInt(event.target.deliveriesMaxFifteen.value);
    var timeStringSixteen = event.target.timeStringSixteen.value;
    var pizzasMinSixteen = parseInt(event.target.pizzasMinSixteen.value);
    var pizzasMaxSixteen = parseInt(event.target.pizzasMaxSixteen.value);
    var deliveriesMinSixteen = parseInt(event.target.deliveriesMinSixteen.value);
    var deliveriesMaxSixteen = parseInt(event.target.deliveriesMaxSixteen.value);
    var timeStringSeventeen = event.target.timeStringSeventeen.value;
    var pizzasMinSeventeen = parseInt(event.target.pizzasMinSeventeen.value);
    var pizzasMaxSeventeen = parseInt(event.target.pizzasMaxSeveteen.value);
    var deliveriesMinSeventeen = parseInt(event.target.deliveriesMinSeventeen.value);
    var deliveriesMaxSeventeen = parseInt(event.target.deliveriesMaxEightteen.value);
    var timeStringEightteen = event.target.timeStringEightteen.value;
    var pizzasMinEightteen = parseInt(event.target.pizzasMinEightteen.value);
    var pizzasMaxEightteen = parseInt(event.target.pizzasMaxEightteen.value);
    var deliveriesMinEightteen = parseInt(event.target.deliveriesMinEightteen.value);
    var deliveriesMaxEightteen = parseInt(event.target.deliveriesMaxEightteen.value);
    console.log('testing input being turned into variables. Store location ', storeLocation, 'timeStringOne ', timeStringOne, 'pizzasMinOne ', pizzasMinOne, 'pizzasMaxOne ', pizzasMaxOne, 'deliveriesMinOne ', deliveriesMinOne, 'deliveries MaxOne ', deliveriesMaxOne, 'timeStringEightteen ', timeStringEightteen, 'deliveriesMaxEightteen ', deliveriesMaxSeventeen);

    // var hourlyData = new HourlyData(timeStringOne, pizzasMinOne, pizzasMaxOne, deliveriesMinOne, deliveriesMaxOne);
    //
    // var newUserLocation = new PizzaLocation('input-data-form');
    // newUserLocation.pushHourlyData(new HourlyData(timeStringOne, pizzasMinOne, pizzasMaxOne, deliveriesMinOne, deliveriesMaxTwo));

    var newLocationFromForm = new PizzaLocation(storeLocation);
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringOne, pizzasMinOne, pizzasMaxOne, deliveriesMinOne, deliveriesMaxOne));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringTwo, pizzasMinTwo, pizzasMaxTwo, deliveriesMinTwo, deliveriesMaxTwo));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringThree, pizzasMinThree, pizzasMaxThree, deliveriesMinThree, deliveriesMaxThree));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringFour, pizzasMinFour, pizzasMaxFour, deliveriesMinFour, deliveriesMaxFour));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringFive, pizzasMinFive, pizzasMaxFive, deliveriesMinFive, deliveriesMaxFive));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringSix, pizzasMinSix, pizzasMaxSix, deliveriesMinSix, deliveriesMaxSix));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringSeven, pizzasMinSeven, pizzasMaxSeven, deliveriesMinSeven, deliveriesMaxSeven));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringEight, pizzasMinEight, pizzasMaxEight, deliveriesMinEight, deliveriesMaxEight));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringNine, pizzasMinNine, pizzasMaxNine, deliveriesMinNine, deliveriesMaxNine));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringTen, pizzasMinTen, pizzasMaxTen, deliveriesMinTen, deliveriesMaxTen));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringEleven, pizzasMinEleven, pizzasMaxEleven, deliveriesMinEleven, deliveriesMaxEleven));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringTwelve, pizzasMinTwelve, pizzasMaxTwelve, deliveriesMinTwelve, deliveriesMaxTwelve));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringThirteen, pizzasMinThirteen, pizzasMaxThirteen, deliveriesMinThirteen, deliveriesMaxThirteen));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringFourteen, pizzasMinFourteen, pizzasMaxFourteen, deliveriesMinFourteen, deliveriesMaxFourteen));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringFifteen, pizzasMinFifteen, pizzasMaxFifteen, deliveriesMinFifteen, deliveriesMaxFifteen));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringSixteen, pizzasMinSixteen, pizzasMaxSixteen, deliveriesMinSixteen, deliveriesMaxSixteen));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringSeventeen, pizzasMinSeventeen, pizzasMaxSeventeen, deliveriesMinSeventeen, deliveriesMaxSeventeen));
    newLocationFromForm.pushHourlyData(new HourlyData(timeStringEightteen, pizzasMinEightteen, pizzasMaxEightteen, deliveriesMinEightteen, deliveriesMaxEightteen));

    newLocationFromForm.name = storeLocation;

    repeatTable(newLocationFromForm);
  }

  var createStoreForm = document.getElementById('input-data-form');

  createStoreForm.addEventListener('submit', collectDataInfo);
}

if (document.getElementById('indexHtml')){
  var howManyPizzas = getRandomIntInclusive(5, 500);
  var soManyPizzas = document.createElement('p');
  soManyPizzas.textContent = howManyPizzas + ' happy pizza odysseys this week!';
  document.getElementById('pizzasThisWeek').appendChild(soManyPizzas);
}
