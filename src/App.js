import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      todos: [],
      text: ""
    };

  }
  handleClick = () => {
    //console.log("Clicked", this)
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  handleChange = (event) => {
    //console.log("Clicked", this)
    this.setState({
      text: event.target.value
    })
  }


  handleSubmit = () => {
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: ""
    })
  }

  delete = (index) => {
    let objectCopy = [...this.state.todos]
    objectCopy.splice(index, 1)
    this.setState({ todos: [...objectCopy] })
  }

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}> Add Todo </button>

        <h3>{this.state.isClicked === true ? "Clicked" : "Not Clicked"} </h3>
        <button onClick={this.handleClick}> Click Me </button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <li key={index}>
              {todo}
              <button onClick={() => this.delete(index)}>Delete</button>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;






