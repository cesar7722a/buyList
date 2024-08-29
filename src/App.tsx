import { ArrowLeft } from "lucide-react";
import Logo from "../public/logo.png";

export function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-16">
      <header className="h-10 py-12 flex items-center">
        <img src={Logo} alt="Logo Imagem" className="md:flex hidden" />
      </header>
      <div className="space-y-8">
        <div className="space-y-4">
          <button className="text-[#CA3884] text-sm hover:text-[#A52C6B] flex items-center">
            <span>
              <ArrowLeft className="size-5" />
            </span>
            Voltar
          </button>
          <h2 className="font-bold text-2xl">Compras da semana</h2>
        </div>
        <form className="max-w-2xl flex gap-4">
          <input
            type="text"
            placeholder="Adicione um novo item"
            className="w-[451px] rounded-xl px-2 flex-1 py-2 bg-white border border-[#D1D5DB] hover:border-[#B9C2D0] focus:border-[#CA3884] outline-none"
          />
          <button className="bg-[#CA3884] w-40 rounded-xl text-white hover:bg-[#A52C6B]">
            Adicionar item
          </button>
        </form>
      </div>
    </div>
  );
}
