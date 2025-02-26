import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementBreakAction,
  decrementSessionAction,
  incrementBreakAction,
  incrementSessionAction,
} from "../redux/actions";

function Lengthes({ id, type, time }) {
  const dispatch = useDispatch();
  const breakLength = useSelector((state) => state.clock.breakLength);
  const sessionLength = useSelector((state) => state.clock.sessionLength);
  const isPaused = useSelector((state) => state.clock.paused);

  const handleDecrement = () => {
    if (type == "Session") {
      dispatch(decrementSessionAction());
    } else if (type == "Break") {
      dispatch(decrementBreakAction());
    } else {
      console.log("Nessun tipo impostato");
    }
  };

  const handleIncrement = () => {
    if (type == "Session") {
      dispatch(incrementSessionAction());
    } else if (type == "Break") {
      dispatch(incrementBreakAction());
    } else {
      console.log("Nessun tipo impostato");
    }
  };

  useEffect(() => {
  }, [breakLength, sessionLength]);

  return (
    <>
      <div className="d-flex flex-column " id={id}>
        <h2 className="text-light mb-0 fw-normal">{type} Length</h2>
        <div className="d-flex justify-content-center text-light align-items-center gap-3">
          <i
            className="fa-solid fa-arrow-down cursor-pointer fs-3"
            id={type.toLowerCase() + "-decrement"}
            onClick={() => handleDecrement()}
          ></i>
          <p className="fs-2 fw-semibold" id={type.toLowerCase() + "-length"}>
            {time}
          </p>
          <i
            className="fa-solid fa-arrow-up cursor-pointer fs-3"
            id={type.toLowerCase() + "-increment"}
            onClick={() => handleIncrement()}
          ></i>
        </div>
      </div>
    </>
  );
}
export default Lengthes;
