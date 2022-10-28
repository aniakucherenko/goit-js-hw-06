const form = document.querySelector(".login-form");


function handleSubmit (event) {
   event.preventDefault();
const {
    elements: { email, password }
  } = event.currentTarget;

if (email.value === "" || password.value === ""){
 alert ("Please fill all the fields!");
} else {

const userRegister = {};
userRegister.email = email.value;     
userRegister.password = password.value;
console.log(userRegister);
event.currentTarget.reset();
};
};

form.addEventListener("submit", handleSubmit);