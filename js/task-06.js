const textInput = document.querySelector("#validation-input");
const dataLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", (event) => {
    if (textInput.value.length === Number(dataLength)) {
      textInput.classList.add("valid")
      textInput.classList.remove("invalid")
    } else {
      textInput.classList.add("invalid")
      textInput.classList.remove("valid")
    }
 });
  
