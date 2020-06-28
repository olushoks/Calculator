//ACCESSING DOM
const DOMStrings = {
    themeBtn: document.querySelectorAll('.menu_item'),
    display: document.querySelector('.main_calculator-display'),
    operatorPad: document.getElementsByClassName('operator-pad'),
    numberPad: document.getElementsByClassName('number-pad'),
    clearBtn: document.getElementById('clear'),
    decimal: document.getElementById('decimal'),
    equalsBtn: document.getElementById('=')
}


//CHANGE THEME
const changeTheme = (e) => {
    let themeLink = document.querySelector('link');

    if (e.target.innerHTML === 'Theme 1') {
        themeLink.setAttribute('href', 'styles/theme1.css');
    } else if (e.target.innerHTML === 'Theme 2') {
        themeLink.setAttribute('href', 'styles/theme2.css');
    }

    clear();
}

for(let i = 0; i < DOMStrings.themeBtn.length; i++) {
    DOMStrings.themeBtn[i].addEventListener('click', changeTheme);
}

// DEFAULT DISPLAY VALUE
let displayValue = '0';
let value1, value2;

DOMStrings.display.innerHTML = displayValue;


// GET OPERATOR VALUES
const getOperator = (e) => {
    let operator = e.target.innerHTML;
    let num1, num2, newNum, outputValue;
    switch(operator) {
        case '±':
            displayValue += operator;
            display.innerHTML = displayValue;
            break;
        case '%':
            display.innerHTML = displayValue;
            break;
        case '÷':
            displayValue += ' ' + operator + ' ';
            display.innerHTML = displayValue;
            // newNum = displayValue.split(operator);
            // num1 = Number(newNum[0]);
            // num2 = Number(newNum[1]);
            // displayValue = num1 + num2;
            // displayValue = outputValue;
            // display.innerHTML = displayValue;
            // outputValue = num1/num2;
            // return outputValue;
            break;
        case 'x':
            displayValue += '*';
            display.innerHTML = displayValue;
            break;
        case '−':
            displayValue += operator;
            display.innerHTML = displayValue;
            break;
        case '+':
            displayValue += operator;
            display.innerHTML = displayValue;
            break;
        case '=':
            performCalc(operator);
            break;
        default:
            break;
    }

} 

for(let i = 0; i < DOMStrings.operatorPad.length; i++) {
    DOMStrings.operatorPad[i].addEventListener('click', getOperator);
}

// GET NUMBER VALUES
const getNumber = (e) => {
    let value1 = e.target.innerHTML;

    if(displayValue === '0')
    displayValue = '';
    displayValue += value1;
    DOMStrings.display.innerHTML = displayValue;

}

for(let i = 0; i < DOMStrings.numberPad.length; i++) {
    DOMStrings.numberPad[i].addEventListener('click', getNumber);
}

// CLEAR SCREEN
const clear = () => {
    displayValue = '0';
    DOMStrings.display.innerHTML = displayValue;
    // alert('You clicked Me!')
}

DOMStrings.clearBtn.addEventListener('click', clear);

// PREVENT MULTIPLE DECIMALS FROM BEEN ENTERED
const decimal = () => {
    if(displayValue.indexOf('.') === -1) {
        displayValue += '.';
        DOMStrings.display.innerHTML = displayValue;
    }
}

DOMStrings.decimal.addEventListener('click', decimal);

// PERFORM OPERATION WHEN EQULS SIGN IS CLICKED
const performCalc = (operator) => {
 
}

DOMStrings.equalsBtn.addEventListener('click', performCalc)




// displayValue = display.innerHTML;
// newNum = displayValue.split(operator);
// num1 = parseInt(newNum[0]);
// num2 = parseInt(newNum[1]);
// outputValue = num2;
// display.innerHTML = outputValue;