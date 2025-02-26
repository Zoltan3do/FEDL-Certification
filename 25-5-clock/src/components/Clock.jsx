import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStateAction,
  playPauseAction,
  resetAction,
} from "../redux/actions";
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
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    dispatch(resetAction());
  };

  function startTimer() {
    if (!isPaused) {
      let [minutes, seconds] = timeLeft.split(":").map(Number);
      let totalSeconds = minutes * 60 + seconds;

      intervalRef.current = setInterval(() => {
        totalSeconds -= 1;
        if (totalSeconds < 0) {
          dispatch(changeStateAction());
          let newState = stateNow == "Session" ? "Break" : "Session";
          if (newState == "Session") {
            setTimeLeft(formatTime(sessionLength * 60));
          } else if (newState == "Break") {
            setTimeLeft(formatTime(breakLength * 60));
          }
          document.getElementById("beep").volume = 0.03;
          document.getElementById("beep").play();
          [minutes, seconds] = timeLeft.split(":").map(Number);
          totalSeconds =
            newState == "Session" ? sessionLength * 60 : breakLength * 60;
          clearInterval(intervalRef.current);
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
    if (stateNow == "Session") {
      setTimeLeft(formatTime(sessionLength * 60));
    } else if (stateNow == "Break") {
      setTimeLeft(formatTime(breakLength * 60));
    }
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
  }, [isPaused, stateNow]);

  return (
    <>
      <div>
        <div className="rounded-5 border border-5 p-5 text-light border-dark fs-1 d-flex flex-column alignt-items-center justify-content-center">
          <p className="m-0 fs-3" id="timer-label">
            {stateNow}
          </p>
          <p id="time-left">{timeLeft}</p>
          <audio id="beep" src={gallo}></audio>
        </div>
        <div className="text-light d-flex justify-content-center gap-5 mt-3 fs-3">
          <div
            id="start_stop"
            onClick={() => handlePlay()}
            className="d-flex gap-1 cursor-pointer"
          >
            <i className="fa-solid fa-play "></i>
            <i className="fa-solid fa-pause "></i>
          </div>

          <i
            className="fa-solid fa-arrows-rotate cursor-pointer"
            id="reset"
            onClick={() => handleReset()}
          ></i>
        </div>
      </div>
    </>
  );
}
export default Clock;
