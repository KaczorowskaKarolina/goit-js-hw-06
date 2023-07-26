const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

createButton.addEventListener('click', function() {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = ''; // Clear the contents of div#boxes before creating new elements

let dimensions = 30;
for (let i = 0; i < amount; i++) {
const box = document.createElement('div');
box.style.width = dimensions + 'px';
box.style.height = dimensions + 'px';
box.style.backgroundColor = getRandomHexColor();
boxes.appendChild(box);
dimensions += 10;
}
}

function destroyBoxes() {
  boxes.innerHTML = ''; // Clear the contents of div#boxes
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//-------------------------------------------------------------------------------
// Ten kod tworzy prostą aplikację, która umożliwia tworzenie i usuwanie boxów za pomocą przycisków.

// Przycisk "createButton" po kliknięciu tworzy określoną ilość boxów na podstawie wartości wpisanej w polu tekstowym "input". Każdy box ma zwiększające się o 10 pikseli wymiary (width i height) i losowy kolor tła generowany za pomocą funkcji getRandomHexColor(). Boxy są dodawane do kontenera o id "boxes".

// Przycisk "destroyButton" po kliknięciu usuwa wszystkie boxy z kontenera poprzez wyczyszczenie jego zawartości za pomocą boxes.innerHTML=''.

// Funkcja getRandomHexColor() generuje losowy kolor tła dla boxów, zwracając wartość w formacie heksadecymalnym.

// W sumie, ten kod tworzy dynamiczny interfejs umożliwiający użytkownikowi tworzenie i usuwanie boxów o różnych rozmiarach i kolorach.