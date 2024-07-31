import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea magnam enim!",
      inStock: true,
    },

    {
      image:
        "https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Objects",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea magnam enim!",
      inStock: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea magnam enim!",
      inStock: false,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-300">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              src={elem.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-5">{elem.description}</p>
            <button
              className={`px-3 py-1 ${
                elem.inStock ? "bg-blue-600" : "bg-red-600"
              } text-xs rounded mt-5 text-zinc-100`}
            >
              {elem.inStock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
