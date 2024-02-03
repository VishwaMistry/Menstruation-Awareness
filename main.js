// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
var count = 0;

// function display(){
// Display initial count value
totalCount.innerHTML = count;
// }

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

// Function to decrement count
const handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);

// second 
// Select increment and decrement buttons
const incrementCount1 = document.getElementById("increment-count1");
const decrementCount1 = document.getElementById("decrement-count1");

// Select total count
const totalCount1 = document.getElementById("total-count1");

// Variable to track count
var count1 = 25;

// function display(){
// Display initial count value
totalCount1.innerHTML = count1;
// }

// Function to increment count
const handleIncrement1 = () => {
  count1++;
  totalCount1.innerHTML = count1;
};

// Function to decrement count
const handleDecrement1 = () => {
  count1--;
  totalCount1.innerHTML = count1;
};

// Add click event to buttons
incrementCount1.addEventListener("click", handleIncrement1);
decrementCount1.addEventListener("click", handleDecrement1);
