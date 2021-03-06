let screenData = [], num1 = [], num2 = [], operator, opCheck = 'off', numCheck = 'off', num2check = 'off', opDone = 'undone';
screenData.length = 3;

let screen = document.querySelector('.screen');

//variables for the event listeners that will make the buttons work
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const result = document.querySelector('.result');

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

numbers.forEach((current) => {
    current.addEventListener('click', (e) => {
        if (opCheck === 'off') {
            if (opDone === 'done') {
                num1 = [];
                numCheck = 'off';
                screen.textContent = num1;
                opDone = 'undone';
            }
            num1.push(e.target.textContent);
            screenData[0] = num1.join('');
            screen.textContent = screenData.join(' ');
            numCheck = 'on';
        } else {
            num2.push(e.target.textContent);
            screenData[2] = num2.join('');
            screen.textContent = screenData.join(' ');
            num2check = 'on'
        }
    });
});

operators.forEach((current) => {
    current.addEventListener('click', (e) => {     
        if (numCheck === 'on') {
            if (opCheck === 'off') {
                operator = e.target.textContent;
                screenData[1] = operator;
                screen.textContent = screenData.join(' ');
                opCheck = 'on';
            } else {
                if (num2check === 'on') {
                    results = calculate (Number(num1.join('')), Number(num2.join('')), operator);
        
                    if (Number.isInteger(results) === false) {
                        num1 = [];
                        for (i = 0; i < String(results).split('').length; i++) {
                            if (String(results).split('')[i] === '.') {
                                dotIndex = i;
                                break;
                            }
                        }
                        console.log(dotIndex);
                        for (i = 0; i <= dotIndex + 2; i++) {
                            num1.push(String(results).split('')[i]);
                        }
                    } else {
                        num1 = String(results).split('');
                    }
                    num2 = [];
                    num2check = 'off';
                    operator = e.target.textContent;
                    screenData = [], screenData[0] = num1.join(''), screenData[1] = e.target.textContent;
                    screen.textContent = screenData.join(' ');
                    opDone = 'done';
                }
            }
        }
    });
});

clear.addEventListener('click', () => {
    opCheck = 'off';
    numCheck = 'off';
    num2check = 'off';
    screenData = [];
    num1 = [], num2 = [];
    screen.textContent = screenData;
});

result.addEventListener('click', () => {
    if (opCheck === 'on' && num2check === 'on') {
        results = calculate (Number(num1.join('')), Number(num2.join('')), operator);
        opCheck = 'off';
        if (Number.isInteger(results) === false) {
            num1 = [];
            for (i = 0; i < String(results).split('').length; i++) {
                if (String(results).split('')[i] === '.') {
                    dotIndex = i;
                    break;
                }
            }
            for (i = 0; i <= dotIndex + 2; i++) {
                num1.push(String(results).split('')[i]);
            }
        } else {
            num1 = String(results).split('');
        }
        num2 = [];
        num2check = 'off';
        screenData = [], screenData[0] = num1.join('');
        screen.textContent = screenData;
        opDone = 'done';
    }
});