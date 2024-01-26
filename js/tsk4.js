const helloBtn = document.querySelector(".hello-btn");
const helloListener = helloBtn.addEventListener("click", showMes);
const helloText = document.querySelector(".h1");
const inpText = document.querySelector(".area-for-name");
const inpListener = inpText.addEventListener("input", showMes);
const dishes = document.querySelectorAll(".dish");
dishes.forEach(dish => dish.addEventListener("click", addToCart));
const allDishes = document.querySelector(".ordered");
const clBtn = document.querySelector(".clear-btn");
const clBtnListener = clBtn.addEventListener("click", clearFunc)

const defaultName = helloText.textContent;

function addToCart(event) {
    let dishList = document.createElement('li');
    dishList.classList.add('ordered-dish');

    let dishName = document.createElement('p');
    dishName.classList.add('dish-name');
    dishName.textContent = event.target.textContent;

    allDishes.appendChild(dishList);
    dishList.appendChild(dishName);
}

function clearFunc(event) {
    const orderedDishes = allDishes.querySelectorAll('.ordered-dish');
    orderedDishes.forEach(orderedDish => {
        allDishes.removeChild(orderedDish);
    });
}

function showMes(event) {
    helloText.textContent = "Hello, Dom";
    let textValue = event.target.value.trim() || defaultName;
    helloText.textContent = `Hello, ${textValue}`;
}


/*function clearFunc(event) {
    // Remove the last child element from allDishes
    const lastOrderedDish = allDishes.lastChild;
    if (lastOrderedDish) {
        allDishes.removeChild(lastOrderedDish);
    }
}*/