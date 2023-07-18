import React from "react";

function CharacterForm() {
    return (
        <form>
            <label>Create A Character</label><br />
            <input type="text" name="name" placeholder="Name..."></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CharacterForm;