// Get the ul#categories element
const categories = document.getElementById("categories");

// Get all the li.item elements within ul#categories
const items = categories.querySelectorAll("li.item");

// Count and display the number of categories
console.log("Number of categories: " + items.length);

// Loop through each li.item element
items.forEach((item) => {
  // Get the category header text
  const category = item.querySelector("h2").textContent;

  // Get the number of elements in the category
  const elements = item.querySelectorAll("li").length;

  // Display the category header and number of elements
  console.log("Category: " + category);
  console.log("Elements: " + elements);
});