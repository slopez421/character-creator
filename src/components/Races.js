import React, {useState, useEffect} from "react";

function Races() {
const [elf, setElf] = useState([]);
const [gnome, setGnome] = useState([]);

useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/races/elf")
        .then((r) => r.json())
        .then((elfData) => {
            console.log(elfData)
            setElf(elfData)
     })
}, [])

useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/races/gnome")
    .then((r) => r.json())
    .then((gnomeData) => {
        console.log(gnomeData)
        setGnome(gnomeData)
 })
}, [])

    return <div className="races">

        <h1>Races</h1>
        <h3>Elf</h3>
        <p>Age: {elf.age}</p>
        <p>Size: {elf.size}</p>
        {elf.size_description}
        <p>Languages: {elf.language_desc}</p>

        <h3>Gnome</h3>
        <p>Age: {gnome.age}</p>
        <p>Size: {gnome.size}</p>
        {gnome.size_description}
        <p>Languages: {gnome.language_desc}</p>
    </div>
}

export default Races;