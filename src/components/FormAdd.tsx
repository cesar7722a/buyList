import { FormEvent, useState } from "react";

type FormAddProps = {
  dispatch: React.Dispatch<Action>;
};

export function FormAdd({ dispatch }: FormAddProps) {
  const [inputBuy, setInputBuy] = useState<string>();

  const AddBuy = (e: FormEvent) => {
    e.preventDefault();

    const nextItem = { name: inputBuy, id: Math.floor(Math.random() * 1000) };
    if (!inputBuy) return;
    dispatch({
      type: "add",
      payload: nextItem,
    });
    setInputBuy("");
  };

  return (
    <form
      onSubmit={AddBuy}
      className="md:w-[627px] w-[326px] flex flex-col md:flex-row gap-4"
    >
      <input
        value={inputBuy}
        type="text"
        placeholder="Adicione um novo item"
        className="rounded-xl px-2 flex-1 py-2 bg-white border border-[#D1D5DB] hover:border-[#B9C2D0] focus:border-[#CA3884] outline-none"
        onChange={(e) => setInputBuy(e.target.value)}
      />
      <button className="bg-[#CA3884] font-semibold md:w-40 rounded-xl text-white hover:bg-[#A52C6B] h-11">
        Adicionar item
      </button>
    </form>
  );
}
