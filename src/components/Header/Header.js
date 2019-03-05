import React from "react";
import ".header.css";
import FadeIn from "../Transition/fade-in";

const Header = () => { return(
    <header className="App-header">
        <FadeIn in={true} duration={600} length={'50px'} direction={'bottom'} >
            <h1>Memory Game-Flower Edition</h1>
        </FadeIn>
    </header>
)};

export default Header;
