import React, {useState} from "react";

function CharacterForm() {
const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    race: "",
    archetype: ""
})

function handleChange(event) {
   setFormData({[event.target.name]:event.target.value})
}

function handleSubmit(event) {
event.preventDefault();
console.log(formData)
}

    return (
        <form onSubmit={handleSubmit}>
            <label>Create A Character</label><br />
            <input type="text" name="name" value={formData.name} placeholder="Name..." onChange={handleChange}></input><br />
            <input type="number" name="hp" value={formData.hp} placeholder="HP..." onChange={handleChange}></input><br />
            <select  onChange={handleChange}>
                <option value={formData.archetype}>Archetype</option>
                <option value={formData.archetype}>Healer</option>
                <option value={formData.archetype}>Ranger</option>
                <option value={formData.archetype}>Fighter</option>
                <option value={formData.archetype}>Barbarian</option>
            </select><br />
            <select  onChange={handleChange}>
                <option value={formData.race}>Race</option>
                <option value={formData.race}>Goblin</option>
                <option value={formData.race}>Elf</option>
                <option value={formData.race}>Tiefling</option>
                <option value={formData.race}>Orc</option>
            </select><br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default CharacterForm;