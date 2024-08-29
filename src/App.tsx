import { ArrowLeft, CircleAlert, Trash2, X } from "lucide-react";
import Logo from "../public/logo.png";

export function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-8 pb-4">
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
          <button className="bg-[#CA3884] font-semibold w-40 rounded-xl text-white hover:bg-[#A52C6B]">
            Adicionar item
          </button>
        </form>
        <div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white ">
              <input
                type="checkbox"
                className="rounded-md border border-[#F4F5FB] text-white hover:border-[#B9C2D0] selection:text-[#C3884]"
              />
              <p className="flex-1 text-[#374151] font-medium">Pão de forma</p>
              <span className="p-2">
                <Trash2 className="size-5 text-[#9CA3AF]" />
              </span>
            </li>

            <li className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white ">
              <input
                type="checkbox"
                className="rounded-md border border-[#F4F5FB] text-white hover:border-[#B9C2D0] selection:text-[#C3884]"
              />
              <p className="flex-1 text-[#374151] font-medium">Café Preto</p>
              <span className="p-2">
                <Trash2 className="size-5 text-[#9CA3AF]" />
              </span>
            </li>

            <li className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white ">
              <input
                type="checkbox"
                className="rounded-md border border-[#F4F5FB] text-white hover:border-[#B9C2D0] selection:text-[#C3884]"
              />
              <p className="flex-1 text-[#374151] font-medium">
                Suco de laranja
              </p>
              <span className="p-2">
                <Trash2 className="size-5 text-[#9CA3AF]" />
              </span>
            </li>

            <li className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white ">
              <input
                type="checkbox"
                className="rounded-md border border-[#F4F5FB] text-white hover:border-[#B9C2D0] selection:text-[#C3884]"
              />
              <p className="flex-1 text-[#374151] font-medium">Bolacha</p>
              <span className="p-2">
                <Trash2 className="size-5 text-[#9CA3AF]" />
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-xl py-2 bg-[#C93847]">
          <span className="p-2">
            <CircleAlert className="text-white size-5" />
          </span>
          <p className="flex-1 font-semibold text-white">
            O item foi removido da lista
          </p>
          <button className="p-2">
            <X className="text-white size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
