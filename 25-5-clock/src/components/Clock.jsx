function Clock() {
  return (
    <>
      <div className="p-4">
        <div className="rounded-5 border border-5 p-3 text-light border-dark fs-1">
          <p className="m-0 fs-3">State</p>
          <p>Current:Time</p>
        </div>
        <div className="text-light d-flex justify-content-center gap-3 mt-3 fs-3">
          <i class="fa-solid fa-play cursor-pointer"></i>
          <i class="fa-solid fa-pause cursor-pointer"></i>
          <i class="fa-solid fa-arrows-rotate cursor-pointer"></i>
        </div>
      </div>
    </>
  );
}
export default Clock;
