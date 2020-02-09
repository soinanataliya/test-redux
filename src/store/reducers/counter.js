const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  const { type } = action;
  const { count } = state;
  switch (type) {
    case 'COUNT_INCREMENT':
      return { ...state, count: count + 1 }
    case 'COUNT_DECREMENT':
      return { ...state, count: count - 1 }
    default: 
      return state;
  }
}

export default counterReducer;