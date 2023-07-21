import React from "react";

function Card({character}) {
    const {name, race, archetype, hp} = character;

    return <div className="card">
        
        <h4>Name: {name}<br />
        Race: {race}<br />
        Archetype: {archetype}<br />
        HP: {hp}</h4>
    </div>
}

export default Card;