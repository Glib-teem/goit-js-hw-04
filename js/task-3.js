// Профіль користувача в ігровій платформі

const profile = {
  username: 'Jacob',
  playTime: 300,

  // Змінюю ім'я користувача на нове

  changeUsername(newName) {
    this.username = newName;
  },

  // Оновлюю к-сть годин гри (години які потрібно додати)

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  // Повертаю і-цію про профіль користувача (к-сть зіграних годин)

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// Для ментора

console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
