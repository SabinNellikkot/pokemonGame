import React from "react";
import "./index.scss"

const CaughtPokemon = (props) => {
    return (
        <div className="caught-wrapper">
        {props.caughtData ? props.caughtData.map((item) => {
            return <div className="caught-pokemon">
                <img src={item.url} alt={item.name} />
                <p>{item.name}</p>
            </div>
        }): null}
        </div>
    );
}

export default CaughtPokemon;