import { peopleList } from "../app/data/people.list";

export default function filter() {

    const profissao = peopleList.filter((pessoa) => pessoa.profession === 'Desenvolvedor');

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-gray-900 font-sans">
            <div className="border rounded-lg bg-gray-800">
                <div className="m-8">
                    <div className="flex flex-col flex-1 items-center justify-center font-sans m-8 text-gray-300">
                        {
                            // Aqui mapeamos a nova lista já filtrada, e não a lista original completa
                            profissao.map((pessoa) => (
                                <div key={pessoa.id}>{pessoa.name} - {pessoa.profession}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
