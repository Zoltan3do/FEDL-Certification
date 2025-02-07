import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAction } from "../redux/actions";

function Gianni() {
  const current_number = useSelector(
    (state) => state.calculator.current_number
  );
  const current_expression = useSelector(
    (state) => state.calculator.currentExpression
  );

  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(changeAction(event.target.textContent));
  };

  useEffect(() => {
    console.log("current_expression:", current_expression);
  }, [current_expression, current_number]);
  return (
    <>
      <div className="container my-5">
        <div className="row border border-dark border-5">
          <div id="display" className="text-end bg-black border">
            <div className="col-12 text-warning no-copy fs-2 fst-italic">
              {current_expression}
            </div>
            <div className="col-12 text-light fs-1 fst-italic no-copy">
              {current_number}
            </div>
          </div>
          <div
            className="col-6 text-center bg-danger text-light fw-bold border ni-over no-copy"
            id="clear"
          >
            AC
          </div>
          <div
            className="col-3 text-center bg-secondary text-light fw-bold border ni-over no-copy"
            id="divide"
            onClick={handleChange}
          >
            /
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over no-copy"
            id="multiply"
            onClick={handleChange}
          >
            X
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="seven"
            onClick={handleChange}
          >
            7
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="eight"
            onClick={handleChange}
          >
            8
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="nine"
            onClick={handleChange}
          >
            9
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over no-copy"
            id="subtract"
            onClick={handleChange}
          >
            -
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="four"
            onClick={handleChange}
          >
            4
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="five"
            onClick={handleChange}
          >
            5
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="six"
            onClick={handleChange}
          >
            6
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over no-copy"
            id="add"
            onClick={handleChange}
          >
            +
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="one"
            onClick={handleChange}
          >
            1
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="two"
            onClick={handleChange}
          >
            2
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="three"
            onClick={handleChange}
          >
            3
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over no-copy"
            id="decimal"
            onClick={handleChange}
          >
            .
          </div>
          <div
            className="col-6 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="zero"
            onClick={handleChange}
          >
            0
          </div>
          <div
            className="col-6 text-center text-light fw-bold bg-primary border ni-over no-copy"
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
