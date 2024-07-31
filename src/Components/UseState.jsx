import React, { useState } from "react";

function UseState() {
  const [val, setVal] = useState({ name: "harsh", age: 25, isBanned: false });
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6]);
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6]);
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="p-10">
      <h1>name: {val.name}</h1>
      <h2>banned: {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 ${
          val.isBanned ? "bg-red-600" : "bg-blue-600"
        } rounded-full mt-3 text-sm text-zinc-100 mb-5`}
      >
        Change banned state
      </button>
      <div>
        {" "}
        {count.map((item) => (
          <h1>{item}</h1>
        ))}
        <button
          onClick={() =>
            setCount(() => {
              return count.filter((item, index) => index != count.length - 1);
            })
          }
          className="bg-green-500 px-3 py-1 rounded-full mt-5 text-sm text-zinc-100"
        >
          Remove last index
        </button>
        <div>
          {number.map((item) => (
            <h1>{item}</h1>
          ))}
          <button
            onClick={() =>
              setNumber(() => number.filter((item, index) => index != 2))
            }
            className="bg-pink-300 px-3 py-1 rounded-full text-sm mt-5"
          >
            Remove 2nd index item
          </button>
          <div>
            {num.map((item) => (
              <h1>{item}</h1>
            ))}
            <button
              onClick={() =>
                setNum(() => num.filter((item, index) => item % 2 != 0))
              }
              className="bg-orange-300 px-3 py-1 rounded-full text-sm mt-5"
            >
              Remove nums which are divided by 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseState;
