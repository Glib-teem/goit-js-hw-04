function makeArray(firstArray, secondArray, maxLength) {
  // об'єднаєм массиви в новий масив
  const newArray = firstArray.concat(secondArray);

  // Перевіряю довжину нового масиву
  if (newArray.length > maxLength) {
    // якщо довжина нового масиву більша за maxLength - повертаю обрізану копію
    return newArray.slice(0, maxLength);
  } else {
    // якщо менша - повертаю весь новий масив
    return newArray;
  }
}

// для ментора
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
