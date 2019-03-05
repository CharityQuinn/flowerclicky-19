import React, { Component } from 'react';
import FlowerCard from './components/FlowerCard';
import Wrapper from './components/Wrapper';
import flowers from './flowers.json';
import './App.css';

class App extends Component {
  // create state to hold onto friend list information
  state = {
    flowerList: flowers,
    pickedFlowers: []
  };

  // come up with methods to shuffle friends and update the flowerList
   shuffleFlower = flowerId => {
    // console.log("shuffle's prop " + prop);
      const updatedflowerList = this.state.flowerList
        .sort(() => 0.5 - Math.random());

    // use this.setState() to update our flowerList and trigger a rerender of the FlowerCards
     this.setState({
      flowerList: updatedflowerList
    });
  };

  flowerClick = index => {
    console.log(this.state.flower[index].value);
     this.flowerClick = this.flowerClick.bind(this);
     let pickedFlowers = this.state.chosen
       if (!this.state.flower[index].value) {
        this.setState({
          
            flower: shuffleFlower(this.state.flower.map((flower, current) => {
                return (current === index) ? {
                    ...flower,
                    value: true
                } : flower
            })),
            user: {
                ...this.state.user,
                score: this.state.user.score + 1
            }
        });

    } else {
        this.setState({
            flower: shuffleFlower(this.state.flower.map(flower => {
                return {
                    ...flower,
                    value: false
                }
            })),
            user: {
                ...this.state.user,
                score: 0
            }
        });
    };
};


  // render our UI and use .map to print FlowerCards for each friend in the FlowerList
  render() {
    // destructure flowerList from state
    const { flowerList } = this.state;

    console.log(flowerList);

    return (
      <Wrapper>
        <h1 className="title">Flowers List</h1>
        {/* Use .map to render flowerList  */}
        {flowerList.map(friend => {
          return (
            <FlowerCard
              key={flowers.id}
              image={flowers.image}
              value={flowers.value}
              shuffleFlower={this.shuffleFlower}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default App;
