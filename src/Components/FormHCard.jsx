import React from "react";

function FormHCard() {
  return (
    <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
      <div className="w-[5vw] h-[5vh] rounded-full bg-zinc-200 overflow-hidden">
        {/*  <img className="w-full h-full object-cover " src="" alt="" /> */}
      </div>

      <h1 className="mt-1 text-xl font-semibold">Harsh</h1>
      <p className="mt-2 text-center text-xs font-semibold leading-1 tracking-tight">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        a fugiat maxime.
      </p>
      <button className="px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4">
        Remove it
      </button>
    </div>
  );
}

export default FormHCard;
