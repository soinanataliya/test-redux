import React from 'react';
import { connect } from 'react-redux';
import { asyncIncrementCount, incrementCount, decrementCount } from '../store/actions/counterActions'

const Counter = ({
  count, asyncIncrementCountAction, incrementCountAction, decrementCountAction,
}) => (
  <>
    <p>{count}</p>
    <button onClick={asyncIncrementCountAction}>async +1</button>
    <button onClick={incrementCountAction}>+1</button>
    <button onClick={decrementCountAction}>-1</button>
  </>
)

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = {
  asyncIncrementCountAction: asyncIncrementCount,
  incrementCountAction: incrementCount,
  decrementCountAction: decrementCount,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
