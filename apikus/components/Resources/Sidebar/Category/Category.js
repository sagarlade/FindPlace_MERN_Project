
import Styles from "./Category.module.css";
import Input from "../../cards/Input";
import axios from "axios";
import { useEffect, useState } from "react";

function Category({ handleChange }) {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3001/assets/resources");
        const data = response.data; // Access the 'data' property
        console.log(data); 
        setCategories(data || []); // Ensure categories is always an array
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCategories();
  }, []);

  // Extract unique categories safely
  const uniqueCategories = categories?.length
    ? [...new Set(categories.map((category) => category.categories))]
    : [];

  return (
    <div>
      <h2 className={Styles.sidebar_title}>Category</h2>
      <div className={Styles.main}>
        <label className={Styles.sidebar_label_container}>
          <input onChange={handleChange} type="checkbox" value="all" name="test" />
          <span className={Styles.checkmark}></span>All
        </label>
        {error ? (
          <p>Error: {error}</p>
        ) : uniqueCategories.length > 0 ? (
          uniqueCategories.map((category, index) => (
            <Input
              key={index}
              handleChange={handleChange}
              className={Styles.input}
              value={category}
              title={category} 
              name="test"
            />
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
}

export default Category;