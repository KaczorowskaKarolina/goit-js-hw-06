const nameInput = document.querySelector("#name-input");
  const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", function() {
    if (nameInput.value === "") {
      nameOutput.textContent = "Anonymous";
    } else {
      nameOutput.textContent = nameInput.value;
    }
  });

  //---------------------------------------------------------
//Ten kod jest odpowiedzialny za słuchanie zdarzenia "input" na elemencie o id "name-input". 
//Gdy użytkownik wprowadza tekst, kod sprawdza czy wartość pola "name-input" jest pusta. 
//Jeśli tak, to pole "name-output" jest ustawiane na "Anonymous" (nieznane). 
//Jeśli pole "name-input" nie jest puste, to wartość tego pola jest przypisywana do pola "name-output". 
//W rezultacie, tekst wprowadzony w polu "name-input" będzie pokazywany w polu "name-output".