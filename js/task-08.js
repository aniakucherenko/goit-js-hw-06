const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
   event.preventDefault();
const {
    elements: { email, password }
  } = event.currentTarget;

if (email.value === "" || password.value === ""){
 alert ("Please fill all the fields!");
}

const emailName = form.email.name;
const emailValue = email.value;
const passwordName = form.password.name;
const passwordValue = password.value;

console.log({
    emailName: emailValue,
    passwordName: passwordValue
})
event.currentTarget.reset();

}
