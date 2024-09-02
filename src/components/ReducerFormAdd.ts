import { ListProps } from "../types";

type State = ListProps[];

type Action =
  | { type: "add"; payload: ListProps }
  | { type: "delete"; payload: number }
  | { type: "erro"; payload: "type não encontrado!" };

export function ReducerFormAdd(draft: State, action: Action) {
  switch (action.type) {
    case "delete": {
      return draft.filter((t) => t.id !== action.payload);
    }
    case "add": {
      draft.push(action.payload);
      break;
    }
    default: {
      throw Error("active desconhecida " + action.payload);
    }
  }
}
