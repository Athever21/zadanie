interface TestAction {
  type: string,
  data: {}
}

export default (state="test", action: TestAction) => {
  switch(action.type) {
    default:
      return state;
  }
}