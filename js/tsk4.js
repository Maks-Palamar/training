const helloBtn = document.querySelector(".hello-btn");
const helloListener = helloBtn.addEventListener("click", showBill);
const helloText = document.querySelector(".h1");
const inpText = document.querySelector(".area-for-name");
const inpListener = inpText.addEventListener("input", showMes);
const dishes = document.querySelectorAll(".dish");
dishes.forEach(dish => dish.addEventListener("click", addToCart));
const allDishes = document.querySelector(".ordered");
const clBtn = document.querySelector(".clear-btn");
const clBtnListener = clBtn.addEventListener("click", clearFunc);

allDishes.addEventListener("click", removeFromCart);

let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
/*const newD = document.querySelectorAll(".ordered-dish");
newD.forEach(dish => dish.addEventListener("click", removeFromCart))*/

let defaultName = helloText.textContent;
let cart = {};
let htmlCont;

function addToCart(event) {
    let dishList = document.createElement('li');
    dishList.classList.add('ordered-dish');

    let dishName = document.createElement('p');
    dishName.classList.add('dish-name');
    dishName.textContent = event.target.textContent;

    allDishes.appendChild(dishList);
    dishList.appendChild(dishName);
    htmlCont = allDishes;
    console.log(htmlCont);
}

function removeFromCart(event) {
    event.target.remove();
    console.log(htmlCont);
}

function clearFunc(event) {
    const orderedDishes = allDishes.querySelectorAll('.ordered-dish');
    orderedDishes.forEach(orderedDish => {
        allDishes.removeChild(orderedDish);
    });
}

function showMes(event) {
    defaultName = "Hello, Dom";
    let textValue = event.target.value.trim() || defaultName;
    defaultName = `Hello, ${textValue}, your order:`;
    
}

function showBill(event) {
    backdrop.classList.add('is-open');
    let billCustomerName = document.createElement('h1');
    billCustomerName.textContent = defaultName;
    modal.appendChild(billCustomerName);
    modal.appendChild(htmlCont);
}
/*function clearFunc(event) {
    // Remove the last child element from allDishes
    const lastOrderedDish = allDishes.lastChild;
    if (lastOrderedDish) {
        allDishes.removeChild(lastOrderedDish);
    }
}*/