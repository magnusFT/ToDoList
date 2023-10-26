function checkEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        addtext(); 
    }
}


function addtext() {
    let brukerSvar = document.getElementById("input_felt").value;

    if (brukerSvar.trim() === "") {
      alert("Please enter some text before adding it.");
      return;
    }

    let test = document.getElementById("test");

    // lage checkbox element
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

     // lag en label element for chekcbokssssss
    let label = document.createElement("label");
    label.appendChild(checkbox);
    

    // Lag tekst for brukerens input
    let textNode = document.createTextNode(brukerSvar);

    // Append checkboks og tekst til "test"
    test.appendChild(checkbox);
    test.appendChild(textNode);
    test.appendChild(document.createElement("br"));

    // fjern tidligere tekst i input felt
    document.getElementById("input_felt").value = "";
  }

