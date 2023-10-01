function sayHello() {
    alert('Hello, welcome to my personal website!');
}

// Toggle display of ingredients 
document.getElementById('toggle-ingredients').addEventListener('click', () => {
    let ingredientList = document.getElementById('ingredient-list');
    if (ingredientList.style.display === 'none' || ingredientList.style.display === '') {
        ingredientList.style.display = 'block';
    } else {
        ingredientList.style.display = 'none';
    }
});