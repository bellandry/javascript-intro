const image = document.getElementById("myImage");

image.addEventListener("mouseover", () => {
  image.classList.toggle("zoomIn");
});

image.addEventListener("mouseout", () => {
  image.classList.toggle("zoomOut");
});
