import { setGreeting } from "./greeting.js";

//const autlaPath = window.location.pathname.includes("pages") ? "../" : "src/";

export function setMenu(){
document.addEventListener("DOMContentLoaded", () => {
    const pathParts = window.location.pathname.split("/");
    console.log(pathParts);
    let basePath
    if (pathParts[1] === "index.html" || pathParts[1] === "ESTEC") {
        basePath = " "
    } else {
        basePath = "../../"
    }
    console.log(basePath);
    const fullPath = `${basePath}src/pages/menu.html`;
    console.log(fullPath);

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