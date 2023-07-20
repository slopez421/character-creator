import React, {useState, useEffect} from "react";

function Races() {
const [elf, setElf] = useState([]);
const [gnome, setGnome] = useState([]);
const [halfOrc, setHalfOrc] = useState([]);
const [tiefling, setTiefling] = useState([]);

useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/races/elf")
        .then((r) => r.json())
        .then((elfData) => {
            setElf(elfData)
     })
}, [])

useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/races/gnome")
    .then((r) => r.json())
    .then((gnomeData) => {
        setGnome(gnomeData)
 })
}, [])

useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/races/half-orc")
    .then((r) => r.json())
    .then((halfOrcData) => {
        setHalfOrc(halfOrcData)
 })
}, [])

useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/races/tiefling")
    .then((r) => r.json())
    .then((tieflingData) => {
        setTiefling(tieflingData)
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

        <h3>Half-Orc</h3>
        <p>Age: {halfOrc.age}</p>
        <p>Size: {halfOrc.size}</p>
        {halfOrc.size_description}
        <p>Languages: {halfOrc.language_desc}</p>

        <h3>Tiefling</h3>
        <p>Age: {tiefling.age}</p>
        <p>Size: {tiefling.size}</p>
        {tiefling.size_description}
        <p>Languages: {tiefling.language_desc}</p>


    </div>
}

export default Races;