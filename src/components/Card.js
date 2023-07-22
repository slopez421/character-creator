import React from "react";
import { BsTrash3 } from "react-icons/bs";

function Card({character, onDeleteCharacter}) {
    const {name, race, archetype, hp} = character;

    function handleClick() {
        fetch(`http://localhost:3000/characters/${character.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteCharacter(character))
    }

    return <div className="card">
        
        <h4>Name: {name}<br />
        Race: {race}<br />
        Archetype: {archetype}<br />
        HP: {hp}</h4>
        <button onClick={handleClick}><BsTrash3 /></button>
    </div>
}

export default Card;