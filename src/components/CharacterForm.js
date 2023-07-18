import React from "react";

function CharacterForm() {
    return (
        <form>
            <label>Create A Character</label><br />
            <input type="text" name="name" placeholder="Name..."></input><br />
            <input type="number" name="hp" placeholder="HP..."></input><br />
            <select>
                <option>Archetype</option>
                <option>Healer</option>
                <option>Ranger</option>
                <option>Fighter</option>
                <option>Barbarian</option>
            </select><br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default CharacterForm;