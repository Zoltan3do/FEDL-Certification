function Lengthes({ type, time }) {
  return (
    <>
      <div className="d-flex flex-column ">
        <h2 className="text-light mb-3 fw-normal">{type} Length</h2>
        <div className="d-flex justify-content-center text-light">
          <i class="fa-solid fa-arrow-down cursor-pointer fs-3"></i>
          <p>{time}</p>
          <i class="fa-solid fa-arrow-up cursor-pointer fs-3"></i>
        </div>
      </div>
    </>
  );
}
export default Lengthes;
