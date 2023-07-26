let counterValue = 0;

const decreaseButton = document.querySelector('button[data-action="decrement"]');
const increaseButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector('#value');

decreaseButton.addEventListener('click', function() {
  counterValue--;
  valueSpan.textContent = counterValue;
});

increaseButton.addEventListener('click', function() {
  counterValue++;
  valueSpan.textContent = counterValue;
});

//Ten skrypt tworzy prosty licznik, który można zwiększać lub zmniejszać klikając na przyciski "decrement" i "increment". 
//Wartość licznika jest przechowywana w zmiennej counterValue, a wyświetlana jest w elemencie o id "value". 
//Kiedy klikniemy przycisk "decrement", wartość licznika jest zmniejszana o 1 i aktualizowana na stronie. 
//Kiedy klikniemy przycisk "increment", wartość licznika jest zwiększana o 1 i również aktualizowana na stronie.