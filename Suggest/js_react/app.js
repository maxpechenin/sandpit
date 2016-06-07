import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Form from './form'

class App extends React.Component {
  render() {
    return (
      <Header>
        <Form />
      </Header>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'));