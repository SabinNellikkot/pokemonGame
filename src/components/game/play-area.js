import React from "react";

const PlayArea = (props) => {
    const topValue = (Math.floor(Math.random() * 70) + 1) + '%';
    const leftValue = (Math.floor(Math.random() * 80) + 1) + '%';
    const pokemonPosition = {
        top: topValue,
        left: leftValue,
      };
    return (
        <div className="play-area">
            <img onClick={props.caught} src={props.pokemonURL} alt={props.pokemonName} style={pokemonPosition} />
        </div> 
    );
}

export default PlayArea;