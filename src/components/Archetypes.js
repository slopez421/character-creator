import React, {useState, useEffect} from "react";

function Archetypes() {

const [barbarian, setBarbarian] = useState([]);
const [cleric, setCleric] = useState([]);
const [ranger, setRanger] = useState([]);
const [fighter, setFighter] = useState([]);

useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/classes/barbarian")
    .then((r) => r.json())
    .then((barbarianData) => {
        setBarbarian(barbarianData)})
}, [])

useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/classes/cleric")
    .then((r) => r.json())
    .then((clericData) => {
        setCleric(clericData)})
}, [])

useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/classes/ranger")
    .then((r) => r.json())
    .then((rangerData) => setRanger(rangerData))
}, [])

useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/classes/fighter")
    .then((r) => r.json())
    .then((fighterData) => setFighter(fighterData))
}, [])

    return <div className="archetypes">
        <h1>Archetypes</h1>
        <h3>Barbarian:</h3>
        <p>For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.</p>
        <p>Hit Die: D{barbarian.hit_die}</p>
        <p>{barbarian.proficiencies?.map((proficiency) => <li key={proficiency.index}>{proficiency.name}</li>)}</p>

        <h3>Cleric</h3>
        <p>Hit Die: D{cleric.hit_die}</p>
        <p>Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.</p>
        <p>{cleric.proficiencies?.map((proficiency) => <li key={proficiency.index}>{proficiency.name}</li>)}</p>

        
        <h3>Ranger</h3>
        <p>Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.

</p>
        <p>Hit Die: D{ranger.hit_die}</p>
        <p>{ranger.proficiencies?.map((proficiency) => <li key={proficiency.index}>{proficiency.name}</li>)}</p>

        
        <h3>Fighter</h3>
        <p>Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face.</p>
        <p>Hit Die: D{fighter.hit_die}</p>
        <p>{fighter.proficiencies?.map((proficiency) => <li key={proficiency.index}>{proficiency.name}</li>)}</p>
    </div>
}

export default Archetypes;