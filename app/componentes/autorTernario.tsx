import React from "react";

type Props = {
    frase: String;
    autor?: String; //? = parametro Opcional
}

export const AutorTernario = ({ frase, autor }: Props) => {
    return (
        <>
            frase: {frase}<br/>
            Autor: 
            {autor ? autor : "Não encontrado"}
        </>
    )
}
