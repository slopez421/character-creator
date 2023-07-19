import React from "react";
import Card from "./Card";

function CharacterContainer({characters}) {

return <div className="container">
    <h2>Character Container</h2>
    {characters.map((character) => {
        return <Card key={character.id} character={character} />
    })}

</div>
}

export default CharacterContainer;