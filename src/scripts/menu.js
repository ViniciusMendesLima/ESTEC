import { setGreeting } from "./greeting.js";

const autlaPath = window.location.pathname.includes("pages") ? "../" : "src/";

export function setMenu(){
document.addEventListener("DOMContentLoaded", () => {
    fetch(`${autlaPath}pages/menu.html`)
    .then(response => response.text())
    .then(data => {
        document.getElementById("menu").innerHTML = data;
        setGreeting();
    })
    .catch(error => {
        console.error("Erro ao carregar o menu:", error);
    });
  });
}