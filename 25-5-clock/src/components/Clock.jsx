import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAction } from "../redux/actions";

function Clock() {
  const stateNow = useSelector((state) => state.clock.stateNow);
  const timeNow = useSelector((state) => state.clock.currentTimer);
  const breakLength = useSelector((state) => state.clock.breakLength);
  const sessionLength = useSelector((state) => state.clock.sessionLength);

  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetAction());
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    console.log(stateNow + " " + timeNow);
  }, [stateNow, timeNow]);

  return (
    <>
      <div>
        <div className="rounded-5 border border-5 p-5 text-light border-dark fs-1">
          <p className="m-0 fs-3" id="timer-label">
            {stateNow}
          </p>
          <p id="time-left">
            {stateNow == "Session"
              ? formatTime(sessionLength * 60)
              : formatTime(breakLength * 60)}
          </p>
        </div>
        <div className="text-light d-flex justify-content-center gap-3 mt-3 fs-3">
          <i class="fa-solid fa-play cursor-pointer" id="start_stop"></i>
          <i class="fa-solid fa-pause cursor-pointer" id="stop_start"></i>
          <i
            class="fa-solid fa-arrows-rotate cursor-pointer"
            id="reset"
            onClick={() => handleReset()}
          ></i>
        </div>
      </div>
    </>
  );
}
export default Clock;
