function findMaxElement(arr) {
    let max = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
        }
        
        
    }
    return max;
}

// Приклад використання
let numbers = [12, 5, 23, 8, 19];
console.log(findMaxElement(numbers));

function isPalindrome(word) {
    const wrdArr = word.split('');
  for (let index = 0; index < wrdArr.length; index++) {
    if (wrdArr[index] !== wrdArr[wrdArr.length-1-index]) {
        return false;
    }
    
    }
    return true;
}

// Приклад використання
let word = "level";
console.log(isPalindrome(word)); // Повинно вивести true


function countVowels(str) {
    let count = 0
    const vowels = ["a", "i", "e", "o", "u"];
    let newStr = str.toLowerCase().split('');
    for (let i = 0; i < newStr.length; i++) {
        if (vowels.includes(newStr[i])) {
            count += 1;
        }
    }
    return count;
}

// Приклад використання
let str = "Hello, WoOOOrld!";
console.log(countVowels(str)); 


function sortByKey(arr, /*key*/) {
    let oldest = arr[0].age;
    let oldestName = arr[0].name;
    let sorted = [];
    for (let i = 1; i < arr.length; i++) {
    if (arr[i].age > oldest) {
        oldest = arr[i].age;
        oldestName = arr[i].name;
    }
    
        
    }
    return oldestName;
}

// Приклад використання
let people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];

console.log(sortByKey(people));
//console.log(sortByKey(people, "age"));
// Повинно вивести: [{ name: "Alice", age: 25 }, { name: "John", age: 30 }, { name: "Bob", age: 35 }]


