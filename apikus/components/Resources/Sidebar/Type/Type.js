import Styles from "./Type.module.css";
import Input from "../../cards/Input";
import axios from "axios";
import { useEffect, useState } from "react";

function Type({ handleChange }) {
  const [types, setTypes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await axios.get("/api/resources");
        const data = response.data.documents; 
        setTypes(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchTypes();
  }, []);

  // const uniqueTypes = [...new Set(types.map((type) => type.types))];

  return (
    <div>
      <h2 className={Styles.sidebar_title}>Types</h2>

      <div className={Styles.main}>
        <label className={Styles.sidebar_label_container}>
          <input onChange={handleChange} type="checkbox" value="all" name="test" />
          <span className={Styles.checkmark}></span>All
        </label>
        {/* {error ? (
          <p>Error: {error}</p>
        ) : (
          uniqueTypes.map((type, index) => (
            <Input
              key={index}
              handleChange={handleChange}
              className={Styles.input}
              value={type}
              title={type}
              name="test"
            />
          ))
        )} */}
      </div>
    </div>
  );
}

export default Type;

