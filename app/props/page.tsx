import Image from "next/image";
import { Person } from "../componentes/person";
import {Card} from "../componentes/card"

export default function Props() {
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1>Usuário 1</h1>
            <Person name="Andrieli" avatar="Mist" Phone={"+55 51 6767-6767"} roles={["676767"]} address="Alguma ai"/><br/>
            <Card>
                <br/>
                <h1>Usuário 2</h1>
                <br/>
                <p> Nome: Cesar </p>
                <p> Avatar Professor </p>
                <p> Phone: 55 51 6767-6767 </p>
                <p> Roles: Programador </p>
                <p> Address: Rua matadouro de hercules </p>
            </Card>
        </div>
    );
}