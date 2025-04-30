import {setValidadeCNPJ} from "./validadecnpj.js";
import {setMask} from "./mask.js"

const select = document.getElementById('sallerSelect');
const inputNameSaller = document.getElementById('nameSaller');
let cnpj = document.getElementById("enterprise");
let eMail = document.getElementById("mail")

select.addEventListener("change", function() {
    inputNameSaller.value = this.value;
})

cnpj.addEventListener("input", () => {

    let cnpjValue = cnpj.value
    cnpj.value = setMask(cnpjValue)

    let onlyNumbers = cnpj.value.replace(/[^\d]+/g, '');

    if (onlyNumbers.length === 0) {
        cnpj.style.outline = "";
        cnpj.style.border = "1px solid #ccc"; // borda padrão
        return;
    }

    if (!setValidadeCNPJ(cnpj.value)) {
        console.log(setValidadeCNPJ(cnpj.value));
        // mask(cnpjValue);
        campInvalid(cnpj); // mostra erro enquanto digita
    } else {
        // mask(cnpjValue);
        campValid(cnpj); // válido
    }
});

eMail.addEventListener("input", () => {
    if(!validarEmail(eMail.value)){
        campInvalid(eMail);
    }else{
        campValid(eMail);
    }
 
});

function campValid(input) {
    input.style.outline = "none";
    input.style.border = "2px solid green";
}

function campInvalid(input) {
    input.style.outline = "none";
    input.style.border = "2px solid red";
}

// function mask(cnpjValue) {
//     cnpj.value = cnpjValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
// }

function validarEmail(email) {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email)
}


