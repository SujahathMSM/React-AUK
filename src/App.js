import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Tester from "./Components/Tester";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="header">Hello Sujahath</h1>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        exercitationem ea totam quos dolor temporibus a, odio cumque repellendus
        laborum?
      </p>
      <Footer name="Sujahath" age="26" city="beruwala" job="SE" langauge="JavaScript"/>
      <Footer name="Sujahath M S" age="22" city="Signapore" job="SSE" langauge="Pyhton"/>
      <Footer name="Sujahath SMM" age="24" city="Colombo" job="ASE" langauge="Java"/>
      <Tester/>
      <Tester/>
      <Tester/>
      <Tester>
        <p>Hello, i am the child prop here</p>
      </Tester>
    </div>
  );
}

export default App;
