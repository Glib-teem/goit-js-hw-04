function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0;
  // Підраховую загальну кількість продуктів
  for (const productName in products) {
    // Перевіряю чи властивість належить об'єкту а не його прототипу
    if (Object.prototype.hasOwnProperty.call(products, productName)) {
      totalProducts += products[productName];
    }
  }
  // Перевіряю чи помістються всі продукти в контейнер
  return totalProducts <= containerSize;
}

// для ментора
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
