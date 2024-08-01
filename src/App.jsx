import React, { useState } from "react";
import FormHCards from "./Components/FormHCards";
import Form from "./Components/Form";

// import MusicCard from "./Components/MusicCard";
// import NavbarMusicCard from "./Components/NavbarMusicCard";
// import Card from "./Components/Card";
// import Songs from "./Components/Songs";
// import UseState from "./Components/UseState";
// import TwoImages from "./Components/TwoImages";

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(() => users.filter((item, index) => index != id));
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <FormHCards handleRemove={handleRemove} users={users} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );

  // UNCOMMENT BELOW FOR NAVBAR MUSIC CARD AND MUSIC CARD
  /* const data = [
    {
      image:
        "https://images.unsplash.com/photo-1706941849633-6f7fc8c07480?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      name: "Challenger",
      artist: "Nosy Rosy",
      isAdded: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1496483353456-90997957cf99?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Fiery blaze",
      artist: "Love Dollar",
      isAdded: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1647016187004-a5c41e9635d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlJTIwY3ViZXN8ZW58MHx8MHx8fDA%3D",
      name: "Cooldown Life",
      artist: "Midnight Assignment",
      isAdded: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677474827233-f469e008f779?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVtb24lMjB0cmVlfGVufDB8fDB8fHww",
      name: "Happiness walkway",
      artist: "Right Walker",
      isAdded: false,
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, isAdded: !item.isAdded };
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 ">
        <NavbarMusicCard data={songData}/>
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songData.map((obj, index) => (
            <MusicCard
              data={obj}
              handleClick={handleClick}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
 */
}

export default App;
