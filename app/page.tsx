import Image from "next/image";
import { Person } from "./componentes/person";
import { Card } from "./componentes/card";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-900 font-sans">
      <div className="border rounded-lg bg-gray-800">
        <div className="m-8 text-gray-300">
       <h1>Usuário 1</h1>
        <Person name="Rafael" avatar="Guruguru12412" Phone={"+55 51 8158-1540"} roles={["233444555566666777777888888899999999"]} address="Rua Acre Bairro Ana nery"/><br/>
        <Card>
        <br/>
     <h1>Usuário 2</h1>
    <p> Nome: Vini </p>
    <p> Avatar Vcljunges </p>
    <p> Phone: 55 51 99577-1396 </p>
    <p> Roles: Programador </p>
    <p> Address: Rua Adolfo Warner </p>
      </Card>
        </div>
      </div>
    </div>
  );
}
