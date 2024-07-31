import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function TwoImages() {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden">
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover`}
          src="https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <span
          onClick={() => setVal(() => !val)}
          className="w-8 h-8 absolute flex items-center justify-center rounded-full bg-[#dadada8b] bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]"
        >
          <FaLongArrowAltRight size={".9em"} />
        </span>
      </div>
    </div>
  );
}

export default TwoImages;
