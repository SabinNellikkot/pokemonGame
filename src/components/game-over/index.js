import React from "react";
import CaughtPokemon from "../common/caught-pokemon";
import "./index.scss"

const GameOver = (props) => {
    return (
        <div className="game-over">
            <h1>You Won!</h1>
            <h2>You have caught {props.caughtData.length} pokemons</h2>
            <CaughtPokemon caughtData={props.caughtData} />
            <button onClick={() => props.onClickReStart()}>Restart</button>
        </div>

    );
}

export default GameOver;