import Card from "../cards/Card";
const filteredData = (products, selectedCategories, query) => {
  let filteredProducts = products;
  // Filter by query if present
  if (query) {
    filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        product.types.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  // Filter by category if selected
  if (selectedCategories.length > 0) {
    const types = [...new Set(products.map((product) => product.types))];

    const categories = [
      ...new Set(products.map((product) => product.categories))
    ];
    const selectedTypes = types.filter((type) =>
      selectedCategories.includes(type)
    );
    const selectedCategoriesFilter = categories.filter((category) =>
      selectedCategories.includes(category)
    );
    

    if (
      selectedCategories.includes("all") &&
      selectedCategories.includes("types") &&
      selectedCategories.includes("categories")
    ) {
      filteredProducts = products;
    } else if (selectedCategories.includes("all")) {
      filteredProducts = products;
    } else if (
      selectedTypes.length > 0 &&
      selectedCategoriesFilter.length === 0
    ) {
      filteredProducts = filteredProducts.filter((product) => {
        return selectedTypes.includes(product.types);
      });
    } else if (
      selectedTypes.length > 0 &&
      selectedCategoriesFilter.length > 0
    ) {
      filteredProducts = filteredProducts.filter((product) => {
        return (
          selectedTypes.includes(product.types) &&
          selectedCategoriesFilter.some(
            (category) => product.categories === category
          )
        );
      });
    } else if (
      selectedCategories.includes("types") &&
      selectedCategories.length > 0
    ) {
      filteredProducts = filteredProducts.filter((product) => {
        return selectedCategories.some((category) => {
          return product.types === category;
        });
      });
    } else if (
      selectedCategories.includes("categories") &&
      selectedCategories.length > 0
    ) {
      filteredProducts = filteredProducts.filter((product) => {
        return selectedCategories.some((category) => {
          return product.categories === category;
        });
      });
    } 
  }

  return filteredProducts.map(
    ({ previewImageUrl, title, types, header, linkToDocument }) => (
      <Card
        key={Math.random()}
        img={previewImageUrl}
        title={title}
        types={types}
        header={header}
        linkToDocument={
          linkToDocument && linkToDocument !== "" ? linkToDocument : null
        }
        target="_blank"
      />
    )
  );
};


export default filteredData;