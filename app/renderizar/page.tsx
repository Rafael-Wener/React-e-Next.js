import { Autor } from "../componentes/autor";
import { AutorTernario } from "../componentes/autorTernario";

export default function Renderizar() {
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            Método Braçal:<br/>
            <Autor frase="Frasse teste" autor="Tu, eu, nois"/>
            <br/>
            Método Ternário:<br/>
            <AutorTernario frase="Frase teste" autor=""/>

        </div>
    );
}