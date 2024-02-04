const helloBtn = document.querySelector(".hello-btn");
const helloText = document.querySelector(".h1-span");
const inpText = document.querySelector(".area-for-name");
const dishes = document.querySelectorAll(".dish");
const cartBtns = document.querySelectorAll(".addButton"); // pluralize variable name
const allDishes = document.querySelector(".ordered");
const clBtn = document.querySelector(".clear-btn");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectTable = document.querySelector(".tables");
const totalPrice = document.querySelector(".tot-price");

const rmvBtn = document.querySelectorAll(".remove-btn");
allDishes.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-btn")) {
        removeFromCart(event);
    }
});


let defaultName = helloText.textContent;
let htmlCont;
let billNum = 0;
let totPrice = 0;

function addToCart(event) {
    const target = event.currentTarget;
    let dishList = document.createElement('li');
    dishList.classList.add('ordered-dish');

    let dishName = document.createElement('h3');
    dishName.classList.add('dish-name');
    dishName.textContent = target.closest('.dish').querySelector('.name').textContent;

    let orderedDishPrice = document.createElement('p');
    orderedDishPrice.classList.add('ordered-dish-price');
    let actualPrice = parseFloat(target.closest('.dish').querySelector('.dish-price').textContent);
    orderedDishPrice.textContent = actualPrice.toFixed(2) + ' $';

    let newRmvBtn = document.createElement('button');
    newRmvBtn.classList.add('remove-btn');
    newRmvBtn.textContent = 'Remove';
    

    allDishes.appendChild(dishList);
    dishList.appendChild(dishName);
    dishList.appendChild(orderedDishPrice);
    dishList.appendChild(newRmvBtn);
    htmlCont = allDishes;

    let price = actualPrice || 0;
    totPrice += price;
    totalPrice.textContent = totPrice.toFixed(2) + ' $';
}


function removeFromCart(event) {
    const orderedDishElement = event.target.closest('.ordered-dish');

    // Check if orderedDishElement is not null before attempting to remove
    if (orderedDishElement) {
        orderedDishElement.remove();

        // Update the total price
        let price = parseFloat(orderedDishElement.querySelector('.ordered-dish-price').textContent) || 0;
        totPrice -= price;
        totalPrice.textContent = totPrice.toFixed(2) + ' $';
    } else {
        console.error('Could not find closest .ordered-dish');
    }
}

/*function clearFunc(event) {
    allDishes.forEach(orderedDish => {
        allDishes.removeChild(orderedDish);
        totPrice = 0;
        totalPrice.textContent = totPrice.toFixed(2) + ' $';
        rmvBtn.removeEventListener();
    });
}*/

function clearFunc(event) {
        const orderedDish = document.querySelectorAll('.ordered-dish');
        orderedDish.forEach(orderedDish => {
        allDishes.removeChild(orderedDish);
        totPrice = 0;
        totalPrice.textContent = totPrice.toFixed(2) + ' $';
});}

function showMes(event) {
    let textValue = event.target.value.trim() || defaultName;
    helloText.textContent = `${textValue}`;
}

function showBill(event) {
    backdrop.classList.add('is-open');

    let yourTable = selectTable.value;
    let billTable = document.createElement('h2');
    billTable.textContent = `Table number ${yourTable}`;

    let billCustomerName = document.createElement('h1');
    billNum += 1;
    billCustomerName.textContent = `Hello, ${helloText.textContent}, your order number ${billNum}:`;
    modal.appendChild(billCustomerName);
    modal.appendChild(billTable);
    let billTotalPrice = document.createElement('h2');
    billTotalPrice.classList.add('.bill-total-price');
    billTotalPrice.textContent = `Total price: ${totPrice.toFixed(2)}$`;
    
    try {
        const clonedDishes = htmlCont.cloneNode(true);
        clonedDishes.querySelectorAll('.remove-btn').forEach(btn => btn.remove());
        modal.appendChild(clonedDishes);
        modal.appendChild(billTotalPrice);
    } catch (error) {
        billCustomerName.textContent = `Hello, ${defaultName}, You haven't ordered any dishes yet, please return to the menu`;
    }
}

helloBtn.addEventListener("click", showBill);
inpText.addEventListener("input", showMes);
cartBtns.forEach(dish => dish.addEventListener("click", addToCart));
clBtn.addEventListener("click", clearFunc);
