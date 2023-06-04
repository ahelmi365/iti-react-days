import { useEffect, useState, useParams } from "react";

function ProductDetails(props) {
  
//   const {productId} = useParams();
//   console.log(productId);

//   const [productData, setProductData] = useState({});

//   function getProductbyId(id) {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setProductData(data);
//       });
//   }

  return (
    <div>
      ProductDetails
      {/* <p>product id: {productData.id}</p>
      <p>product title: {productData.title}</p>
      <p>product description: {productData.description}</p> */}
    </div>
  );
}

export default ProductDetails;
