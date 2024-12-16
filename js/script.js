const yearNode = document.getElementById("year");
const currentYear = new Date().getFullYear();
const classicCard = document.getElementById("classic");
const selfCard = document.getElementById("self");
const eriksonCard = document.getElementById("erikson");
const skrCard = document.getElementById("skr");

classicCard.addEventListener("click", function () {
  window.location.href = "classic.html";
});

selfCard.addEventListener("click", function () {
  window.location.href = "samogipnoz.html";
});

eriksonCard.addEventListener("click", function () {
  window.location.href = "eriksonovsky.html";
});

skrCard.addEventListener("click", function () {
  window.location.href = "skritni.html";
});

yearNode.innerText = currentYear;
