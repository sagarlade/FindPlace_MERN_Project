import Sidebar from "../Sidebar/Sidebar";
import { useState, useEffect, useCallback } from "react";
import styles from "./Product.module.css";
import axios from "axios";
import filteredData from "./filterData";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "http://localhost:3001/assets/resources";

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiUrl);

      if (response.data && Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        setError("Unexpected data format.");
      }
    } catch (error) {
      setError("Error fetching data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category!== value)
      );
    }
  };


  const results = filteredData(products, selectedCategories, query);

  const filteredCount = results.length;

  return (
    <>
      <div className={styles.product_h}>
        <Sidebar
          handleChange={handleChange}
          query={query}
          handleInputChange={handleInputChange}
        />
        <section className={styles.main_p}>
          <section className={styles.result_card}>
            {loading ? (
              <h1 className={styles.h1}>Loading...</h1>
            ) : error ? (
              <h1 className={styles.h1}>{error}</h1>
            ) : (
              <h1 className={styles.h1}>
                {filteredCount} Result{filteredCount !== 1 ? "s" : ""}
              </h1>
            )}
          </section>
          <section className={styles.card_container}>{results}</section>
        </section>
      </div>
    </>
  );
};

export default Products;
// import Sidebar from "../Sidebar/Sidebar";
// import { useState, useEffect, useCallback } from "react";
// import styles from "./Product.module.css";
// import axios from "axios";
// import filteredData from "./filterData";

// const Products = () => {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [query, setQuery] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const apiUrl = "http://localhost:3001/assets/resources"; // Ensure this is correct

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(apiUrl);
//       console.log('API Response:', response.data); // Log the response

//       if (response.data && Array.isArray(response.data)) {
//         setProducts(response.data);
//       } else {
//         setError("Unexpected data format.");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error); // Log the error for debugging
//       setError("Error fetching data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   }, [apiUrl]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleChange = (event) => {
//     const value = event.target.value;
//     const checked = event.target.checked;

//     if (checked) {
//       setSelectedCategories([...selectedCategories, value]);
//     } else {
//       setSelectedCategories(
//         selectedCategories.filter((category) => category !== value)
//       );
//     }
//   };

//   const results = filteredData(products, selectedCategories, query);
//   const filteredCount = results.length;

//   return (
//     <>
//       <div className={styles.product_h}>
//         <Sidebar
//           handleChange={handleChange}
//           query={query}
//           handleInputChange={handleInputChange}
//         />
//         <section className={styles.main_p}>
//           <section className={styles.result_card}>
//             {loading ? (
//               <h1 className={styles.h1}>Loading...</h1>
//             ) : error ? (
//               <h1 className={styles.h1}>{error}</h1>
//             ) : (
//               <h1 className={styles.h1}>
//                 {filteredCount} Result{filteredCount !== 1 ? "s" : ""}
//               </h1>
//             )}
//           </section>
//           <section className={styles.card_container}>
//             {results.map((product, index) => (
//               <div key={index} className={styles.card}>
//                 <h2>{product.title}</h2>
//                 <p>{product.header}</p>
//                 <p>{product.categories}</p>
//                 <a href={product.linkToDocument} target="_blank" rel="noopener noreferrer">
                 
//                 </a>
//                 <img src={product.previewImageUrl} alt={product.title} />
//               </div>
//             ))}
//           </section>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Products;