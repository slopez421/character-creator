import React, {useState, useEffect} from "react";

function Archetypes() {

const [barbarian, setBarbarian] = useState([]);

useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/classes/barbarian")
    .then((r) => r.json())
    .then((barbarianData) => {
        console.log(barbarianData) 
        setBarbarian(barbarianData)})
}, [])

    return <div className="archetypes">
        <h1>Archetypes</h1>
        <h3>Barbarian:</h3>
        <p>Hit Die: D{barbarian.hit_die}</p>
        <p>{barbarian.proficiencies?.map((proficiency) => <li key={proficiency.index}>{proficiency.name}</li>)}</p>
    </div>
}

export default Archetypes;