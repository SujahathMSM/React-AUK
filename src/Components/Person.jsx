import React from "react";

const Person = ({ name, position, city, image }) => {
  return (
    <div>
      <img
        src={
          image
            ? `${image}`
            : "https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt=""
        width={250}
        height={200}
      />
      <div>
        <p className="name">Name: {name}</p>
        <p>Position: {position}</p>
        <p>City: {city}</p>
      </div>
    </div>
  );
};

export default Person;
