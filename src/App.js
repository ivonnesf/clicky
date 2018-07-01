import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
import FriendCard from "./components/FriendCard"
import ClickCard from "./components/Clickcard/ClickCard";

let topTries = 0;
let wins = 0;
class App extends Component {
    
  state = {
      friends,
      wins,
      topTries,
  };

  setClicked = id => {

      const friends = this.state.friends;
      const clickedimage = friends.filter(image => image.id === id);

      if (clickedimage[0].clicked){

          wins = 0;

          for (let i = 0 ; i < friends.length ; i++){
              friends[i].clicked = false;
          }
          this.setState({ wins });
          this.setState({friends});

      } else if (wins < 11) {

          clickedimage[0].clicked = true;
          wins++;

          if (wins > topTries){
              topTries = wins;
              this.setState({ topTries });
          }

          friends.sort(function(a, b){return 0.5 - Math.random()});
          this.setState({ friends });
          this.setState({wins});
      } else {
          clickedimage[0].clicked = true;
          wins = 0;
          topTries = 12;
          this.setState({ topTries });
          
          for (let i = 0 ; i < friends.length ; i++){
              friends[i].clicked = false;
          }
          friends.sort(function(a, b){return 0.5 - Math.random()});
          this.setState({ friends });
          this.setState({wins});


      }
  };

  render() {
      return (
          <Wrapper>
              <h1 className="title">
                  Correct Guesses: {this.state.wins} 
              </h1>
              <br/>
              <h2 className="title">
                  Best Score: {this.state.topTries} 
              </h2>
              
              <h4 className="title">lets play! Click a card, dont click it twice in a row!</h4>


              {this.state.friends.map(image => (
                  <ClickCard
                      setClicked={this.setClicked}
                      id={image.id}
                      key={image.id}
                      image={image.image}
                  />
              ))}
          </Wrapper>
      );
  }
}

export default App;
