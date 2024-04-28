/*
  Створити об'єкт country двома способами: літерально та за допомогою функції конструктора
  властивості:
  - name (рядок)
  - population (число)
  - area (число)
  Метод:
  - getDensity() - повертає число яке є результатом обчислення: популяція поділена на площу
  - getInfo() - повертає рядок з повною інформацією про країну (назва, популяція та площа) з описом що виводить і одиницями вимірювання
*/

/* Перевірок ніяких поки не робити! */

const countryProto = {
  getDensity: function () {
    return `Густота населення країни становить ${this.population/this.area} осіб на км²`;
  },
  getInfo: function () {
    return `Країна ${this.name} має популяцію населення ${this.population} осіб та площу ${this.area} км²`;
  },
};

const country1 = {
  name: "Ukraine",
  population: 35000000, // 2024
  area: 603628,
  __proto__: countryProto,
};

// country1.__proto__ = countryProto;

console.log(country1)
console.log(country1.getInfo());
console.log(country1.getDensity(), "\n");

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
}

function CountryPrototype() {
  this.getDensity = function () {
    return `Густота населення країни становить ${this.population/this.area} осіб на км²`;
  };
  this.getInfo = function () {
    return `Країна ${this.name} має популяцію населення ${this.population} осіб та площу ${this.area} км²`;
  };
}

Country.prototype = new CountryPrototype();

const country2 = new Country("Ukraine", 35000000, 603628);

console.log(country2);
console.log(country2.getInfo());
console.log(country2.getDensity());