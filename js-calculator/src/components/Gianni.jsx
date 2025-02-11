import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAction,
  clearAction,
  equalsAction,
  numberAction,
} from "../redux/actions";

function Gianni() {
  const current_number = useSelector(
    (state) => state.calculator.current_number
  );
  const current_expression = useSelector(
    (state) => state.calculator.currentExpression
  );

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeAction(event.target.textContent));
  };

  const handleChangeCurrent = (event) => {
    dispatch(numberAction(event.target.textContent));
  };

  const handleEquals = () => {
    dispatch(equalsAction());
  };

  useEffect(() => {
    console.log("current_expression:", current_expression);
  }, [current_expression, current_number]);

  return (
    <>
      <div className="container my-5">
        <div className="row border border-dark border-5">
          <div className="text-end bg-black border">
            <div className="col-12 text-warning no-copy fs-2 fst-italic">
              {current_expression}
            </div>
            <div
              className="col-12 text-light fs-1 fst-italic no-copy"
              id="display"
            >
              {current_number}
            </div>
          </div>
          <div
            className="col-6 text-center bg-danger text-light fw-bold border ni-over no-copy"
            id="clear"
            onClick={() => dispatch(clearAction())}
          >
            AC
          </div>
          <div
            className="col-3 text-center bg-secondary text-light fw-bold border ni-over no-copy"
            id="divide"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            /
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over no-copy"
            id="multiply"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            *
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="seven"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            7
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="eight"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            8
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="nine"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            9
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over no-copy"
            id="subtract"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            -
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="four"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            4
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="five"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            5
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="six"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            6
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over no-copy"
            id="add"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            +
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="one"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            1
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="two"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            2
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="three"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            3
          </div>
          <div
            className="col-3 text-center text-light fw-bold bg-secondary border ni-over no-copy"
            id="decimal"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            .
          </div>
          <div
            className="col-6 text-center text-light fw-bold bg-dark border number-over no-copy"
            id="zero"
            onClick={(event) => {
              handleChange(event);
              handleChangeCurrent(event);
            }}
          >
            0
          </div>
          <div
            className="col-6 text-center text-light fw-bold bg-primary border ni-over no-copy"
            id="equals"
            onClick={handleEquals}
          >
            =
          </div>
        </div>
      </div>
    </>
  );
}
export default Gianni;
