function Lengthes({ id, type, time }) {
  return (
    <>
      <div className="d-flex flex-column " id={id}>
        <h2 className="text-light mb-0 fw-normal">{type} Length</h2>
        <div className="d-flex justify-content-center text-light align-items-center gap-3">
          <i
            class="fa-solid fa-arrow-down cursor-pointer fs-3"
            id={type.toLowerCase() + "-decrement"}
          ></i>
          <p className="fs-2 fw-semibold" id={type.toLowerCase() + "-length"}>
            {time}
          </p>
          <i
            class="fa-solid fa-arrow-up cursor-pointer fs-3"
            id={type.toLowerCase() + "-increment"}
          ></i>
        </div>
      </div>
    </>
  );
}
export default Lengthes;
