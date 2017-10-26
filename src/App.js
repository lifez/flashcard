import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import FlashCard from './FlashCard'
import './App.css';



class App extends Component {
  state = {
    show: false,
    words: [
      {word: 'ABC', description: 'DEF'},
      {word: 'DEF', description: 'DEF'},
      {word: 'JKI', description: 'DEF'},
      {word: 'MNO', description: 'DEF'},
    ]
  }
  handleClick = () => {
    this.setState({ show: !this.state.show })
  }
  handleSwipe = () => {
    this.setState({ show: false })
  }
  render() {
    return (
        <ReactSwipe swipeOptions={{ continuous: true, callback: this.handleSwipe }}>
        {this.state.words.map((object, i) => {
          return (
            <div>
              <FlashCard
                onClick={this.handleClick}
                show={this.state.show}
                word={object.word}
                description={object.description}
              />
            </div>
          )
        })}

        </ReactSwipe>
    );
  }
}

export default (App);
