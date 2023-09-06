const containerList = document.getElementById("list-meal");
const category = localStorage.getItem("strCategory");

//Función que muestra los datos obtenidos del fetch
function showDataListMeal (array) {
    for (const data of array) {
      containerList.innerHTML += `
      <div onclick="setMealID(${data.idMeal})">
          <div>
              <h4>${data.strMeal}</h4>
              <img src="${data.strMealThumb}">
          </div>
      </div>
      `
    } 
}

//Obtención de los datos del fetch
function getListMeal () {
  fetch(API_MEAL_FILTER_CATEGORIES + category)
  .then ((response) => response.json())
  .then ((data) => {
      showDataListMeal(data.meals);
  })
};

document.addEventListener("DOMContentLoaded", function () {
  getListMeal();
})