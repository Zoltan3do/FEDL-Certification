import "./App.css";
import CustomDisplay from "./components/CustomDisplay";
import CustomGrid from "./components/CustomGrid";

function App() {
  return (
    <>
      <div
        id="drum-machine"
        className=" container d-flex align-items-center justify-content-center vh-100 w-50 "
      >
        <div className="border d-flex flex-column p-3 border-warning border-5 bg-light">
          <div className=" d-flex ">
            <CustomGrid></CustomGrid>
            <CustomDisplay></CustomDisplay>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
