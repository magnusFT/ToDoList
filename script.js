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

    // Lag en div som holder boksen og tekst
    let itemDiv = document.createElement("div");
    itemDiv.className = "list-item";

    // lage checkbox element
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        // Bruker funksjon når checkboxen er markert
        updateCompletionPercentage();
        updateTextDecoration(checkbox, itemDiv);
    });

     // lag en label element for chekcbokssssss
    let label = document.createElement("label");
    label.appendChild(checkbox);
    

    // Lag tekst for brukerens input
    let textNode = document.createTextNode(brukerSvar);
    
   // appenddddd
    itemDiv.appendChild(label);
    itemDiv.appendChild(textNode);
    itemDiv.appendChild(document.createElement("br"));


    test.appendChild(itemDiv);

    // Øk antall checkbokser
    totalCheckboxes++;

    // fjern tidligere tekst i input felt
    document.getElementById("input_felt").value = "";
  }

  function updateCompletionPercentage() { // Oppdater completion %
    completedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked").length;
    let completionPercentage = (completedCheckboxes / totalCheckboxes) * 100;
    let completionPercentageDisplay = document.getElementById("completionPercentage");
    completionPercentageDisplay.textContent = `Gjennomføringsgrad: ${completionPercentage.toFixed(2)}%`;
  }

  function updateTextDecoration(checkbox, textNode) {
    if (checkbox.checked) {
        textNode.style.textDecoration = "line-through";
    } else {
        textNode.style.textDecoration = "none";
    }
}

  function removeMarkedBoxes() {
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    checkboxes.forEach(function (checkbox) {
        let itemDiv = checkbox.parentElement.parentElement; // få foreldren
        itemDiv.remove(); // fjern itemDiv med tekst og boks
        totalCheckboxes--; // Reduser total bokser tellinga
    });

    updateCompletionPercentage();
}

