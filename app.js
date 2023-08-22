"use strict";

// оголошуємо змінні
const input = document.querySelector('.input');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const result = document.querySelector('.result');

const operatorsList = ["+", "-", "×", "÷", '.'];

let isResultDisplyed = false;

// додаємо обробники подій для всіх кнопок з математичними операторами
operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    // отримуємо доступ до значення всередині інпута
    const valueInput = input.innerHTML;
    // отримуємо доступ до останнього елемента інпута (останній елемент строки)
    const lastChar = valueInput[valueInput.length - 1];

    // якщо строка пуста, оператор не додаємо, код зупиняється
    if (valueInput.length === 0) {
      return null;

    // якщо в останній елемент в інпуті це оператор, то перезаписуємо його
    } else if (operatorsList.includes(lastChar)) {
      const newString = valueInput.substring(0, valueInput.length - 1) + event.target.innerHTML;
      input.innerHTML = newString

    // в іншому випадку додаємо до строки
    } else {
      input.innerHTML += event.target.innerHTML;
    }
  })
});

// додамо обробники подій для всіх кнопок з цифрами
numbers.forEach((number) => {
  number.addEventListener(('click'), (event) => {

    // отримуємо доступ до значення всередині інпута
    const valueInput = input.innerHTML;
    // отримуємо доступ до останнього елемента інпута (останній елемент строки)
    const lastChar = valueInput[valueInput.length - 1];

    // якщо юзер просто вводить число - то ми його додаємо до введеної операції
    if (!isResultDisplyed) {
      input.innerHTML += event.target.innerHTML;

    // якщо юзер вводить число коли вже висвічується результат попередньої операції і оператор є останнім символом інпута
		// введене число додаємо до інпута
    } else if (isResultDisplyed && operatorsList.includes(lastChar)) {
      input.innerHTML += event.target.innerHTML;
      // ставимо позначку що це вже не результат попередньої введеної операції
      isResultDisplyed = false;

    // якщо юзер вводить число коли відображається результат попередньої операції
    // ми перезаписуємо весь інпут новим числом
    } else {
      input.innerHTML = event.target.innerHTML;
      // ставимо позначку що це вже не результат попередньої введеної операції
      isResultDisplyed = false;
    }
  })
});

clear.addEventListener('click', () => {
  // очищуємо значення в рядку
  input.innerHTML = '';
  // ставимо позначку що це вже не результат попередньої введеної операції
  isResultDisplyed = false;
});

result.addEventListener('click', () => {
  // отримуємо доступ до значення всередині інпута
  const valueInput = input.innerHTML;
   // отримуємо доступ до останнього елемента інпута (останній елемент строки)
  const lastChar = valueInput[valueInput.length - 1];

  // якщо юзер останнім символом ввів оператор і натискає на отримання результату
  if (operatorsList.includes(lastChar)) {
    return null;
  }

  // отримуємо масив всіх введених чисел      
  const onlyNumbers = valueInput.split(/\+|\-|\×|\÷/g);
  // отримуємо масив всіх введених операторів (їх завжди менше на один ніж введених чисел)
  const onlyOperators = valueInput.replace(/[0-9]|\./g, '').split('');

  // ділення
    // приклад:
    // 1+4*5-6-8/2 
    // [1,4,5,6,8,2] - onlyNumbers
    // [+,*,-,-,/] - onlyOperators
    // dividerIndex = 4
    // const nums = [1,4,5,6,8,2] - onlyNumbers;
    // nums.splice(4, 2, 8 / 2) - де 4 - це dividerIndex, 2 - кількість елементів які потрібно замінити включно з dividerIndex, 8 / 2 - результат того, на що міняємо

  // знаходимо перший оператор множення серед всіх операторів
  let dividerIndex = onlyOperators.indexOf('÷');
   // доки оператор ділення є у масиві операторів (onlyOperators)
  while(dividerIndex !== -1) {
    // знаходимо у масиві значення чисел які знаходяться на цьому ж індексі що й оператор і наступне число і ділимо їх
    const result = onlyNumbers[dividerIndex] / onlyNumbers[dividerIndex + 1];
    // і замінюємо їх на результат
    onlyNumbers.splice(dividerIndex, 2, result);
    // видаляємо цей оператор ділення з масиву операторів
    onlyOperators.splice(dividerIndex, 1);
    // знаходимо наступний оператор ділення серед всіх операторів
    dividerIndex = onlyOperators.indexOf('÷');
  }

  // множення
  let multiplyIndex = onlyOperators.indexOf('×');
  while(multiplyIndex !== -1) {
    const result = onlyNumbers[multiplyIndex] * onlyNumbers[multiplyIndex + 1];

    onlyNumbers.splice(multiplyIndex, 2, result);
    onlyOperators.splice(multiplyIndex, 1);

    multiplyIndex = onlyOperators.indexOf('×');
  }

  // віднімання
  let substractIndex = onlyOperators.indexOf('-');
  while(substractIndex !== -1) {
    const result = onlyNumbers[substractIndex] - onlyNumbers[substractIndex + 1];

    onlyNumbers.splice(substractIndex, 2, result);
    onlyOperators.splice(substractIndex, 1);

    substractIndex = onlyOperators.indexOf('-');
  }

  // додавання
  let sumIndex = onlyOperators.indexOf('+');
  while(sumIndex !== -1) {
    const result = parseFloat(onlyNumbers[sumIndex]) + parseFloat(onlyNumbers[sumIndex + 1]);

    onlyNumbers.splice(sumIndex, 2, result);
    onlyOperators.splice(sumIndex, 1);

    sumIndex = onlyOperators.indexOf('+');
  }

  // замінюємо значення введеної операції на її результат
  input.innerHTML = onlyNumbers[0];
  // ставимо позначку що це вже результат введеної операції
  isResultDisplyed = true;
});