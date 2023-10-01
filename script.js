function sayHello() {
    alert('Hello, welcome to my personal website!');
}

// Handler to toggle the display of ingredients and update button text
function toggleIngredients() {
    let ingredientList = document.getElementById('ingredient-list');
    let toggleButton = document.getElementById('toggle-ingredients');
    
    if (ingredientList.style.display === 'none' || ingredientList.style.display === '') {
        ingredientList.style.display = 'block';
        toggleButton.textContent = 'Hide Ingredients';  // Changed text
    } else {
        ingredientList.style.display = 'none';
        toggleButton.textContent = 'Show Ingredients';
    }
}

// Toggle display of instructions
document.getElementById('toggle-instructions').addEventListener('click', () => {
    let instructionList = document.getElementById('instruction-list');
    if (instructionList.style.display === 'none' || instructionList.style.display === '') {
        instructionList.style.display = 'block';
    } else {
        instructionList.style.display = 'none';
    }
});

document.getElementById('toggle-ingredients').addEventListener('click', toggleIngredients);