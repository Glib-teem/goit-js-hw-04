function filterArray(numbers, value) {
  // Створюю масив для зберігання чисел
  const filteredNumbers = [];
  // Ітерую кожен елемент масиву
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]; // Отримую значення елемента масиву
    // Використовую оператор if для перевірки та додавання
    if (number > value) {
      filteredNumbers.push(number); // Додаю число до масиву
    }
  }
  // Повертаю новий масив з підходящими числами
  return filteredNumbers;
}

// для ментора
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
