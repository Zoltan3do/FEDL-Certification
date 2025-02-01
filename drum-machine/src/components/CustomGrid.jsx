import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAction } from "../redux/actions";

const keyMapBank1 = {
  Q: "chord-1",
  W: "chord-2",
  E: "chord-3",
  A: "shaker",
  S: "open-hh",
  D: "closed-hh",
  Z: "punchy-kick",
  X: "side-stick",
  C: "snare",
};

const keyMapBank2 = {
  Q: "heater-1",
  W: "heater-2",
  E: "heater-3",
  A: "heater-4",
  S: "clap",
  D: "open-hh",
  Z: "kick-n-hat",
  X: "kick",
  C: "closed-hh",
};

function CustomGrid() {
  const dispatch = useDispatch();
  const idSelected = useSelector((state) => state.display.elementId);
  const active = useSelector((state) => state.display.active);
  const banking = useSelector((state) => state.display.banking);
  const [activePad, setActivePad] = useState(null);
  const keyMap = banking ? keyMapBank1 : keyMapBank2;

  const handleSelection = (id) => {
    const element = document.getElementById(id);
    if (!element) return; 

    const audioElement = element.querySelector(".clip");
    const elementId = audioElement ? audioElement.id : null;
    dispatch(changeAction({ elementId, description: id }));
    setActivePad(id);
    setTimeout(() => {
      setActivePad(null);
    }, 300);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      if (keyMap[key]) {
        handleSelection(keyMap[key]);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [keyMap]);

  return (
    <div id="display" className="container justify-content-center align-items-center d-flex">
      <div className="row row-cols-4 gap-2">
        {banking ? (
          <>
            {Object.entries(keyMap).map(([key, id]) => (
              <div
                key={id}
                className={`drum-pad cursor-pointer d-flex justify-content-center align-items-center rounded fw-bold ${
                  activePad === id ? "bg-warning" : "bg-secondary"
                }`}
                id={id}
                onClick={() => handleSelection(id)}
              >
                {key}
                <audio className="clip" id={key}></audio>
              </div>
            ))}
          </>
        ) : (
          <>
            <div
              className={`drum-pad cursor-pointer d-flex justify-content-center align-items-center rounded fw-bold ${
                activePad === "heater-1" ? "bg-warning" : "bg-secondary"
              }`}
              id="heater-1"
              onClick={() => handleSelection("heater-1")}
            >
              Q<audio className="clip" id="Q"></audio>
            </div>
            <div
              className={`drum-pad cursor-pointer d-flex justify-content-center align-items-center rounded fw-bold ${
                activePad === "heater-2" ? "bg-warning" : "bg-secondary"
              }`}
              id="heater-2"
              onClick={() => handleSelection("heater-2")}
            >
              W<audio className="clip" id="W"></audio>
            </div>
            <div
              className={`drum-pad cursor-pointer d-flex justify-content-center align-items-center rounded fw-bold ${
                activePad === "heater-3" ? "bg-warning" : "bg-secondary"
              }`}
              id="heater-3"
              onClick={() => handleSelection("heater-3")}
            >
              E<audio className="clip" id="E"></audio>
            </div>
            <div
              className={`drum-pad cursor-pointer d-flex justify-content-center align-items-center rounded fw-bold ${
                activePad === "heater-4" ? "bg-warning" : "bg-secondary"
              }`}
              id="heater-4"
              onClick={() => handleSelection("heater-4")}
            >
              A<audio className="clip" id="A"></audio>
            </div>
            <div
              className={`drum-pad cursor-pointer d-flex justify-content-center align-items-center rounded fw-bold ${
                activePad === "clap" ? "bg-warning" : "bg-secondary"
              }`}
              id="clap"
              onClick={() => handleSelection("clap")}
            >
              S<audio className="clip" id="S"></audio>
            </div>
            <div
              className={`drum-pad cursor-pointer d-flex justify-content-center align-items-center rounded fw-bold ${
                activePad === "open-hh" ? "bg-warning" : "bg-secondary"
              }`}
              id="open-hh"
              onClick={() => handleSelection("open-hh")}
            >
              D<audio className="clip" id="D"></audio>
            </div>
            <div
              className={`drum-pad cursor-pointer d-flex justify-content-center align-items-center rounded fw-bold ${
                activePad === "kick-n-hat" ? "bg-warning" : "bg-secondary"
              }`}
              id="kick-n-hat"
              onClick={() => handleSelection("kick-n-hat")}
            >
              Z<audio className="clip" id="Z"></audio>
            </div>
            <div
              className={`drum-pad cursor-pointer d-flex justify-content-center align-items-center rounded fw-bold ${
                activePad === "kick" ? "bg-warning" : "bg-secondary"
              }`}
              id="kick"
              onClick={() => handleSelection("kick")}
            >
              X<audio className="clip" id="X"></audio>
            </div>
            <div
              className={`drum-pad cursor-pointer d-flex justify-content-center align-items-center rounded fw-bold ${
                activePad === "closed-hh" ? "bg-warning" : "bg-secondary"
              }`}
              id="closed-hh"
              onClick={() => handleSelection("closed-hh")}
            >
              C<audio className="clip" id="C"></audio>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CustomGrid;
