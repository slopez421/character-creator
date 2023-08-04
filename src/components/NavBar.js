import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/"> Home </NavLink> 
            |<NavLink to="/races"> Races </NavLink>
            |<NavLink to="/archetypes"> Archetypes </NavLink>
        </nav>
    )
}

export default NavBar