import React from "react";
import Person from "./Person";

import myData from "../Data/myData";
const mainBlock = myData.map(({ name, position, city, image }, index) => (
  <Person name={name} position={position} city={city} image={image} key={index} />
));
const Details = () => {
  return (
    <div className="main_block_container">
      {/* {myData?.map(({name, position, city}, index) => (
        <Person name={index} position={position} city={city} key={name} />
      ))} */}
      {mainBlock}
    </div>
  );
};

export default Details;
