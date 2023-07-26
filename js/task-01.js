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


// --------------------------------------------
// Get the ul#categories element
//const categories = document.getElementById("categories");

// Get all the li.item elements within ul#categories
//const items = categories.querySelectorAll("li.item");

// Count and display the number of categories
//console.log("Number of categories: " + items.length);

// Loop through each li.item element using for…of loop
//for (const item of items) {
  // Get the category header text
  //const category = item.querySelector("h2").textContent;

// Get the number of elements in the category
  //const elements = item.querySelectorAll("li").length;

// Display the category header and number of elements
  //console.log("Category: " + category);
  //console.log("Elements: " + elements);
//}

//------------------------------------------------------
// Ten kod wykonuje następujące czynności:

// Pobiera element ul o id "categories" za pomocą metody getElementById.
// Znajduje wszystkie elementy li o klasie "item" znajdujące się wewnątrz elementu ul o id "categories" za pomocą metody querySelectorAll.
// Liczy i wyświetla liczbę znalezionych elementów li o klasie "item" przy użyciu console.log.
// Przechodzi przez każdy znaleziony element li o klasie "item" za pomocą metody forEach.
// Pobiera tekst nagłówka h2 znajdującego się wewnątrz aktualnie przetwarzanego elementu li przy użyciu metody querySelector i przypisuje go do zmiennej category.
// Znajduje wszystkie elementy li znajdujące się wewnątrz aktualnie przetwarzanego elementu li i pobiera ich długość za pomocą metody querySelectorAll i length, a następnie przypisuje wartość do zmiennej elements.
// Wyświetla nagłówek kategorii i liczbę elementów dla aktualnie przetwarzanego elementu li przy użyciu console.log.