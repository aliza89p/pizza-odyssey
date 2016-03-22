function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var eightAM = {
  time: '8:00am',
  pizzasSold: getRandomIntInclusive(0, 4),
  deliveriesMade: getRandomIntInclusive(0, 4),
  numOfDrivers: Math.ceil(this.deliveriesMade / 3)
};

var nineAM = {
  time: '9:00am',
  pizzasSold: getRandomIntInclusive(0, 4),
  deliveriesMade: getRandomIntInclusive(0, 4)
};

var tenAM = {
  time: '10:00am',
  pizzasSold: getRandomIntInclusive(0, 4),
  deliveriesMade: getRandomIntInclusive(0, 4)
};

var elevenAM = {
  time: '11:00am',
  pizzasSold: getRandomIntInclusive(0, 7),
  deliveriesMade: getRandomIntInclusive(0, 4)
};

var twelveNoon = {
  time: '12 noon',
  pizzasSold: getRandomIntInclusive(0, 7),
  deliveriesMade: getRandomIntInclusive(0, 4)
};

var onePM = {
  time: '1:00pm',
  pizzasSold: getRandomIntInclusive(0, 7),
  deliveriesMade: getRandomIntInclusive(0, 4)
};

var twoPM = {
  time: '2:00pm',
  pizzasSold: getRandomIntInclusive(2, 15),
  deliveriesMade: getRandomIntInclusive(1, 4)
};

var threePM = {
  time: '3:00pm',
  pizzasSold: getRandomIntInclusive(2, 15),
  deliveriesMade: getRandomIntInclusive(1, 4)
};

var fourPM = {
  time: '4:00pm',
  pizzasSold: getRandomIntInclusive(2, 15),
  deliveriesMade: getRandomIntInclusive(1, 4)
};

var fivePM = {
  time: '5:00pm',
  pizzasSold: getRandomIntInclusive(15, 35),
  deliveriesMade: getRandomIntInclusive(3, 8)
};

var sixPM = {
  time: '6:00pm',
  pizzasSold: getRandomIntInclusive(15, 35),
  deliveriesMade: getRandomIntInclusive(3, 8)
};

var sevenPM = {
  time: '7:00pm',
  pizzasSold: getRandomIntInclusive(15, 35),
  deliveriesMade: getRandomIntInclusive(3, 8)
};

var eightPM = {
  time: '8:00pm',
  pizzasSold: getRandomIntInclusive(12, 31),
  deliveriesMade: getRandomIntInclusive(5, 12)
};

var ninePM = {
  time: '9:00pm',
  pizzasSold: getRandomIntInclusive(12, 31),
  deliveriesMade: getRandomIntInclusive(5, 12)
};

var tenPM = {
  time: '10:00pm',
  pizzasSold: getRandomIntInclusive(12, 31),
  deliveriesMade: getRandomIntInclusive(5, 12)
};

var elevenPM = {
  time: '11:00pm',
  pizzasSold: getRandomIntInclusive(5, 20),
  deliveriesMade: getRandomIntInclusive(6, 11)
};

var twelveMidnight = {
  time: '12 midnight',
  pizzasSold: getRandomIntInclusive(5, 20),
  deliveriesMade: getRandomIntInclusive(6, 11)
};

var oneAM = {
  time: '1:00 am',
  pizzasSold: getRandomIntInclusive(5, 20),
  deliveriesMade: getRandomIntInclusive(6, 11)
};

var timePizzaDeliveries = {
  salesData: [eightAM, nineAM, tenAM, elevenAM, twelveNoon, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM, tenPM, elevenPM, twelveMidnight, oneAM]
};

// location = object!
//
// function salesData () {
//   timePizzaDeliveries = object
//     time: for (i=0; i>18; i++){
//     return: i;
//   }
//     pizzas:
//     deliveries:
// }
//
//
// ]
//       //pizzas per hour [3, 4, 17]
//       //  -one number per hour sold
//       //deliveries per hour []
//       //  -one number of deliveries per hour
//         OR
//         sales data []
//
//   Time: object
//   pizzas sold:[]
//   deliveries made:[]
//
// Have a list for every single location.
//   probably going to need a ul on the page for each location and retrieve with an idea
//   Make a list and you can grab them with getElementById
//
//
//
//   Location - header
//   [Time, Sales, Deliveries]
//   [Time, Sales, Deliveries]
//   [Time, Sales, Deliveries]
//   [Time, Sales, Deliveries]

//   Create an object for time, sales, deliveries
