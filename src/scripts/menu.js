import { setGreeting } from "./greeting.js";

export function setMenu(){
document.addEventListener("DOMContentLoaded", () => {
    const pathParts = window.location.pathname.split("/");
    // console.log(pathParts);
    let basePath
    if (pathParts[1] === "index.html") {
        basePath = " "
        console.log("primeiro");
        
    } else if(pathParts[1] === "ESTEC"){
        basePath = ""
        console.log("segundo");

    } else {
        basePath = "../../"
        console.log("terceiro");

    }
    // console.log(basePath);
    const fullPath = `${basePath}src/pages/menu.html`;
    console.log("caminho completo: "+fullPath);

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