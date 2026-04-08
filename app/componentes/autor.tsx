import { ReactNode } from "react"

type Props = {
    frase: String;
    autor?: String; //? = parametro Opcional
}

export const Autor = ({ frase, autor }: Props) => {
    if (autor) {
        return(
            <>
            frase:{frase}
            Autor:{autor}
            </>
        )
    }
    return(
        <>
        frase:{frase}
        Autor: Não econtrado
        </>
    )
}