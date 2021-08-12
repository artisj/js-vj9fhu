'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

btnLogin.addEventListener('click', showEvt,false);

function showEvt(evt){
  
  evt.preventDefault();
  console.log(evt);
  console.log('Button clicked');
  
}

const now = new Date();
const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
labelDate.textContent = `${day}`
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements = function (movements) {
  // clear the html in the control
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

console.log('%c My Friends','color: orange');
console.table(accounts);
/////////////////////////////////////////////////
/*
// slice
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice());
console.log([...arr]);

// splice (mutates)
//console.log(arr.splice(2));

arr.splice(-1);
console.log(arr);

// reverse (mutates)
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat does not mutate
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join
console.log(letters.join(' - '));
*/

/*
const x = new Array(7);
console.log(x);

x.fill(1);
console.log(x);

const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (cur,i) => i +1);
console.log(z);

const randomDice = Array.from({length: 100}, () => Math.trunc(Math.random()*6)+1);
console.log(randomDice);

const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI);
console.log(movementsUI.map(el => Number(el.textContent)));

const movementsUI2 = [...document.querySelectorAll('.movements__value')];
console.log(movementsUI2);


const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((prev,curr) => prev + curr);
console.log(bankDepositSum);

const numDeposits1000 = accounts.flatMap(acc => acc.movements)
.filter(mov => mov > 1000).length;
console.log(numDeposits1000);


// random number between 2 numbers
const randomInt = (min,max) =>
Math.trunc(Math.random() * (max - min) + 1)+ min;

console.log(randomInt(20,30));
*/

/*
// create a date
const now = new Date();
console.log(now);

console.log(new Date('Jul 27 2021 06:40:43'));
console.log(new Date('December 24, 2015'));

*/