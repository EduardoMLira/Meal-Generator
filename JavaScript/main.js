const mealButton = document.querySelector('.mealButton');
const generatorSection = document.querySelector('.generatorSection');
const randomMeal = document.querySelector('.randomMeal');

mealButton.addEventListener('click', () => {
    randomMeal.style.display = 'block';
    generatorSection.style.display = 'none';
});