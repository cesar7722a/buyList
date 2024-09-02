import { CardAlert } from "./components/CardAlert";
import { FormAdd } from "./components/FormAdd";
import { CardText } from "./components/CardText";
import { HeaderLogo } from "./components/HeaderLLogo";
import { useImmerReducer } from "use-immer";
import { ListBuy } from "./components/ListBuy";
import { useState } from "react";
import { ListProps } from "./types";
import { ReducerFormAdd } from "./components/ReducerFormAdd";

let inicialArray: ListProps[];

export function App() {
  const [lists, dispatch] = useImmerReducer(ReducerFormAdd, inicialArray);
  const [isOpentoast, setIsOpentoast] = useState<boolean>(false);

  const deletBuy = (buyId: number) => {
    dispatch({
      type: "delete",
      payload: buyId,
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
        <FormAdd dispatch={dispatch} />
        <ul className="space-y-3">
          {lists.map((list: ListProps) => (
            <ListBuy deletBuy={deletBuy} id={list.id} name={list.name} />
          ))}
        </ul>
        {isOpentoast && <CardAlert closedToast={closedToast} />}
      </div>
    </div>
  );
}
