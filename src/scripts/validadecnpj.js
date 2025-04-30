export function setValidadeCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj.length !== 14) return false;

    // Elimina CNPJs com todos os dígitos iguais
    if (/^(\d)\1+$/.test(cnpj)) return false;

    let size = cnpj.length - 2;
    let number = cnpj.substring(0, size);
    let digit = cnpj.substring(size);
    let sum = 0;
    let pos = size - 7;

    for (let i = size; i >= 1; i--) {
        sum += parseInt(number.charAt(size - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (resultado !== parseInt(digit.charAt(0))) return false;

    size += 1;
    number = cnpj.substring(0, size);
    sum = 0;
    pos = size - 7;

    for (let i = size; i >= 1; i--) {
        sum += parseInt(number.charAt(size - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return resultado === parseInt(digit.charAt(1));
}