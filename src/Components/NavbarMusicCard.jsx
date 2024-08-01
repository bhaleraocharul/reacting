import React from "react";

function NavbarMusicCard({ data }) {
  return (
    <div className="w-full px-4 py-3 flex justify-between items-center">
      <h3>Orange</h3>
      <div className="flex p-2 px-4 bg-orange-600 text-white rounded-md text-xs gap-3">
        <h3>Favourites</h3>
        <h4>{data.filter((item) => item.isAdded).length}</h4>
      </div>
    </div>
  );
}

export default NavbarMusicCard;
