import "./mini-spinner.styles.scss";

const MiniSpinner = () => {
  return (
    <div className="mini-spinner-container">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default MiniSpinner;
