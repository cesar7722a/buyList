import { CardAlert } from "./components/CardAlert";
import { FormAdd } from "./components/FormAdd";
import { CardText } from "./components/CardText";
import { HeaderLogo } from "./components/HeaderLLogo";
import { useImmer } from "use-immer";
import { ListBuy } from "./components/ListBuy";
import { ListProps } from "./types";
import { useState } from "react";

export function App() {
  const [lists, updateLists] = useImmer<ListProps[]>([]);
  const [isOpentoast, setIsOpentoast] = useState<boolean>(false);

  const deletBuy = (buyId: number) => {
    updateLists((draft) => {
      const index = draft.findIndex((a) => a.id === buyId);
      draft.splice(index, 1);
    });
    setIsOpentoast(true);
  };

  const closedToast = () => {
    setIsOpentoast(false);
  };

  return (
    <div className="flex justify-center items-center flex-col gap-8 pb-4">
      <HeaderLogo />
      <div className="space-y-8">
        <CardText />
        <FormAdd updateListsBuy={updateLists} />
        <ul className="space-y-3">
          {lists.map((list) => (
            <ListBuy deletBuy={deletBuy} id={list.id} name={list.name} />
          ))}
        </ul>
        {isOpentoast && <CardAlert closedToast={closedToast} />}
      </div>
    </div>
  );
}
