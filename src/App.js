import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputText: '',
    inputChars: []
  }

  textChangedHandler = (event) => {
    const inputText = event.target.value;
    this.setState({inputText: inputText});

    let inputChars = [...this.state.inputText];
    this.setState({inputChars: inputChars});
  }

  deleteCharHandler = (index) => {
    /* const charIndex = this.state.inputText.find(c => {
      return console.log('asd')
    }); */

    const chars = [...this.state.inputText];
    chars.splice(index, 1);
    this.setState({inputChars: chars});
  }

  render() {
    let inputChars = [...this.state.inputChars]; 

    let chars = inputChars.map((char, index) => {
      return (<CharComponent char={char} click={() => this.deleteCharHandler(index)} key={index} />)
    });

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.textChangedHandler}  />
        <p>{this.state.inputText.length}</p>

        <ValidationComponent textLength={this.state.inputText.length} />
        {chars}
      </div>
    );
  }
}

export default App;
