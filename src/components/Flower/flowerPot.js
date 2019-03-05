import React from 'react';

import Flower from './Flower';

const FlowerBox = (props) => {
    return(
        <div className="flower-box">
            {props.flower.map( (Flower, index) => <Flower flower={flower} index={index} onflowerClick={props.onflowerClick} key={flower.name} />)}
        </div>
    )
};

export default FlowerBox;