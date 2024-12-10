import React, { useEffect, useState } from "react";
import Introduction from "./introduction";
import Game from "./game";
import GameOver from "./game-over";
import { url } from "../container/utils";

const Pokemon = () => {
const [pokemonURL, setPokemonURL] = useState();
const [pokemonName, setPokemonName] = useState();
const [count, setCount] = useState(0);
const [caughtData, setCaughtData] = useState([]);
const [gameStart, setGameStart] = useState(false);
const [gameEnd, setGameEnd] = useState(false);

const caught = (e) => {
    if(caughtData. length < 4) {
        getPokeData();
    }
    else if(caughtData. length == 4) {
        setGameStart(false);
        setGameEnd(true);
    }
    if(caughtData.length > 0) {
        setCaughtData([...caughtData, {name: pokemonName, url: pokemonURL}])
    }
    else {
        setCaughtData([{name: pokemonName, url: pokemonURL}])
    }
    setCount(count + 1); 
}

const getPokeData = () => {
  let id = Math.floor(Math.random() * 200) + 1;
  const finalUrl = url + id;
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
        setPokemonName(data.name);
        setPokemonURL(data.sprites.other.dream_world.front_default)
    });
};

const onClickStart = () => {
    setGameStart(true);
    getPokeData();
}

const onClickReStart = () => {
    setCaughtData([]);
    setCount(0);
    setGameStart(true);
    getPokeData();
}

    return (
        <div className="app-container">
            {gameStart ? <Game
                pokemonURL={pokemonURL}
                caught={() => caught()}
                count={count}
                caughtData={caughtData}
            /> : gameEnd ? 
            <GameOver
                caughtData={caughtData}
                onClickReStart={onClickReStart}
            /> : 
            <Introduction 
                onClickStart = {() => onClickStart()} 
            /> 
            }
            <div className="clear"></div>
        </div>
    );
}

export default Pokemon;