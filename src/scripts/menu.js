import { setGreeting } from "./greeting.js";

//const autlaPath = window.location.pathname.includes("pages") ? "../" : "src/";

export function setMenu(){
document.addEventListener("DOMContentLoaded", () => {
    const pathParts = window.location.pathname.split("/");
    const basePath = pathParts[1] ? `/${pathParts[1]}` : "";
    const fullPath = `${basePath}/src/pages/menu.html`;

    fetch(fullPath)
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