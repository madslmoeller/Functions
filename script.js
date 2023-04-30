'use strict';

// const bookings = [];

// const createBooking = function(flightNum = 'XX000', numPassengers = 1, price = 99) {

    //ES5
    // flightNum = flightNum || 'XX000';
    // numPassengers = numPassengers || 1;
    // price = price || 99;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     bookings.push(booking)
//     console.log(booking);
// }

// createBooking('MM123');
// createBooking('MM123', 5);
// createBooking('MM123', 5, 5000);

// const flight = 'MM12345';
// const mads = {
//     name: 'Mads Moeller',
//     passport: 458772345987
// };

// const checkIn = function(flightNum, passenger) {

//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 458772345987) {
//         alert('Checked in!');
//     } else {
//         alert('Go home, fraud');
//     }
// }
// checkIn(flight, mads);
// console.log(flight);
// console.log(mads);


// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000000000);

//     // New generated passport
//     console.log(person.passport);
// }
// newPassport(mads);

// checkIn(flight, mads);

// const oneWord = function(str) {
//     return str.replace(/ /g, '');
// }

// const firstUpperWord = function(str) {
//     const [first, ...restOfTheWords] = str.split(' ');
//     return [first.toUpperCase(), ...restOfTheWords].join(' ')
// }

// const transformer = function (str, fn) {
//     console.log(`${fn(str)}`);
// }

// transformer('JavaScript er life', oneWord);
// transformer('JavaScript er life', firstUpperWord);

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greetHey = greet('Hey');
// greetHey('Mads');

// const greet = greeting => name => console.log();

// const ryanair = {
//     airline: 'Ryan Airlines',
//     aitaCode: 'RA',
//     booking: [],
//     book: function(flightNum, name) {
//         console.log(`${name} has booked a seat on ${this.airline} flight ${this.aitaCode}${flightNum}`);

//         this.booking.push({ flight: `${this.aitaCode}${flightNum}`, name})
//     }
// }

// const eurowings = {
//     airline: 'Eurowings',
//     aitaCode: 'EW',
//     booking: []
// }

// const swiss = {
//     airline: 'Swiss Airlines',
//     aitaCode: 'SA',
//     booking: []
// }

// const book = ryanair.book;
// ryanair.book(365, 'Mads Møller');
// console.log(ryanair);

// // Call function
// book.call(eurowings, 827, 'Sara Rasmussen');
// console.log(eurowings);

// book.call(swiss, 39, 'Kevin Lundbæk');
// console.log(swiss);

// // Apply function
// const flightApply = [243, 'Mads Møller'];
// book.apply(swiss, flightApply);
// console.log(swiss);

// // Bind function
// const bookEW = book.bind(eurowings);
// const bookSA = book.bind(swiss);
// const bookRA = book.bind(ryanair);
// bookEW(999, 'Emilie Rasmussen');
// bookEW(789, 'Mark Hammer');
// bookEW(321, 'Andreas Rasmussen')
// bookRA(666, 'Mads Møller')
// console.log(eurowings);
// console.log(ryanair);

// // Bind with event listeners
// ryanair.planes = 50;
// ryanair.buyPlane = function() {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click', ryanair.buyPlane.bind(ryanair));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.10, 200));

// const addVAT = addTax.bind(null, 0.25);
// console.log(addVAT(100));
// console.log(addVAT(500));

// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate;
//     } 
// }

// const addVAT2 = addTaxRate(0.20);
// console.log(addVAT2(500));

// ------------------------------------ CODING CHALLENGE #1 ------------------------------------

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer: function() {

//         // Get answer
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))
//         console.log(answer);

//         // Register answer
//         typeof answer === 'number' && answer < this.options.length && this.answers[answer]++
        
//         this.displayResults();
//         this.displayResults('string')

//     },
//     displayResults: function(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     },
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))


// IIFE

// (function() {
//     console.log('Denne funktion har ingen betydning og kører derfor kun én gang...');
// })();

// Closure
// Example 1

// const secureBooking = function() {
//     let passengerCount = 0;
//     let seatsLeft = 100;

//     return function() {
//         passengerCount++;
//         seatsLeft--;
//         console.log(`${passengerCount} passengers`);
//         console.log(`${seatsLeft} seats left`);
//         console.log('--------------------');
//     }
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();
// booker();
// booker();
// booker();
// booker();
// booker();
// booker();
// console.dir(booker);

// Example 2
// let f;

// const g = function() {
//     const a = 23;
//     f = function() {
//         console.log(a * 2);
//     }
// }

// const h = function() {
//     const b = 777;
//     f = function() {
//         console.log(b * 2);
//     }
// }

// g();
// f();
// h();
// f();

// const boardPassengers = function(n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function(){
//         console.log(`We are now boarding all ${n} passengers!`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers!`);
//     }, wait * 1000)

//     console.log(`We will board in ${wait} seconds...`);
// }

// boardPassengers(300, 5);

// Take the IIFE below and at the end of the function, attach an event listener that 
// changes the color of the selected h1 element ('header') to blue, each time 
// the body element is clicked. Do not select the h1 element again!

// And now explain to yourself (or someone around you) why this worked! Take all 
// the time you need. Think about when exactly the callback function is executed, 
// and what that means for the variables involved in this example


// Coding Challenge 2
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue'
    })
})();


