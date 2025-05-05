import {setValidadeCNPJ} from "./validadecnpj.js";
import {setMask} from "./mask.js"
import {setValidateSizeInput} from"./validateSizeInput.js"

const select = document.getElementById('sallerSelect');
const inputNameSaller = document.getElementById('nameSaller');
let cnpj = document.getElementById("enterprise");
let eMail = document.getElementById("mail")
const sizeValidate = document.querySelectorAll(".sizeValidate");

select.addEventListener("change", function() {
    inputNameSaller.value = this.value;
})

cnpj.addEventListener("input", () => {

    let cnpjValue = cnpj.value
    cnpj.value = setMask(cnpjValue)

    if (cnpj.value.length === 0) {
        cnpj.style.outline = "";
        cnpj.style.border = "1px solid #ccc"; // borda padrão
        return;
    }

    if (!setValidadeCNPJ(cnpj.value)) {
        console.log(setValidadeCNPJ(cnpj.value));

        campInvalid(cnpj); 
    } else {
        campValid(cnpj); 
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

function validarEmail(email) {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email)
}

setValidateSizeInput(sizeValidate)

