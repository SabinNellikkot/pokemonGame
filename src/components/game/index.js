import React from "react";
import GameHeader from "./game-header";
import PlayArea from "./play-area";
import "./index.scss"

const Game = (props) => {
    return (
        <div className="pokemon-game">
                <GameHeader 
                    count={props.count}
                    caughtData={props.caughtData}
                />
                <PlayArea
                    pokemonURL={props.pokemonURL}
                    caught={() => props.caught()}
                    count={props.count}
                />
            </div>
    );
}

export default Game;