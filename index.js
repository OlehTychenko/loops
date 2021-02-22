// homework

// task 1

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// task 2

const ARR = [1, 2, 3, 4, 5];

for (let i = 0; i < ARR.length; i++) {
    console.log(ARR[i])
};

// task 3

const ANOUTHER_ARR = [-1, 22, 3, 44, 5];

let theBiggest = true;

for (let i = 0; i < ANOUTHER_ARR.length; i++) {
    theBiggest = true;
    for (let j = i + 1; j < ANOUTHER_ARR.length; j++) {
        if (ANOUTHER_ARR[i] < ANOUTHER_ARR[j]) {
            theBiggest = false;
        }
    }
    if (theBiggest === true) {
        console.log(ANOUTHER_ARR[i])
        break
    };
}

// console.log(ANOUTHER_ARR.sort((a, b) => b - a)[0])

// console.log(Math.max(...ANOUTHER_ARR));


// task 4

let userArr = [];
const USER_SCORE = {
    positive: 0,
    negative: 0,
    zero: 0
};

for (let i = 0; i < 8; i++) {
    userArr[i] = (prompt(`Your ${i + 1} number`));
    userArr[i] > 0 ? USER_SCORE.positive += 1
        : userArr[i] < 0 ? USER_SCORE.negative += 1
            : USER_SCORE.zero += 1;
}

console.log(userArr);
console.log(USER_SCORE);

// task 5

const NUMBER = 8;

const NUM_MULTIPLICATE = [];

for (let i = 1; i <= 10; i++) {
    NUM_MULTIPLICATE[i - 1] = NUMBER * i;
}

console.log(NUM_MULTIPLICATE);

// task 6

const NUMB_ARR = [2, 5, 9, 15, 0, 4];

let i = 0;
while(i < NUMB_ARR.length) {
    NUMB_ARR[i] > 3 && NUMB_ARR[i] < 10 ? console.log(NUMB_ARR[i]) : '';
    i++;
}

// task 7

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?

let firstNumber;
let secondNumber;
let action;
let repeat;

do {
    firstNumber = prompt('Your first number,pls');
    secondNumber = prompt('Your second number,pls');
    action = prompt('What\'s the action? (-, +, /, *, %)')
    switch(action) {
        case '-' :
            alert(firstNumber - secondNumber);
            break;
        case '+' :
            alert(firstNumber + secondNumber);
            break;
        case '/' :
            alert(firstNumber / secondNumber);
            break;
        case '*' :
            alert(firstNumber * secondNumber);
            break;
        case '%' :
            alert(firstNumber % secondNumber)
    }
    repeat = confirm('Do you wanna repeat?');

} while (repeat);