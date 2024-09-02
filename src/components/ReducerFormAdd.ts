export function ReducerFormAdd(draft, action) {
  switch (action.type) {
    case "add": {
      draft.push({
        name: action.name,
        id: action.id,
      });
    }
  }
}
