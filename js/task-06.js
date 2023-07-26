// document
//   .getElementById("validation-input")
//   .addEventListener("blur", function(event) {
//     const input = event.target;
//     const expectedLength = input.getAttribute("data-length");
//     const enteredValue = input.value;

// if (enteredValue.length === Number(expectedLength)) {
//   input.style.borderColor = "green";
//   input.style.borderWidth = "2px";
// } else {
//   input.style.borderColor = "red";
//   input.style.borderWidth = "2px";
// }
// });

const input = document.getElementById("validation-input");

input.addEventListener("blur", checkInputLength);

function checkInputLength() {
  const inputLength = this.value.length;
  const requiredLength = this.getAttribute("data-length");

if (inputLength == requiredLength) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
  }
}



// Ten kod tworzy funkcję checkInputLength, która jest wywoływana po zdarzeniu blur (strata focusu) na elemencie <input> o id "validation-input". Funkcja ta sprawdza długość wprowadzonej przez użytkownika wartości w polu tekstowym i porównuje ją z oczekiwaną długością, pobraną z atrybutu data-length elementu <input>.

// Jeśli długość wprowadzonej wartości jest równa oczekiwanej długości, dodawana jest klasa "valid" do elementu <input> i usuwana jest klasa "invalid". W przeciwnym razie, dodawana jest klasa "invalid" i usuwana jest klasa "valid".

// W ten sposób, element <input> otrzymuje odpowiednią klasę, co pozwala na wyświetlenie odpowiednich stylów w celu wizualnego oznaczenia poprawności wprowadzonych danych.