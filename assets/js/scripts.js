const messageElement = document.getElementById("message");
console.log(messageElement.textContent);

const firstElement = document.querySelector("#item");
const allElements = document.querySelectorAll(".item");

console.log(firstElement.textContent);
console.log(allElements.length);

const itemsByClasse = document.getElementsByClassName("item");
console.log("element par classe: ", itemsByClasse.length);

const itemsByTag = document.getElementsByTagName("p");
console.log("les balises p: ", itemsByTag.length);

const message1 = document.getElementById("message");
message1.innerText = "Salut! je suis le nouveau message";
message1.textContent = "Salut!";

const container = document.getElementById("container");
container.innerHTML = "<h1>Salut les gens</h1>";

const button = document.getElementById("myBtn");
button.style.backgroundColor = "red";
button.style.color = "white";

const message3 = document.getElementById("message3");

button.addEventListener("click", () => {
  message3.classList.toggle("evident");
});

const myList = document.getElementById("myList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  const newElement = document.createElement("li");
  newElement.textContent = "Nouvel élement";
  myList.appendChild(newElement);
});

const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", () => {
  const firstElement = myList.querySelector("li");
  myList.removeChild(firstElement);
});

const myImage = document.getElementById("myImage");
const changeImageBtn = document.getElementById("changeImage");

changeImageBtn.addEventListener("click", () => {
  myImage.setAttribute("src", "./assets/medias/image2.jpg");
  myImage.setAttribute("alt", "Ma dexième image dynamique");
});
