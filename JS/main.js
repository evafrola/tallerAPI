const API_ID_MEAL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const API_MEAL_CATEGORIES = "https://www.themealdb.com/api/json/v1/1/categories.php";
const API_MEAL_FILTER_CATEGORIES = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

//Función que guarda un id en localStorage y los muestra en id-meals.html
function setMealID (id) {
    localStorage.setItem("idMeal", id);
    window.location = "id-meals.html"
}

//Función que guarda un id en localStorage y los muestra en list-meals.html
function setMealCategory (category) {
    localStorage.setItem("strCategory", category);
    window.location = "list-meals.html"
}

