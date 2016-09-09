function defaultReducer (state = [], action) {
  switch(action.type) {
    case 'UPDATE_DEFAULT':
      return [
        {
            item1: action.item1,
            item2: action.item2,
            item3: action.item3
        }
      ];
    default:
      return state;
  }
}

export default defaultReducer;
