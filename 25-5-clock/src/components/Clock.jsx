import { useSelector } from "react-redux";

function Clock() {
  const stateNow = useSelector((state) => state.clock.stateNow);
  const timeNow = useSelector((state) => state.clock.currentTimer);
  return (
    <>
      <div>
        <div className="rounded-circle border border-5 p-5 text-light border-dark fs-1">
          <p className="m-0 fs-3" id="timer-label">
            {stateNow}
          </p>
          <p className="fs-big" id="timer-left">
            {timeNow}
          </p>
        </div>
        <div className="text-light d-flex justify-content-center gap-3 mt-3 fs-3">
          <i class="fa-solid fa-play cursor-pointer" id="start-stop"></i>
          <i class="fa-solid fa-pause cursor-pointer" id="stop-start"></i>
          <i class="fa-solid fa-arrows-rotate cursor-pointer" id="reset"></i>
        </div>
      </div>
    </>
  );
}
export default Clock;
