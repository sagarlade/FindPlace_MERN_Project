const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="checkbox" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color, marginRight: 10 }}></span>
      {title}
    </label>
  );
};

export default Input;
