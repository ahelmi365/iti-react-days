import { useEffect, useState, useParams } from "react";

function Products(props) {
  const [productsData, setProductsData] = useState({});

  async function getProductsData() {
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();
    // console.log(json.products);
    return json.products;
  }

  useEffect(() => {
    async function fetchData() {
      const products = await getProductsData();
      setProductsData(products);
    }
    fetchData();
  }, []);

  return (
    <div>
      Products
      <hr />
      {productsData.map((p)=>(
        <div>
          <p>{p.id}: {p.title}</p>
        </div>
      ))}
      {/* {productsData.map((product) => (
        <div key={product.id}>
          <p>product id: {product.id}</p>
          <p>product title: {product.title}</p>
          <p>product description: {product.description}</p>
        </div>
      ))} */}
    </div>
  );
}

export default Products;
