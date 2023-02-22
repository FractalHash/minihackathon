
let cocktailData;
const pathURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const imgEl = document.querySelector(".cocktail-img");
const nameEl = document.querySelector(".cocktail-name");
const ingredientsList = document.querySelector(".cocktail-ingredients");

const promise = axios.get(pathURL).then((res) => {
  cocktailData = res.data.drinks[0];

  //name
  const cocktailName = cocktailData.strDrink;
  nameEl.innerHTML = cocktailName;
  //img
  imgEl.src = cocktailData.strDrinkThumb;

  //ingredients

  for (let i = 1; i <= 15; i++) {
    let index = "strIngredient" + i;
    // console.log(cocktailData[index]);
    if (!cocktailData[index]) {
      break;
    } else {
      const listEl = document.createElement("li");
      listEl.innerHTML = cocktailData[index];
      ingredientsList.appendChild(listEl);
    }
  }

  //instruction
  const stepsList = document.querySelector(".steps");
  const split = cocktailData.strInstructions.split(".");
  split.forEach((step) => {
    if (step) {
      const listEl = document.createElement("li");
      listEl.innerHTML = step;
      stepsList.appendChild(listEl);
    }
  });
  return "hello";
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  return promise.then(() => console.log("click"));
});