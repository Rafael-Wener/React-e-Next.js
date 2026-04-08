import { peopleList } from './data/peopleList'; // Assumindo que este é o caminho correto

export default function Filter() {
  // Substitua 'Desenvolvedor' pela profissão que você quer filtrar, ou por uma variável de estado
  const pessoasFiltradas = peopleList.filter((pessoa) => pessoa.profession === 'Desenvolvedor');

  console.log(pessoasFiltradas);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {
        // Aqui mapeamos a nova lista já filtrada, e não a lista original completa
        pessoasFiltradas.map((pessoa) => (
          <div key={pessoa.id}>{pessoa.name} - {pessoa.profession}</div>
        ))
      }
    </div>
  )
}