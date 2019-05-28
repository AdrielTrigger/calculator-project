//two arrays that will work as the content of the screen and as an operation tracker, respectively
let screenData = [];
let operation = [];
let cleared = [];
let operationDone;

let screen = document.querySelector('.screen');

//variables for the event listeners that will make the buttons work
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const result = document.querySelector('.result');

//buttons' codes for registering numbers and operators
numbers.forEach(current => {
    current.addEventListener('click', (e) => {
        if (operationDone === 'done') {
            screenData = [];
            operation = [];
            operationDone = 'undone';
        }
        if (typeof screenData === 'string') {
            screenData = screenData.split('');
        }
        screenData.push(e.target.textContent);
        operation.push(e.target.textContent);
        screen.textContent = screenData.join('');
    });
});

operators.forEach(current => {
    current.addEventListener('click', (e) => {
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
            screenData.push(' ' + e.target.textContent + ' ');
            operation.push(e.target.textContent);
        }
        screen.textContent = screenData.join('');
    });
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