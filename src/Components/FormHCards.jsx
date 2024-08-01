import React from "react";
import FormHCard from "./FormHCard";

function FormHCards({ users, handleRemove }) {
  return (
    <div className="w-full max-h-96 overflow-auto p-4 flex justify-content gap-4 flex-wrap">
      {users.map((item, index) => {
        return (
          <FormHCard
            handleRemove={handleRemove}
            id={index}
            key={index}
            user={item}
          />
        );
      })}
    </div>
  );
}

export default FormHCards;
