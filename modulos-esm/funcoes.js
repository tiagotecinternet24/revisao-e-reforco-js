'use strict';

export const converterMaiuscula = texto => texto.toUpperCase();

export const converterMinuscula = texto => texto.toLowerCase();

export const formatarMoeda = valor => {
    return valor.toLocaleString(
        "ptBR", {
            style: "currency",
            currency: "BRL"
        }
    )
};

// export { converterMaiuscula, converterMinuscula, formatarMoeda }