import "./App.css";
import Clock from "./components/Clock";
import Lengthes from "./components/Lengthes";

function App() {
  return (
    <>
      <div id="parent">
        <p>25 + 5 Clock</p>
        <div>
          <Lengthes></Lengthes>
          <Lengthes></Lengthes>
        </div>
        <Clock></Clock>
      </div>
    </>
  );
}

export default App;
