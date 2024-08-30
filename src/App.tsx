import { CardAlert } from "./components/CardAlert";
import { FormAdd } from "./components/FormAdd";
import { CardText } from "./components/CardText";
import { HeaderLogo } from "./components/HeaderLLogo";
import { useImmer } from "use-immer";
import { ListBuy } from "./components/ListBuy";
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
            <ListBuy listId={list.id} listName={list.name} />
          ))}
        </ul>
        <CardAlert />
      </div>
    </div>
  );
}
