const form = document.getElementById("myForm");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  if (name == "") {
    message.textContent = "Veuillez entrer votre nom";
  } else {
    message.textContent = "Bienvenu " + name;
  }
});

const inputType = document.getElementById("keyType");
const output = document.getElementById("output");

inputType.addEventListener("keydown", (event) => {
  output.textContent = `Vous avez appuyé sur ${event.key}`;
});
