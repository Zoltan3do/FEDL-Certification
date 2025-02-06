import { useEffect } from "react";
import { useSelector } from "react-redux";

function Gianni() {
  const total = useSelector((state) => state.calculator.total);
  useEffect(() => {}, [total]);
  return (
    <>
      <div className="container my-5">
        <div className="row border border-dark border-5">
          <div id="display" className="text-end bg-black border">
            <div className="col-12 text-warning "></div>
            <div className="col-12 text-light fs-1 fst-italic">
              {total}
            </div>
          </div>
          <div
            className="col-6 text-center bg-danger text-light fw-bold border ni-over"
            id="clear"
          >
            AC
          </div>
          <div
            className="col-3 text-center bg-secondary text-light fw-bold border ni-over"
            id="divide"
          >
            /
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over"
            id="multiply"
          >
            X
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over"
            id="seven"
          >
            7
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over"
            id="eight"
          >
            8
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over"
            id="nine"
          >
            9
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over"
            id="subtract"
          >
            -
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over"
            id="four"
          >
            4
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over"
            id="five"
          >
            5
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over"
            id="six"
          >
            6
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over"
            id="add"
          >
            +
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over"
            id="one"
          >
            1
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over"
            id="two"
          >
            2
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over"
            id="three"
          >
            3
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over"
            id="decimal"
          >
            .
          </div>
          <div
            className="col-6 text-center text-light fw-bold bg-dark border number-over"
            id="zero"
          >
            0
          </div>
          <div
            className="col-6 text-center text-light fw-bold bg-primary border ni-over"
            id="equals"
          >
            =
          </div>
        </div>
      </div>
    </>
  );
}
export default Gianni;
