import { useState } from "react";
import "./App.css";
// import Details from "./Components/Details";
import myData from "./Data/myData";
import Person from "./Components/Person";

function App() {
  // const [name, setName] = useState("Sujahath M Siddeek");
  const [myDataState, setMyDataState] = useState(myData);

  const [myVar, setMyVar] = useState({
    name: "Saiyaf M Siddeek",
    position: "Software Engineer",
    city: "Kolkata",
    image:
      "https://images.pexels.com/photos/6964161/pexels-photo-6964161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  const handlePress = () => {
    //NOTE: Using Object Destructuring
    setMyVar({ ...myVar, name: "Saiyaf Siddeek" });
    setMyDataState([...myDataState, myVar]);
    console.log(myVar.name);
  };

  const [name, setName] = useState("");

  console.log(name);

  return (
    <div className="App">
      <h1 className="hello">Hello Software Engineers</h1>
      <div className="main_block_container">
        {myDataState.map(({ name, position, city, image }, index) => (
          <Person
            name={name}
            position={position}
            city={city}
            image={image}
            key={index + Math.random()}
          />
        ))}
      </div>

      <div className="inputField">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name here"
          onChange={(e) => {
            e.preventDefault()
            setName(e.target.value)
          }}
        />
      </div>

      <h3 className="author">Author: {name}</h3>
      <br />
      <br />
      <button
        style={{
          fontSize: "16px",
          border: "2px solid red",
          padding: "7px 12px",
        }}
        onClick={handlePress}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
