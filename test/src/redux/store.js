const initialState = {
  count: 0,
};

const store = createStore(reducer, initialState, compose);
