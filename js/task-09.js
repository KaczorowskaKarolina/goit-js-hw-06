const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
button.addEventListener('click', function() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

//------------------------------------------------------
// Ten kod obsługuje zmianę koloru tła strony oraz wyświetlanie wylosowanego koloru.

// Na początku kodu deklarowane są stałe button i colorSpan, które odnoszą się do elementów na stronie: przyciska o klasie "change-color" oraz spana o klasie "color".
// Funkcja getRandomHexColor() generuje losowy kolor w formacie szesnastkowym, składający się z sześciu znaków. Wartość koloru jest wyrażana jako liczba dziesiętna (zakres od 0 do 16777215), która jest następnie konwertowana na wartość szesnastkową.
// Następnie, za pomocą metody addEventListener(), dodawane jest zdarzenie "click" do przycisku. Gdy nastąpi kliknięcie, uruchamiana jest anonimowa funkcja.
// Wewnątrz tej funkcji generowany jest losowy kolor za pomocą wcześniej zdefiniowanej funkcji getRandomHexColor().
// Kolor tła body strony jest ustawiany na wygenerowany losowy kolor za pomocą właściwości style.backgroundColor.
// Wygenerowany losowy kolor jest również wyświetlany w elemencie span o klasie "color" za pomocą właściwości textContent.