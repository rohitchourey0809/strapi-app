import React, { useState } from "react";
import Description from "./Description";

const PokemonThumbnail = ({
  id,
  name,
  image,
  type,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {
  const [show, setShow] = useState(false);

  const style = `thumb-container bg-gray-200 p-4 rounded-md shadow-md ${type}`;

  return (
    <div className={style}>
      <div className="flex items-center justify-between mb-2">
        <div className="number text-xs text-gray-600">#0{id}</div>
        <img src={image} alt={name} className="w-16 h-16" />
      </div>
      <div className="detail-wrapper">
        <h3 className="text-lg font-semibold mb-1">{name.toUpperCase()}</h3>
        <small className="text-gray-500">Type: {type}</small>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="pokeinfo px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => setShow(!show)}
        >
          {show ? "Know less..." : "Know more..."}
        </button>
      </div>
      {show && (
        <Description
          weightpok={weight}
          heightpok={height}
          pokstat1={stat1}
          pokstat2={stat2}
          pokstat3={stat3}
          pokstat4={stat4}
          pokstat5={stat5}
          pokstat6={stat6}
          posbs1={bs1}
          posbs2={bs2}
          posbs3={bs3}
          posbs4={bs4}
          posbs5={bs5}
          posbs6={bs6}
        />
      )}
    </div>
  );
};

export default PokemonThumbnail;
