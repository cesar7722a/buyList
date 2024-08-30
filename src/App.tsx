import { CardAlert } from "./components/CardAlert";
import { FormAdd } from "./components/FormAdd";
import { CardText } from "./components/CardText";
import { HeaderLogo } from "./components/HeaderLLogo";
import { useImmer } from "use-immer";
import { ListBuy } from "./components/ListBuy";
import { ListProps } from "./types";

export function App() {
  const [lists, updateLists] = useImmer<ListProps[]>([]);

  return (
    <div className="flex justify-center items-center flex-col gap-8 pb-4">
      <HeaderLogo />
      <div className="space-y-8">
        <CardText />
        <FormAdd updateListsBuy={updateLists} />
        <ul className="space-y-3">
          {lists.map((list) => (
            <ListBuy id={list.id} name={list.name} />
          ))}
        </ul>
        <CardAlert />
      </div>
    </div>
  );
}
