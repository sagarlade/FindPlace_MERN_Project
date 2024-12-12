import Category from "./Category/Category";
import Type from "./Type/Type";
import styles from "./Sidebar.module.css";

const Sidebar = ({ handleChange, handleInputChange, query }) => {
  return (
    <>
      <section className={styles.sidebar_main}>
        <div className={styles.sidebar}>
        <h1 className={styles.head_h1}>Resources</h1>

          <div className={styles.logo_container}>
            <lable for="serach item" className={styles.label}>
              Search Item
            </lable>
            <input
              className={styles.search_input}
              type="text"
              onChange={handleInputChange}
              value={query}
              placeholder="Enter your search report."
            />
          </div>
          <hr className={styles.hr} />
          <Category handleChange={handleChange} />
          <Type handleChange={handleChange} />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
