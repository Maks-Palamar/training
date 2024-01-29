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
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
let orderedDishes = allDishes.querySelectorAll('.ordered-dish');
const selectTable = document.querySelector(".tables");
const dishPrice = document.querySelector(".dish-price");


let defaultName = helloText.textContent;
let cart = {};
let htmlCont;
let billNum = 0;
let price;
let totPrice = 0;

function addToCart(event) {
    let dishList = document.createElement('li');
    dishList.classList.add('ordered-dish');

    let dishName = document.createElement('div');
    dishName.classList.add('dish-name');
    dishName.textContent = event.target.textContent;
    console.log(dishName);
    allDishes.appendChild(dishList);
    dishList.appendChild(dishName);
    htmlCont = allDishes;
    console.log(htmlCont);

    
    price = parseFloat(event.target.querySelector('.dish-price').textContent);
    totPrice += price;
    console.log(totPrice);
    const totalPrice = document.querySelector(".tot-price");
    totalPrice.textContent = totPrice;
}

function removeFromCart(event) {
    event.target.remove();
    console.log(htmlCont);
    price = parseFloat(event.target.querySelector('.dish-price').textContent);
    totPrice -= price;
}

function clearFunc(event) {
    orderedDishes.forEach(orderedDish => {
        allDishes.removeChild(orderedDish);
        totPrice = 0;
    });
}

function showMes(event) {
    let textValue = event.target.value.trim() || defaultName;
    helloText.textContent = `${textValue}`;
    
}

function showBill(event) {
    backdrop.classList.add('is-open');

    let yourTable = selectTable.value;
    console.log(yourTable);
    let billTable = document.createElement('h2');
    billTable.textContent = `Table number ${yourTable}`;
    
    let billCustomerName = document.createElement('h1');
    billNum += 1;
    billCustomerName.textContent = `Hello, ${helloText.textContent}, your order number ${billNum}:`;
    modal.appendChild(billCustomerName);
    modal.appendChild(billTable);

    try {
        modal.appendChild(htmlCont);
    } catch (error) {
        billCustomerName.textContent = `Hello, ${defaultName}, You havent ordered any dishes yet, please return to menu`;
    }
    
}
