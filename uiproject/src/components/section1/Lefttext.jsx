import React from "react";
import Herotext from "./Herotext";
import Arrow from "./Arrow";
const Lefttext = () => {
  return (
    <div className=" h-full w-100 px-5 py-8 flex flex-col justify-between">
      <Herotext />
      <Arrow />
    </div>
  );
};

export default Lefttext;
