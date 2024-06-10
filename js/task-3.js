// Task 3. Player profile 
// Об’єкт profile описує профіль користувача.
// Властивості зберігають ім’я профілю username та кількість
// активних годин playTime, проведених у грі.


'use strict';

const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(" Task 3. Player profile ");
console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

