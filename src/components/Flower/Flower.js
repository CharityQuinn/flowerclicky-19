import React, {Component} from 'react';
import Flower1 from "../flowers.json";
import FadeIn from '../transitions/fade-in';
import FlowerPot from './flowerPot';
import ScoreDisplay from './scoredisplay';

export default class Flower extends Component {

   
    render(){
        return (
        <div className="Flower">
            <FadeIn 
                in={true}
                duration={450}
                length={'30px'}
                direction={'bottom'}
                delay={'1s'}>
                <h4> Here's a game to test your memory. Click a flower and the images will shuffle.<br/>Try not to click the same player twice or the game will start all over!</h4>
            </FadeIn>
            <FadeIn in = {true}
                duration = {500}
                direction = {'bottom'}
                delay = {'1.5s'} />
            <ScoreDisplay score = {this.state.user.score}/> 
            <FlowerPot flowers = {
                this.state.flowers
            }
                onflowersClick = {
                   this.onflowersValue
                }
            />

        </div>
        )
    };
            
};
