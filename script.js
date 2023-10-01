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

function toggleInstructions() {
    let instructionList = document.getElementById('instruction-list');
    let toggleButton = document.getElementById('toggle-instructions');
    
    if (instructionList.style.display === 'none' || instructionList.style.display === '') {
        instructionList.style.display = 'block';
        toggleButton.textContent = 'Hide Instructions';
    } else {
        instructionList.style.display = 'none';
        toggleButton.textContent = 'Show Instructions';
    }
}

document.getElementById('toggle-ingredients').addEventListener('click', toggleIngredients);
document.getElementById('toggle-instructions').addEventListener('click', toggleInstructions);