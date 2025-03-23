import { Link } from "react-router-dom";
import "./missing.css";

const Missing = () => {
  return (
    <div className="missing">
      <div className="borderBox">
        <h1>Oops!</h1>
        <p>Page Not Found</p>
      </div>
      <div className="box2">
        <Link to="/">Visit Our Homepage</Link>
      </div>
    </div>
  );
};

export default Missing;
