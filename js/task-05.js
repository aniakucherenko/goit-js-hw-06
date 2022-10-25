const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
function IsEmpty() {

        if (document.form.question.value == "") {
          alert("Anonymous");
        }
        return;
      }
});