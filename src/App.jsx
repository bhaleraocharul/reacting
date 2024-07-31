import React from "react";
import MusicCard from "./Components/MusicCard";
import NavbarMusicCard from "./Components/NavbarMusicCard";
// import Card from "./Components/Card";
// import Songs from "./Components/Songs";
// import UseState from "./Components/UseState";
// import TwoImages from "./Components/TwoImages";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 ">
        <NavbarMusicCard />
        <MusicCard />
      </div>
    </>
  );
}

export default App;
