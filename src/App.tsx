import { Trash2 } from "lucide-react";
import { CardAlert } from "./components/CardAlert";
import { FormAdd } from "./components/FormAdd";
import { CardText } from "./components/CardText";
import { HeaderLogo } from "./components/HeaderLLogo";
import { useImmer } from "use-immer";
interface ListProps {
  name: string;
  id: number;
}
export function App() {
  const [lists, updateLists] = useImmer<ListProps[]>([
    { name: "Pão de forma", id: 1 },
    { name: "Café preto", id: 2 },
    { name: "Suco de laranja", id: 3 },
    { name: "Bolacha", id: 4 },
    { name: "Farinha de trigo", id: 5 },
  ]);
  return (
    <div className="flex justify-center items-center flex-col gap-8 pb-4">
      <HeaderLogo />
      <div className="space-y-8">
        <CardText />
        <FormAdd />
        <ul className="space-y-3">
          {lists.map((list) => (
            <li
              key={list.id}
              className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white "
            >
              <input type="checkbox" className="accent-[#CA3884]" />
              <p className="flex-1 text-[#374151] font-medium">{list.name}</p>
              <span className="p-2">
                <Trash2 className="size-5 text-[#9CA3AF]" />
              </span>
            </li>
          ))}
        </ul>
        <CardAlert />
      </div>
    </div>
  );
}
