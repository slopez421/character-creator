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

   return (<div className="home">
   <CharacterForm handleAddCharacter={handleAddCharacter}/>
   <CharacterContainer characters={characters}/>
   </div>
   )
}

export default Home;