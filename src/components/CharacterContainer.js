import React from "react";

function CharacterContainer({characters}) {

return <div className="container">
    <h2>Character Container</h2>
    {characters.map((character) => {
        return <h2>{character.name}</h2>
    })}

</div>
}

export default CharacterContainer;