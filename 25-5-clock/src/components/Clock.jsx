function Clock() {
  return (
    <>
      <div >
        <div className="rounded-4 border border-3">
          <p>State</p>
          <p>Current:Time</p>
        </div>
        <div>
          <i class="fa-solid fa-play"></i>
          <i class="fa-solid fa-pause"></i>
          <i class="fa-solid fa-arrows-rotate"></i>
        </div>
      </div>
    </>
  );
}
export default Clock;
