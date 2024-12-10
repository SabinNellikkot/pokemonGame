import React, { useEffect, useState } from "react";
import CaughtPokemon from "../common/caught-pokemon";
import "./index.scss"

const GameHeader = (props) => {
    return (
        <div className="game-header">
            <h2>You have caught {props.caughtData.length} pokemon</h2>
            <CaughtPokemon caughtData={props.caughtData} />            
        </div>
    );
}

export default GameHeader;