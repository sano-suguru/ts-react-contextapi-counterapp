import * as React from 'react';
import './App.css';
import Counter from './components/counter';
import CounterContext from './contexts/counter'
import logo from './logo.svg';

class App extends React.Component<{}, { count: number }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      count: 0
    }
  }

  public update = (amount: number) => this.setState({
    count: this.state.count + amount
  })

  public render() {
    return (
      <CounterContext.Provider value={{
        count: this.state.count,
        update: this.update
      }}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React Counter App</h1>
          </header>
          <p className="App-intro">
            This is a sample of react application using Context-API and TypeScript.
          </p>
          <Counter />
        </div>
      </CounterContext.Provider>
    );
  }
}

export default App;
