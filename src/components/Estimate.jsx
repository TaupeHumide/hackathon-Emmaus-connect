import "./Estimate.css";

function Estimate() {
  return (
    <div className="estimate_main_div">
      <h1 className="estimate_title">Estimation</h1>
      <button className="estimate_button">
        <img src="../../public/desktop_icon.png" alt="" />
      </button>
      <button className="estimate_button">
        <img src="../../public/tablet_icon.png" alt="" />
      </button>
      <button className="estimate_button">
        <img src="../../public/phone_icon.png" alt="" />
      </button>
    </div>
  );
}
export default Estimate;
