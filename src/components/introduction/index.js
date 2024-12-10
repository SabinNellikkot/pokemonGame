import React from "react";
import "./index.scss"

const Introduction = (props) => {
    return (
        <div className="intro">
            <h1>Catch the Pokémon</h1>
            <p>In "Catch the Pokémon," random Pokémon will appear on the screen, and the player has to catch them by clicking on them. Each time a Pokémon is caught, it appears in the “Caught Pokémon” area on the screen. The player wins the game once they catch 5 Pokémon.</p>
            <button onClick={() => props.onClickStart()}>Start</button>
        </div>
    );
}

export default Introduction;