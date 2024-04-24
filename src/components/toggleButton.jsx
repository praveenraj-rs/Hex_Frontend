import "./toggleButton.css";

const ToggleButton = ({ label, clickHandle, checking }) => {
  return (
    <div className="container">
      <p>{label}</p>
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          onClick={clickHandle}
          name={label}
          id={label}
          checked={checking}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
