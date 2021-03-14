interface ProjectAction {
  type: string;
  data: {};
}

export default (state = {}, action: ProjectAction) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return action.data;
    case "CLEAR_PROJECT":
      return {};
    default:
      return state;
  }
};
