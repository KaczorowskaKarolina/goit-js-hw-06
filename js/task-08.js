const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page reload

const email = form.elements.email.value;
const password = form.elements.password.value;

if (!email || !password) {
  alert('All fields must be filled in');
  return;
}

const formData = {
  email: email,
  password: password
};

console.log(formData);

form.reset(); // clear form fields
});

//-----------------------------------------------------------
// Ten kod obsługuje zdarzenie wysłania formularza logowania. Po wciśnięciu przycisku "submit" na formularzu, kod wykonuje następujące czynności:

// Zatrzymuje domyślne zachowanie formularza, czyli przeładowanie strony.
// Pobiera wartości wpisane w pola formularza (email i password).
// Sprawdza, czy oba pola są wypełnione. Jeśli któryś z nich jest pusty, wyświetla alert z informacją o konieczności wypełnienia wszystkich pól i przerywa dalsze działanie kodu.
// Jeśli oba pola są wypełnione, tworzy obiekt formData zawierający email i password.
// Wyświetla zawartość obiektu formData w konsoli.
// Czyści pola formularza.