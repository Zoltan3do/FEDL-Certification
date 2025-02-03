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
  const banking = useSelector((state) => state.display.banking);
  const [activePad, setActivePad] = useState(null);
  const keyMap = banking ? keyMapBank1 : keyMapBank2;
  const volume = useSelector((state) => state.display.volume);

  const handleSelection = (id) => {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Elemento ${id} non trovato`);
      return;
    }

    const audioElement = element.querySelector(".clip");

    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.volume = volume;
      audioElement
        .play()
        .then(() => console.log(`Riproduzione di ${id} avviata con successo`))
        .catch((error) =>
          console.error(`Errore nella riproduzione di ${id}:`, error)
        );
    } else {
      console.error(`Elemento audio non trovato in ${id}`);
    }

    dispatch(changeAction({ elementId: id, description: id }));
    setActivePad(id);

    setTimeout(() => {
      setActivePad(null);
    }, 2000);
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
  }, [keyMap, volume]);

  return (
    <div
      className="container justify-content-center align-items-center d-flex"
    >
      <div className="row row-cols-4 gap-2">
        <>
          {Object.entries(keyMap).map(([key, id]) => (
            <div
              key={id}
              className={`drum-pad cursor-pointer d-flex justify-content-center align-items-center rounded fw-bold ${
                activePad === id ? "bg-warning" : "bg-secondary"
              }`}
              id={id}
              onClick={() => {
                handleSelection(id);
              }}
            >
              {key}
              <audio
                className="clip"
                id={key}
                src={`./tracks/${id}.wav`}
              ></audio>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

export default CustomGrid;
