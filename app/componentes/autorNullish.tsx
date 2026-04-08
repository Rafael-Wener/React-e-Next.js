import React from "react";
type Props = {
    frase: String;
    autor?: String; //? = parametro Opcional
}

export const AutorNullish = ({ frase, autor }: Props) => {
    return(
        <>
        frase: {frase}<br/>
        Autor:
        {autor ?? "Não encontrado"}
        </>
    )
}
