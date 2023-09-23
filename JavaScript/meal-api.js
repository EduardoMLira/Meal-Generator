const category = document.getElementById('category')
const mealImg = document.getElementById('mealImg')

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((randomMeal) => {
        const meal = randomMeal.meals[0]

        category.textContent = meal.strCategory
        mealImg.src = meal.strMealThumb
    })
    .catch((error) => console.log(error))

