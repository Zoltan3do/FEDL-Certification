import "./App.css";
import Clock from "./components/Clock";
import Lengthes from "./components/Lengthes";

function App() {
  return (
    <>
      <div id="parent" className="d-flex flex-column justify-content-center align-items-center p-5">
        <p className="text-light fw-bold fs-1">25 + 5 Clock</p>
        <div className="d-flex gap-5">
          <Lengthes></Lengthes>
          <Lengthes></Lengthes>
        </div>
        <Clock></Clock>
      </div>
    </>
  );
}

export default App;
