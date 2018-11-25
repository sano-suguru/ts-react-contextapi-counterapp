import * as React from 'react'
import CounterContext from '../contexts/counter'

const Counter = () => (
  <CounterContext.Consumer>
    {({ count, update }) => {
      const increment = () => update(1)
      const decrement = () => update(-1)
      return (
        <>
          <p>count: {count}</p>
          <button onClick={increment}>up</button>
          <button onClick={decrement}>down</button>
        </>
      );
    }}
  </CounterContext.Consumer>
);

export default Counter
