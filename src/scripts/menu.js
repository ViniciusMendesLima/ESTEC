import { setGreeting } from "./greeting.js";

export function setMenu() {
    console.log("entrou no menu");
    
  document.addEventListener("DOMContentLoaded", () => {
    const isLocal = location.hostname === "127.0.0.1" || location.hostname === "localhost";
    console.log(isLocal);
    
    // Caminho base conforme ambiente
    const basePath = isLocal ? "/src/pages/menu.html" : "https://viniciusmendeslima.github.io/ESTEC/src/pages/menu.html";

    fetch(basePath)
      .then(response => {
        if (!response.ok) throw new Error("Erro ao buscar menu: " + response.status);
        return response.text();
      })
      .then(data => {
        document.getElementById("menu").innerHTML = data;
        setGreeting();
      })
      .catch(error => {
        console.error("Erro ao carregar o menu:", error);
      });
  });
}


// import { setGreeting } from "./greeting.js";

// export function setMenu(){
// document.addEventListener("DOMContentLoaded", () => {
//     const pathParts = window.location.pathname.split("/");
//      console.log(pathParts);
//     let basePath
//     if (pathParts[1] === "index.html") {
//         basePath = " "
//          console.log("primeiro");
        
//     } else if(pathParts[1] === "ESTEC"){
//         basePath = ""
//          console.log("segundo");

//     } else {
//         basePath = "https://viniciusmendeslima.github.io/ESTEC/"
//          console.log("terceiro");

//     }
//     // console.log(basePath);
//     const fullPath = `${basePath}src/pages/menu.html`;
//      console.log("caminho completo: "+fullPath);

//     fetch(fullPath)
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById("menu").innerHTML = data;
//         setGreeting();
//     })
//     .catch(error => {
//         console.error("Erro ao carregar o menu:", error);
//     });
//   });
// }