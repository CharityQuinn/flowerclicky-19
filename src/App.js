import React, {
  Component
} from 'react';
import FlowerCard from './components/FlowerCard';
import Wrapper from './components/Wrapper';
import flowers from './flowers.json';
import './App.css';

let pickedFlowers = [];
let flowerClick = "";
let updatedFlowerList = [];

class App extends Component {
  // create state to hold onto friend list information
  state = {
    flowerList: flowers,
    pickedFlowers: [],
    currentHigh: 5
  };

   flowerClick = index => {
    // Need to get the clicked picture, compare it to an array of picked pictures and see if it has been clicked 
    // If the picture has not been clicked add one to score, save the id of the picture so I know if the picture was clicked and shuffle the pictures, wait for the next click 
    console.log(this.state.flower[index].value);
    this.flowerClick = this.flowerClick.bind(this);
    flowerClick = this.state.chosen
       if (pickedFlowers.includes(index)) {
        alert("You already picked that flower, start over!");
        // reset score, re-populate icons
        let updatedflowerList = this.state.flowerList
          .sort(() => 0.5 - Math.random());
          this.setState({
            flowerList: updatedflowerList,
            score: 0,
            pickedFlowers: []
          });
      } 
      else{

      pickedFlowers.push(index);
      let currentScore = this.state.score;
      let currentHigh = this.state.highScore;
      currentScore++;
      if (currentScore > currentHigh) {
        alert("<h2>You have reached the target score. Good Job! Start again!</h2>");
      };
      let updatedFlowerList = this.state.flowerList
        .sort(() => 0.5 - Math.random());
          this.setState({
            flowerList: updatedFlowerList,
            chosen: pickedFlowers,
            score: currentScore,
            
        });
      console.log("This is the updatedFlowerList " + updatedFlowerList);
    };
  };


 

  // render our UI and use .map to print FlowerCards for each friend in the FlowerList
  render() {
    // destructure flowerList from state
    const {
      flowerList
    } = this.state;

    console.log(flowerList);
    return (
      <Wrapper >
      <h1 className = "title"> Flowers List </h1> 
      {
        flowerList.map(flowers => {
          return ( 
            <FlowerCard 
            key = {flowers.id}
            image = {flowers.image}
            value = {flowers.value}
          />
          );
        })
      };
    </Wrapper>
    )
    
  };
}
  

    export default App;