// import { useState } from "react";
import PropTypes from "prop-types";
function Buttons({ previous, next }) {
  //   const [click, setClick] = useState([]);
  return (
    <div className="buttons">
      <button onClick={previous} className="button-previous">
        précédent
      </button>
      <button onClick={next} className="button-next">
        suivant
      </button>
    </div>
  );
}
Buttons.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};
export default Buttons;
