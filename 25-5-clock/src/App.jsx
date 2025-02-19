import { useSelector } from "react-redux";
import "./App.css";
import Clock from "./components/Clock";
import Lengthes from "./components/Lengthes";

function App() {
  const breakLength = useSelector((state) => state.clock.breakLength);
  const sessionLength = useSelector((state) => state.clock.sessionLength)

  return (
    <>
      <div
        id="parent"
        className="d-flex flex-column justify-content-center align-items-center p-5"
      >
        <p className="text-light fw-bold fs-1">25 + 5 Clock</p>
        <div className="d-flex gap-5 mb-0">
          <Lengthes type={"Break"} time={breakLength} id={"break-label"}></Lengthes>
          <Lengthes type={"Session"} time={sessionLength} id={"session-label"}></Lengthes>
        </div>
        <Clock></Clock>
      </div>
    </>
  );
}

export default App;
