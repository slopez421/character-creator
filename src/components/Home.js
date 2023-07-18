import React from "react";
import CharacterForm from "./CharacterForm";
import CharacterContainer from "./CharacterContainer";

function Home() {
   return (<div className="home">
   <p>Home</p>
   <CharacterForm />
   <CharacterContainer />
   </div>
   )
}

export default Home;