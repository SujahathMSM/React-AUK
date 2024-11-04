import React from "react";
import Person from "./Person";

import myData from "../Data/myData";
const mainBlock = myData.map(({ name, position, city }, index) => (
  <Person name={name} position={position} city={city} key={index} />
));
const Details = () => {
  return (
    <div>
      {/* {myData?.map(({name, position, city}, index) => (
        <Person name={index} position={position} city={city} key={name} />
      ))} */}
      {mainBlock}
    </div>
  );
};

export default Details;
