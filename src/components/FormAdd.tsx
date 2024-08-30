import { FormEvent, useState } from "react";

type ListProps = {
  name: string;
  id: number;
};
type FormAddProps = {
  updateListsBuy: (updater: (draft: ListProps[]) => void) => void;
};

let nextId = 10;

export function FormAdd({ updateListsBuy }: FormAddProps) {
  const [inputBuy, setInputBuy] = useState<string>();
  const AddBuy = (e: FormEvent) => {
    e.preventDefault();

    if (!inputBuy) return;

    updateListsBuy((draft) => {
      draft.push({
        name: inputBuy,
        id: nextId++,
      });
    });
    setInputBuy("");
  };
  return (
    <form onSubmit={AddBuy} className="max-w-2xl flex gap-4">
      <input
        value={inputBuy}
        type="text"
        placeholder="Adicione um novo item"
        className="w-[451px] rounded-xl px-2 flex-1 py-2 bg-white border border-[#D1D5DB] hover:border-[#B9C2D0] focus:border-[#CA3884] outline-none"
        onChange={(e) => setInputBuy(e.target.value)}
      />
      <button className="bg-[#CA3884] font-semibold w-40 rounded-xl text-white hover:bg-[#A52C6B]">
        Adicionar item
      </button>
    </form>
  );
}
