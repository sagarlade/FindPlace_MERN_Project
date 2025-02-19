import Head from "next/head";
import Products from "./Products/Products";

const Resources = ({results}) => {

  return (
    <div className="App mt-5">
      <Head>
        <title>Resources</title>
      </Head>
      <Products result={results} />
    </div>
  );
}

export default Resources;

