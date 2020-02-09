import fakeFetch from "../../helpers";

const incrementCount = () => dispatch => (
  dispatch({ type: 'COUNT_INCREMENT' })
)

const decrementCount = () => dispatch => (
  dispatch({ type: 'COUNT_DECREMENT' })
)

const asyncIncrementCount = () => dispatch => (
  fakeFetch().then(() => dispatch({ type: 'COUNT_INCREMENT' }))
)

export {
  asyncIncrementCount,
  incrementCount,
  decrementCount
}