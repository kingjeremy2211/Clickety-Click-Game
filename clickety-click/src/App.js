import React, { Component }  from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Characters from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

// shuffle function
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {

  state = {
    characters,
    score: 0,
    topScore: 0,
    clickedCharacters: []
  };

  clickedImage = id => {
    // make state of the empty array a let to be updated
    let clickedCharacters = this.state.clickedCharacters;
    let score = this.state.score;
    let topScore = this.state.topScore;

    // if the clicked image has been clicked
    if (clickedCharacters.indexOf(id) === -1) {
      // push into the array 
      clickedCharacters.push(id);
      console.log(clickedCharacters);
      // score function
      this.handleIncrement();
      // shuffle after each click
      this.imageShuffle();
    } else if (this.state.score === 12) {
      alert("You win! You clicked each and every office character once! Great job!")
      this.setState({
        score: 0,
        clickedCharacters: []
      });
    } else {
      this.setState({
        score: 0,
        clickedCharacters: []
      });
      console.log("duplicate")
      alert("Oops! You clicked the same person twice, start over")
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      })
    } 
  }

  // increase this.state.score by 1
  handleIncrement = () => {
    // updates components state
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle images
  imageShuffle = () => {
    this.setState({ characters: shuffle(characters) })
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <Wrapper>
          {this.state.characters.map(character => (
            <Characters 
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
