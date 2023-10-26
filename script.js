let totalCheckboxes = 0; //antall checkbokser
let completedCheckboxes = 0; // aantall markerte checkboxer


function checkEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        addtext(); 
        updateCompletionPercentage();
    }
}


function addtext() {
    let brukerSvar = document.getElementById("input_felt").value;

    if (brukerSvar.trim() === "") {
      alert("Vennligst skriv tekst før du submiter.");
      return;
    }

    let test = document.getElementById("test");

    // lage checkbox element
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", updateCompletionPercentage);

     // lag en label element for chekcbokssssss
    let label = document.createElement("label");
    label.appendChild(checkbox);
    

    // Lag tekst for brukerens input
    let textNode = document.createTextNode(brukerSvar);

    // Append checkboks og tekst til "test"
    test.appendChild(checkbox);
    test.appendChild(textNode);
    test.appendChild(document.createElement("br"));

    // Øk antall checkbokser
    totalCheckboxes++;

    // fjern tidligere tekst i input felt
    document.getElementById("input_felt").value = "";
  }

  function updateCompletionPercentage() { // Oppdater completion %
    completedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked").length;
    let completionPercentage = (completedCheckboxes / totalCheckboxes) * 100;
    let completionPercentageDisplay = document.getElementById("completionPercentage");
    completionPercentageDisplay.textContent = `Completion: ${completionPercentage.toFixed(2)}%`;
}
