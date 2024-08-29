import { ArrowLeft } from "lucide-react";

export function CardText() {
  return (
    <div className="space-y-4">
      <button className="text-[#CA3884] text-sm hover:text-[#A52C6B] flex items-center">
        <ArrowLeft className="size-5" />
        Voltar
      </button>
      <h2 className="font-bold text-2xl">Compras da semana</h2>
    </div>
  );
}
