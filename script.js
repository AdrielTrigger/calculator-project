//two arrays that will work as the content of the screen and as an operation tracker, respectively
let screenData = [];
let operation = [];
let cleared = [];
let operationDone;

let screen = document.querySelector('.screen');

//variables for the event listeners that will make the buttons work
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const clear = document.querySelector('.clear');
const result = document.querySelector('.result');

//buttons' codes for registering numbers and operators
one.addEventListener('click', () => {
    if (operationDone === 'done') {
        screenData = [];
        operation = [];
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    screenData.push('1');
    operation.push('1');
    screen.textContent = screenData.join('');
});

two.addEventListener('click', () => {
    if (operationDone === 'done') {
        screenData = [];
        operation = [];
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    screenData.push('2');
    operation.push('2');
    screen.textContent = screenData.join('');
});

three.addEventListener('click', () => {
    if (operationDone === 'done') {
        screenData = [];
        operation = [];
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    screenData.push('3');
    operation.push('3');
    screen.textContent = screenData.join('');
});

four.addEventListener('click', () => {
    if (operationDone === 'done') {
        screenData = [];
        operation = [];
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    screenData.push('4');
    operation.push('4');
    screen.textContent = screenData.join('');
});

five.addEventListener('click', () => {
    if (operationDone === 'done') {
        screenData = [];
        operation = [];
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    screenData.push('5');
    operation.push('5');
    screen.textContent = screenData.join('');
});

six.addEventListener('click', () => {
    if (operationDone === 'done') {
        screenData = [];
        operation = [];
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    screenData.push('6');
    operation.push('6');
    screen.textContent = screenData.join('');
});

seven.addEventListener('click', () => {
    if (operationDone === 'done') {
        screenData = [];
        operation = [];
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    screenData.push('7');
    operation.push('7');
    screen.textContent = screenData.join('');
});

eight.addEventListener('click', () => {
    if (operationDone === 'done') {
        screenData = [];
        operation = [];
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    screenData.push('8');
    operation.push('8');
    screen.textContent = screenData.join('');
});

nine.addEventListener('click', () => {
    if (operationDone === 'done') {
        screenData = [];
        operation = [];
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    screenData.push('9');
    operation.push('9');
    screen.textContent = screenData.join('');
});

zero.addEventListener('click', () => {
    if (operationDone === 'done') {
        screenData = [];
        operation = [];
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    screenData.push('0');
    operation.push('0');
    screen.textContent = screenData.join('');
});

minus.addEventListener('click', () => {
    if (operationDone === 'done') {
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    if (screenData[screenData.length - 1] === '1' || screenData[screenData.length - 1] === '2' || 
        screenData[screenData.length - 1] === '3' || screenData[screenData.length - 1] === '4' || 
        screenData[screenData.length - 1] === '5' || screenData[screenData.length - 1] === '6' || 
        screenData[screenData.length - 1] === '7' || screenData[screenData.length - 1] === '8' || 
        screenData[screenData.length - 1] === '9' || screenData[screenData.length - 1] === '0') {
        screenData.push(' - ');
        operation.push('-');
    }
    screen.textContent = screenData.join('');
});

plus.addEventListener('click', () => {
    if (operationDone === 'done') {
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    if (screenData[screenData.length - 1] === '1' || screenData[screenData.length - 1] === '2' || 
        screenData[screenData.length - 1] === '3' || screenData[screenData.length - 1] === '4' || 
        screenData[screenData.length - 1] === '5' || screenData[screenData.length - 1] === '6' || 
        screenData[screenData.length - 1] === '7' || screenData[screenData.length - 1] === '8' || 
        screenData[screenData.length - 1] === '9' || screenData[screenData.length - 1] === '0') {
        screenData.push(' + ');
        operation.push('+');
    }
    screen.textContent = screenData.join('');
});

multiply.addEventListener('click', () => {
    if (operationDone === 'done') {
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    if (screenData[screenData.length - 1] === '1' || screenData[screenData.length - 1] === '2' || 
        screenData[screenData.length - 1] === '3' || screenData[screenData.length - 1] === '4' || 
        screenData[screenData.length - 1] === '5' || screenData[screenData.length - 1] === '6' || 
        screenData[screenData.length - 1] === '7' || screenData[screenData.length - 1] === '8' || 
        screenData[screenData.length - 1] === '9' || screenData[screenData.length - 1] === '0') {
        screenData.push(' * ');
        operation.push('*');
    }
    screen.textContent = screenData.join('');
});

divide.addEventListener('click', () => {
    if (operationDone === 'done') {
        operationDone = 'undone';
    }
    if (typeof screenData === 'string') {
        screenData = screenData.split('');
    }
    if (screenData[screenData.length - 1] === '1' || screenData[screenData.length - 1] === '2' || 
        screenData[screenData.length - 1] === '3' || screenData[screenData.length - 1] === '4' || 
        screenData[screenData.length - 1] === '5' || screenData[screenData.length - 1] === '6' || 
        screenData[screenData.length - 1] === '7' || screenData[screenData.length - 1] === '8' || 
        screenData[screenData.length - 1] === '9' || screenData[screenData.length - 1] === '0') {
        screenData.push(' / ');
        operation.push('/');
    }
    screen.textContent = screenData.join('');
});

clear.addEventListener('click', () => {
    screenData = [];
    operation = [];
    screen.textContent = screenData;
    operationDone = 'undone';
});

function calculate (n1, n2, op) {
    if (op === '+') {
        return n1 + n2;
    } else if (op === '-') {
        return n1 - n2;
    } else if (op === '*') {
        return n1 * n2;
    } else if (op === '/') {
        return n1 / n2;
    }
}

//function to execute the calculations and provide the result
result.addEventListener('click', () => {
    let opPos = [];
    for (i = 0; i < operation.length; i++) {
        if (operation[i] === '+' || operation[i] === '-' || operation[i] === '*' || operation[i] === '/') {
            opPos.push(i);
        }
    }

    let operators = operation.filter((item) => {
        if (item === '+' || item === '-' || item === '*' || item === '/') {
            return item;
        }
    });

    let operands = [];
    operands.length = operators.length + 1;

   // reserved for operand search

   for (i = 0; i < operands.length; i++) {
       operand = [];
       if (i === 0) {
           for (j = 0; j < opPos[i]; j++) {
               operand.push(operation[j]);
           }
       } else if (opPos.length > 1 && opPos[i] != undefined) {
           for (j = opPos[i - 1] + 1; j < opPos[i]; j++) {
               operand.push(operation[j]);
           }
       } else {
           for (j = opPos[i - 1] + 1; j < operation.length; j++) {
               operand.push(operation[j]);
           }
       }
       operand = operand.join('');
       operands[i] = Number(operand);
   }

    for (i = 0; i < operators.length; i++) {
        if (i === 0) {
            results = calculate (operands[i], operands[i + 1], operators[i]);
        } else {
            results = calculate (results, operands[i + 1], operators[i]);
        }
    }

    screenData = String(results);
    operation = [];
    operation.push(screenData);
    screen.textContent = screenData;
    operationDone = 'done';
});