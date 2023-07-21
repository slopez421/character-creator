import React, {useState} from "react";

function CharacterForm({handleAddCharacter}) {


const [race, setRace] = useState("Race");
const [archetype, setArchetype] = useState("Archetype");

const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    race: race,
    archetype: archetype
})

function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
   setFormData({...formData, 
    [name]:value,
    race: race,
    archetype: archetype})
}

function handleSubmit(event) {
event.preventDefault();

fetch("http://localhost:3000/characters", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(formData)
})
.then((r) => r.json())
.then((newCharacter) => handleAddCharacter(newCharacter))
}

    return (
        <form onSubmit={handleSubmit}>
            <label>Create A Character</label><br />
            <label>Is your character a... </label>
            <select value={archetype} onChange={(e) => setArchetype(e.target.value)}>
                <option value="Archetype">Archetype</option>
                <option value="Cleric">Cleric</option>
                <option value="Ranger">Ranger</option>
                <option value="Fighter">Fighter</option>
                <option value="Barbarian">Barbarian</option>
            </select><br />
            <label>Is your character a...</label><select value={race} onChange={(e) => setRace(e.target.value)}>
                <option value="Race">Race</option>
                <option value="Gnome">Gnome</option>
                <option value="Elf">Elf</option>
                <option value="Tiefling">Tiefling</option>
                <option value="Half-Orc">Half-Orc</option>
            </select><br />
            <label>My name is ... </label><input type="text" name="name" value={formData.name} placeholder="Name..." onChange={handleChange}></input><br />
            <label>My HP is ... </label><input type="number" name="hp" value={formData.hp} placeholder="HP..." onChange={handleChange}></input><br />
    
            <button type="submit">Submit</button>
        </form>
    )
}

export default CharacterForm;