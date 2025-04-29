import {setValidadeCNPJ} from "./validadecnpj.js";

const select = document.getElementById('sallerSelect');
const inputNameSaller = document.getElementById('nameSaller');
let cnpj = document.getElementById("enterprise");

select.addEventListener("change", function() {
    inputNameSaller.value = this.value;
})


cnpj.addEventListener("input", (e) => {

    let cnpjValue = cnpj.value;

    if (!setValidadeCNPJ(cnpjValue)) {
        e.preventDefault(); // Impede o envio do formulário
        console.log("CNPJ inválido. Por favor, verifique os dados.");
        cnpj.focus();
    }
});

