const containerCategory = document.getElementById("categorie-meal");

//Función que muestra los datos obtenidos del fetch
function showDataCategories (array) {
      for (const data of array) {
        containerCategory.innerHTML += `
        <div onclick="setMealCategory('${data.strCategory}')">
            <div class="custom-card">
                <h4>${data.strCategory}</h4>
                <img src="${data.strCategoryThumb}">
            </div>
        </div>
        `
      }
}

//Obtención de los datos del fetch
function getCategoriesMeal () {
    fetch(API_MEAL_CATEGORIES)
    .then ((response) => response.json())
    .then ((data) => {
        showDataCategories(data.categories);
    })
}

document.addEventListener("DOMContentLoaded", function () {
    getCategoriesMeal();
})