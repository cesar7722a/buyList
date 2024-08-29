import { Trash2 } from "lucide-react";
import Logo from "../public/logo.png";
import { CardAlert } from "./components/CardAlert";
import { FormAdd } from "./components/FormAdd";
import { CardText } from "./components/CardText";

export function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-8 pb-4">
      <header className="h-10 py-12 flex items-center">
        <img src={Logo} alt="Logo Imagem" className="md:flex hidden" />
      </header>
      <div className="space-y-8">
        <CardText />
        <FormAdd />
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
        <CardAlert />
      </div>
    </div>
  );
}
