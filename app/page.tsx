import { Square } from "./components/caixa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-900 text-white text-3xl font-bold gap-10 p-10">

      <div className="bg-cyan-500 border-3 border-cyan-500 rounded-full text-white w-50 text-center h-50 flex items-center justify-center self-start shadow-lg shadow-cyan-500/50 brightness-125">
        1
      </div>

      <div className="bg-red-500 border-3 border-red-500 rounded text-white w-100 text-center h-50 flex items-center justify-center shadow-lg shadow-red-500/50 brightness-125">
        2
      </div>

      <div className="bg-green-500 border-3 border-green-500 rounded-4xl text-white w-120 text-center h-60 flex items-center justify-center self-end shadow-xl/30 shadow-green-500/50 brightness-125">
        3
      </div>

      <Square/>
    </div>
  );
}

/*-- COMENTARIOS --*/

/*--  USADOS PARA QUANDO NAO TER VISUAL '<></>'   --*/