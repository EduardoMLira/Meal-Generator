const mealName = document.getElementById('mealName')
const mealImg = document.getElementById('mealImg')
const category = document.getElementById('category')
const area = document.getElementById('area')
const tags = document.getElementById('tags')
const mealVideo = document.getElementById('mealVideo')
const instructions = document.getElementById('instructions')
const ingredientList = document.getElementById('ingredientList')

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((randomMeal) => {
        const meal = randomMeal.meals[0]

        mealName.textContent = meal.strMeal
        mealImg.src = meal.strMealThumb
        category.textContent = meal.strCategory
        area.textContent = meal.strArea
        tags.textContent = meal.strTags
        mealVideo.src = meal.strYoutube
        instructions.textContent = meal.strInstructions

        for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}`;
            const ingredientValue = meal[ingredientKey];
        
            if (ingredientValue) {
                const ingredientElement = document.createElement('li');
                ingredientElement.textContent = `${ingredientValue};`;
                ingredientList.appendChild(ingredientElement);
            }
        }
    })
    .catch((error) => console.log(error))