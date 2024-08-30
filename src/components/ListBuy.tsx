import { Trash2 } from "lucide-react";

interface ListBuyProps {
  listId: number;
  listName: string;
}

export function ListBuy({ listId, listName }: ListBuyProps) {
  return (
    <li
      key={listId}
      className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white "
    >
      <input type="checkbox" className="accent-[#CA3884]" />
      <p className="flex-1 text-[#374151] font-medium">{listName}</p>
      <button className="p-2">
        <Trash2 className="size-5 text-[#9CA3AF]" />
      </button>
    </li>
  );
}
