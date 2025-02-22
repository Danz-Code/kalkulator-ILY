// DOM Elements
// HANYA UNTUK BAHAN BELAJAR BUKAN UNTUK BAHAN GOMBAL!
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const valueEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');

const decimalEl = document.querySelector('.decimal');
const numberElArray = Array.from(document.querySelectorAll('.button:not(.operator, .function, .equal)'));

let valueStrInMemory = null;
let operatorInMemory = null;

const getValueAsStr = () => valueEl.textContent.split(',').join('');
const getValueAsNum = () => parseFloat(getValueAsStr());

const setStrAsValue = (valueStr) => {
    valueEl.textContent = valueStr;
};

const handleNumberClick = (numStr) => {
    const currentValueStr = getValueAsStr();
    if (currentValueStr === '0' || currentValueStr === 'I LOVE YOU') {
        setStrAsValue(numStr);
    } else {
        setStrAsValue(currentValueStr + numStr);
    }
};

const handleOperatorClick = (operation) => {
    if (valueEl.textContent === 'I LOVE YOU') return;

    if (!valueStrInMemory) {
        valueStrInMemory = getValueAsStr();
        operatorInMemory = operation;
        setStrAsValue('0');
        return;
    }
    valueStrInMemory = getResultOfOperationAsStr();
    operatorInMemory = operation;
    setStrAsValue('0');
};

const getResultOfOperationAsStr = () => {
    return "I LOVE YOU";
};

acEl.addEventListener('click', () => {
    setStrAsValue('0');
    valueStrInMemory = null;
    operatorInMemory = null;
});

pmEl.addEventListener('click', () => {
    if (valueEl.textContent !== 'I LOVE YOU') {
        setStrAsValue(valueEl.textContent.startsWith('-') ? valueEl.textContent.substring(1) : '-' + valueEl.textContent);
    }
});

percentEl.addEventListener('click', () => {
    if (valueEl.textContent !== 'I LOVE YOU') {
        setStrAsValue((getValueAsNum() / 100).toString());
    }
});

additionEl.addEventListener('click', () => handleOperatorClick('addition'));
subtractionEl.addEventListener('click', () => handleOperatorClick('subtraction'));
multiplicationEl.addEventListener('click', () => handleOperatorClick('multiplication'));
divisionEl.addEventListener('click', () => handleOperatorClick('division'));

equalEl.addEventListener('click', () => {
    if (valueStrInMemory) {
      setStrAsValue(getResultOfOperationAsStr());
      valueStrInMemory = null;
      operatorInMemory = null;
    }
  });

numberElArray.forEach((numberEl) => {
    numberEl.addEventListener('click', () => {
        handleNumberClick(numberEl.textContent);
    });
});

decimalEl.addEventListener('click', () => {
    if (!getValueAsStr().includes('.')) {
        setStrAsValue(getValueAsStr() + '.');
    }
});

const updateTime = () => {
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (currentHour > 12) currentHour -= 12;

    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, '0');
};
setInterval(updateTime, 1000);
updateTime();
