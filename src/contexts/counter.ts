import { createContext } from 'react'

const CounterContext = createContext({
  count: 0,
  update: (amount: number): void => {
    throw new Error('CounterContext.update not implemented')
  }
})
export default CounterContext
