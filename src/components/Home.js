import React, {useEffect, useState} from "react";
import CharacterForm from "./CharacterForm";
import CharacterContainer from "./CharacterContainer";


function Home() {

const [characters, setCharacters] = useState([]);

useEffect(() => {
   fetch('http://localhost:3000/characters')
   .then((r) => r.json())
   .then((characters) => setCharacters(characters))
}, [])

function handleAddCharacter(newCharacter) {
   return setCharacters([...characters, newCharacter])
}

function onDeleteCharacter (deletedCharacter) {
   const updatedCharacters = characters.filter((character) => character.id !== deletedCharacter.id)
   return setCharacters(updatedCharacters)
}
   return (<div className="home">
   <CharacterForm handleAddCharacter={handleAddCharacter}/>
   <CharacterContainer onDeleteCharacter={onDeleteCharacter} characters={characters}/>
   </div>
   )
}

export default Home;