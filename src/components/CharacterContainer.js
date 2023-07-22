import React from "react";
import Card from "./Card";

function CharacterContainer({characters, onDeleteCharacter}) {

return <div className="container">
    <h2>Your Adventuring Party</h2>
    {characters.map((character) => {
        return <Card onDeleteCharacter={onDeleteCharacter} key={character.id} character={character} />
    })}

</div>
}

export default CharacterContainer;