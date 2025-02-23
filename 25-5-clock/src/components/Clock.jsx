import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playPauseAction, resetAction } from "../redux/actions";
import gallo from "../assets/gallo.mp3";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

function Clock() {
  const stateNow = useSelector((state) => state.clock.stateNow);
  const breakLength = useSelector((state) => state.clock.breakLength);
  const sessionLength = useSelector((state) => state.clock.sessionLength);
  const [timeLeft, setTimeLeft] = useState(formatTime(sessionLength * 60));
  const isPaused = useSelector((state) => state.clock.paused);
  const [isReset, setIsReset] = useState(false);

  const intervalRef = useRef(null);

  const dispatch = useDispatch();

  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimeLeft(formatTime(sessionLength * 60));
    dispatch(resetAction());
  };

  function startTimer() {
    if (!isPaused) {
      let [minutes, seconds] = timeLeft.split(":").map(Number);
      let totalSeconds = minutes * 60 + seconds;

      intervalRef.current = setInterval(() => {
        totalSeconds -= 1;

        if (totalSeconds < 0) {
          document.getElementById("gallo").play();
          clearInterval(intervalRef.current);
          return;
        }

        setTimeLeft(formatTime(totalSeconds));
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }

  const handlePlay = () => {
    dispatch(playPauseAction());
  };

  useEffect(() => {
    setTimeLeft(formatTime(sessionLength * 60));
  }, [sessionLength]);

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [isPaused]);

  return (
    <>
      <div>
        <div className="rounded-5 border border-5 p-5 text-light border-dark fs-1">
          <p className="m-0 fs-3" id="timer-label">
            {stateNow}
          </p>
          <p id="time-left">{timeLeft}</p>
          <audio id="gallo" src={gallo}></audio>
        </div>
        <div className="text-light d-flex justify-content-center gap-3 mt-3 fs-3">
          <div id="start_stop" onClick={() => handlePlay()}>
            <i class="fa-solid fa-play cursor-pointer"></i>
            <i class="fa-solid fa-pause cursor-pointer"></i>
          </div>

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
