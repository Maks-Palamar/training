const helloBtn = document.querySelector(".hello-btn");
const helloListener = helloBtn.addEventListener("click", showBill);
const helloText = document.querySelector(".h1-span");
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

let defaultName = helloText.textContent;
let cart = {};
let htmlCont;
let billNum = 0;

function addToCart(event) {
    let dishList = document.createElement('li');
    dishList.classList.add('ordered-dish');

    let dishName = document.createElement('div');
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
    let textValue = event.target.value.trim() || defaultName;
    helloText.textContent = `${textValue}`;
    
}

function showBill(event) {
    backdrop.classList.add('is-open');
    let billCustomerName = document.createElement('h1');
    billCustomerName.textContent = `Hello, ${helloText.textContent}, your order number ${billNum}:`;
    modal.appendChild(billCustomerName);
    billNum += 1;

    try {
        modal.appendChild(htmlCont);
    } catch (error) {
        billCustomerName.textContent = `Hello, ${defaultName}, You havent ordered any dishes yet, please return to menu`;
    }
}
