import React from "react";

function Songs() {
  const [banned, setBanned] = React.useState(false);

  const data = [
    {
      name: "Mahiye Ve",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptas repellat provident?",
    },
    {
      name: "Hai Junoon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptas repellat provident?",
    },
  ];

  const handleClickDownload = () => {
    alert("Download initiated");
  };

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center">
      {data.map((elem, index) => (
        <div key={index} className="song w-80 px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="font-semibold text-xl">{elem.name}</h3>
          <p className="text-xs mt-3">{elem.description}</p>
          <button
            onClick={handleClickDownload}
            className="px-2 py-1 bg-blue-600 text-xs font-semibold text-zinc-100 rounded mt-5"
          >
            Download now
          </button>
          <h4 className="mt-2">{banned.toString()}</h4>
          <button
            onClick={() => setBanned(!banned)}
            className="bg-yellow-500 text-sm px-2 py-1 rounded mt-2"
          >
            Ban karo
          </button>
        </div>
      ))}
    </div>
  );
}

export default Songs;
