const containerListID = document.getElementById("list-id-meal");
const listMealID = localStorage.getItem("idMeal");

//Función que muestra los datos obtenidos del fetch
function showDataListMealID (array) {
    for (const data of array) {
      containerListID.innerHTML += `
          <div class="meal-card">
              <h4>${data.strMeal}</h4>
              <img src="${data.strMealThumb}">
              <p><strong>Category: </strong> ${data.strCategory}</p>
              <p><strong>Instructions:</strong> ${data.strInstructions}</p>
          </div>
        
          <div class="meal-card">
          <h3>Ingredient:</h3>
            <ul>
          `
          //If que nos dicen si hay un ingrediente, si hay lo agrega a una lista.
          //Sino, pasa al siguiente if
        if(data.strIngredient1 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient1}</li>
            `
        };

        if(data.strIngredient2 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient2}</li>
            `
        };

        if(data.strIngredient3 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient3}</li>
            `
        };

        if(data.strIngredient4 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient4}</li>
            `
        };

        if(data.strIngredient5 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient5}</li>
            `
        };

        if(data.strIngredient6 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient6}</li>
            `
        };

        if(data.strIngredient7 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient7}</li>
            `
        };

        if(data.strIngredient8 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient8}</li>
            `
        };

        if(data.strIngredient9 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient9}</li>
            `
        };

        if(data.strIngredient10 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient10}</li>
            `
        };

        if(data.strIngredient11 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient11}</li>
            `
        };

        if(data.strIngredient12 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient12}</li>
            `
        };

        if(data.strIngredient13 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient13}</li>
            `
        };

        if(data.strIngredient14 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient14}</li>
            `
        };

        if(data.strIngredient15 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient15}</li>
            `
        };

        if(data.strIngredient16 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient16}</li>
            `
        };

        if(data.strIngredient17 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient17}</li>
            `
        };

        if(data.strIngredient18 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient18}</li>
            `
        };

        if(data.strIngredient19 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient19}</li>
            `
        };

        if(data.strIngredient20 !== "") {
            containerListID.innerHTML += `
            <li>${data.strIngredient20}</li>
            `
        };
        //Final del if, el siguiente innerHTML es para cerrar las etiquetas abiertas
        containerListID.innerHTML += `
        </ul>
        </div>
        `
    } 
}

//Obtención de los datos con el ID guardado en el localStorage
function getListMealID () {
  fetch(API_ID_MEAL + listMealID)
  .then ((response) => response.json())
  .then ((data) => {
      showDataListMealID(data.meals)
  })
};

document.addEventListener("DOMContentLoaded", function () {
  getListMealID ();
})