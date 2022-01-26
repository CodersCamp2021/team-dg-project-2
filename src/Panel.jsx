import './Panel.css';

const Panel = () => {
  return (
    <div className="panel-container">
      <h2>This is our Panel</h2>
      <label htmlFor="Name">
        State your name:
        <input type="text" name="Name" id="Name" />
      </label>
    </div>
  );
};

export default Panel;
