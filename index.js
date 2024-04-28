/*
  Створити об'єкт country двома способами: літерально та за допомогою функції конструктора
  властивості:
  - name (рядок)
  - population (число)
  - area (число)
  Метод:
  - getDensity() - повертає число 45.78
*/

/* Перевірок ніяких поки не робити! */

const country1 = {
  name: 'Ukraine',
  population: 33400000, // 2024
  area: 603628,
  getDensity: function () {
    return this.population/this.area;
  }
}

console.log(country1, '\n');
console.log(country1.getDensity(), '\n');

/**
 * Функція-конструктор, створює об'єкти типу Сountry (країна)
 * @param {string} name 
 * @param {number} population // 2024
 * @param {number} area
 */
function Country(name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;
  
  this.getDensity = function () {
    return this.population/this.area;
  }
}

const country2 = new Country('Ukraine', 33400000, 603628);

console.log(country2, '\n');
console.log(country2.getDensity());