import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveAction,
  setBankingAction,
  setVolumeAction,
} from "../redux/actions";

function CustomDisplay() {
  const dispatch = useDispatch();
  const descr = useSelector((state) => state.display.description);
  const active = useSelector((state) => state.display.active);
  const banking = useSelector((state) => state.display.banking);
  const volume = useSelector((state) => state.display.volume);

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (active) dispatch(setVolumeAction(newVolume));
  };

  const handleActive = (e) => {
    let bt = e.target;
    if (bt.classList.contains("btn-success")) {
      bt.classList.remove("btn-success");
      bt.classList.add("btn-danger");
      bt.textContent = "OFF";
      dispatch(setActiveAction(false));
      dispatch(setVolumeAction(0.0));
    } else {
      bt.classList.remove("btn-danger");
      bt.classList.add("btn-success");
      bt.textContent = "ON";
      dispatch(setActiveAction(true));
      dispatch(setVolumeAction(0.5));
    }
  };

  const handleBanking = (e) => {
    let bt = e.target;
    if (bt.classList.contains("btn-success")) {
      bt.classList.remove("btn-success");
      bt.classList.add("btn-danger");
      bt.textContent = "OFF";
      dispatch(setBankingAction(false));
    } else {
      bt.classList.remove("btn-danger");
      bt.classList.add("btn-success");
      bt.textContent = "ON";
      dispatch(setBankingAction(true));
    }
  };

  useEffect(() => {}, [descr]);

  return (
    <div className="d-flex flex-column gap-5 justify-content-center align-items-center">
      <div>
        <h6 className="text-center">Power</h6>
        <button
          id="power"
          className="btn btn-success btn-toggle"
          onClick={handleActive}
        >
          {active ? "ON" : "OFF"}
        </button>
      </div>

      <div>
        <div className="bg-secondary p-2 d-flex align-items-center justify-content-center rounded">
          <p id="des" className="m-0 text-center text-black">
            {descr}
          </p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <label htmlFor="customRange1" className="form-label">
            Volume
          </label>
          <input
            type="range"
            className="form-range"
            id="customRange1"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
          />
        </div>
      </div>

      <div>
        <h6 className="text-center">Bank</h6>
        <button
          id="bank"
          className="btn btn-danger btn-toggle"
          onClick={handleBanking}
        >
          {banking ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}

export default CustomDisplay;
