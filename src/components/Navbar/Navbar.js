import React from "react";
import ".Navbar.css";


const styles = {
  navbarStyle: {
    background: "blue",
    justifyContent: "flex-end"
  }
};

function Navbar() {
  return (
   <nav style={styles.navbarStyle} className="navbar">
    <div className="row">
      <div className="col-3"><a href="/">Clicky Game</a></div>
      <div className="col-3">Cick an image to begin!</div>
      <div className="col-3">"Score: " | " Top score: "</div>
    </div>     
    
    </nav>
  );
}

export default Navbar;