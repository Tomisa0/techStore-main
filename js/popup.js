// Получаем элементы DOM
var modal = document.getElementById("myModal");
var btns = document.getElementsByClassName("openModalBtn");
var span = document.getElementsByClassName("close")[0];
var featuresList = document.getElementById("productFeatures");

// Функция для открытия модального окна
function openModal(productId) {
  modal.style.display = "block";

  // Получаем характеристики товара из LocalStorage по его ID
  var productFeatures = JSON.parse(localStorage.getItem(productId));

  // Очищаем список характеристик
  featuresList.innerHTML = "";

  // Добавляем характеристики товара в список
  for (var i = 0; i < productFeatures.length; i++) {
    var li = document.createElement("li");
    li.textContent = productFeatures[i];
    featuresList.appendChild(li);
  }
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = "none";
}

// Закрытие модального окна при клике на "крестик"
span.onclick = function () {
  closeModal();
};

// Закрытие модального окна при клике вне окна
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

//Привязываем событие открытия модального окна к каждой кнопке товара
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    var productId = this.getAttribute("data-product-id");
    openModal(productId);
  };
}

// Функция для добавления характеристик товара
function addProductFeatures(productId, features) {
  localStorage.setItem(productId, JSON.stringify(features));
}

// Пример использования
var product1Features = [
  "Питание : От акуммулятора",
  "Назначение : Дрель-шуруповерт",
  "Тип патрона : Быстрозажимной",
  "Диаметр патрона, макс, мм : 10",
  "Диаметр патрона, мин, мм : 1",
  "Макс. число оборотов холостого хода, об/мин : 650",
  "Максимальный крутящий момент, Нм : 20",
  "Количество скоростей работы : 18",
];
var product2Features = [
  "Потребляемая мощность, Вт : 620",
  "Питание : От сети",
  "Макс. диаметр сверления (дерево), мм : 16",
  "Тип крепления бура : SDS-Plus",
  "Макс. число оборотов холостого хода, об/мин : 870",
  "Макс. количество ударов в минуту : 4850",
  "Макс. диаметр сверления (металл), мм : 16",
];
var product3Features = [
  "Потребляемая мощность, Вт : 570",
  "Тип : Ударная",
  "Питание : От сети",
  "Назначение : Дрель",
  "Макс. диаметр сверления (дерево), мм : 25",
  "Диаметр патрона, макс, мм : 1.5",
  "Макс. число оборотов холостого хода, об/мин : 3000",
];
var product4Features = [

]

// Добавление характеристик для товара 1
addProductFeatures("product1", product1Features);

// Добавление характеристик для товара 2
addProductFeatures("product2", product2Features);
addProductFeatures("product3", product3Features);
addProductFeatures("product4",product4Features);
addProductFeatures("product5",product5Features);
addProductFeatures("product6",product6Features);
addProductFeatures("product7",product7Features);
addProductFeatures("product8",product8Features);
addProductFeatures("product9",product9Features);
addProductFeatures("product10",product10Features);
addProductFeatures("product11",product11Features);
addProductFeatures("product12",product12Features);
addProductFeatures("product13",product13Features);
addProductFeatures("product14",product14Features);
addProductFeatures("product15",product15Features);
addProductFeatures("product16",product16Features);
addProductFeatures("product17",product17Features);
addProductFeatures("product18",product18Features);
