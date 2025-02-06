import { useEffect } from "react";
import { useSelector } from "react-redux";

function Gianni() {
  const total = useSelector((state) => state.calculator.total);
  useEffect(() => {}, [total]);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-end bg-black text-light">{total}</div>
          <div className="col-6 text-center bg-danger text-light fw-bold">
            AC
          </div>
          <div className="col-3 text-center bg-secondary text-light fw-bold">
            /
          </div>
          <div className="col-3 text-center text-light fw-bold bg-tertiary">
            X
          </div>
          <div className="col-3 text-center text-light fw-bold  bg-tertiary">
            7
          </div>
          <div className="col-3 text-center text-light fw-bold">8</div>
          <div className="col-3 text-center text-light fw-bold">9</div>
          <div className="col-3 text-center text-light fw-bold">-</div>
          <div className="col-3 text-center text-light fw-bold">4</div>
          <div className="col-3 text-center text-light fw-bold">5</div>
          <div className="col-3 text-center text-light fw-bold">6</div>
          <div className="col-3 text-center text-light fw-bold">+</div>
          <div className="col-3 text-center text-light fw-bold">1</div>
          <div className="col-3 text-center text-light fw-bold">2</div>
          <div className="col-3 text-center text-light fw-bold">3</div>
          <div className="col-3 text-center text-light fw-bold">.</div>
          <div className="col-6 text-center text-light fw-bold">0</div>
          <div className="col-6 text-center text-light fw-bold">=</div>
        </div>
      </div>
    </>
  );
}
export default Gianni;
