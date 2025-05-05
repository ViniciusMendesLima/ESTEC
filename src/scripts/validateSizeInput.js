export function setValidateSizeInput(sizeValidate){
    sizeValidate.forEach((input) => {
        if(input.tagName === 'INPUT') {
            input.addEventListener("blur",()=>{
                if(input.value.trim().length <= 3){
                    alert(`O texto informado no campo é inválido. Mínimo de 3 letras.`)
                    input.value = ""
                }
            })
        }
    })
}