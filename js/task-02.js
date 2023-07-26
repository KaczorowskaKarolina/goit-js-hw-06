const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients");

// create <li> elements for each ingredient
const liElements = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

// insert all <li> elements to the ul in a single operation
ul.append(...liElements);

//---------------------------------------------------------------------
// Ten kod tworzy listę składników w elemencie HTML <ul>.

// W pierwszej linii deklaruje się tablicę ingredients, która zawiera nazwy składników.

// Następnie w drugiej linii przypisywany jest element <ul> z dokumentu HTML do zmiennej ul.

// W kolejnych linijkach kodu są tworzone elementy <li> dla każdego składnika z tablicy ingredients.

// Dla każdego składnika w tablicy, tworzony jest nowy element <li> za pomocą metody document.createElement("li").
// Następnie do treści nowego elementu <li> przypisywana jest nazwa składnika za pomocą właściwości textContent.
// Do nowego elementu <li> dodawany jest również klasa "item" za pomocą metody classList.add("item").
// Na koniec, nowo utworzony element <li> jest zwracany i umieszczany w tablicy liElements.
// Na końcu kodu jest linia ul.append(…liElements), która wstawia wszystkie elementy <li> z tablicy liElements do elementu <ul> na stronie internetowej.