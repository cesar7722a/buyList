export function FormAdd() {
  return (
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
  );
}
