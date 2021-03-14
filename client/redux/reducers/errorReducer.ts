interface ErrorAction {
  type: string
  data: string
}

export default (state="", action: ErrorAction) => {
  switch(action.type) {
    case "ERROR":
      return action.data;
    case "CLEAR_ERROR":
      return "";
    default:
      return state;
  }
}