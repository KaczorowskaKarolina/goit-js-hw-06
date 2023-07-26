const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", function() {
  const fontSize = fontSizeControl.value;
  text.style.fontSize = fontSize + "px";
});

//--------------------------------------------
// Ten kod tworzy interaktywny kontroler rozmiaru czcionki.
// Początkowo pobiera element o id "font-size-control" i element o id "text" ze strony HTML.
// Następnie dodaje nasłuchiwanie na zdarzenie "input" dla kontrolki rozmiaru czcionki.
// Kiedy użytkownik zmieni wartość kontrolki, funkcja zostanie wykonana.
// Funkcja pobierze wartość kontrolki rozmiaru czcionki i przypisze ją do zmiennej 'fontSize'. Następnie ustawia rozmiar czcionki dla elementu 'text' na wartość 'fontSize' + "px".
// W rezultacie tekst na stronie zostanie powiększony lub zmniejszony zgodnie z wartością kontrolki.