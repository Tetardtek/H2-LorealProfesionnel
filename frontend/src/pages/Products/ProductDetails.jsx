// import { useEffect, useState } from "react";
// import axios from "axios";
import Details from "../../components/details";
import "../../scss/ProductDetails.scss";

function ProductDetails() {
  // const [productList, setProductList] = useState();
  // useEffect(() => {
  //   const getProductsList = async () => {
  //     try {
  //       const response = await axios.get(
  //         `
  //         ${import.meta.env.VITE_BACKEND_URL}/api/product/`,
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       setProductList(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getProductsList();
  // }, []);

  // const [ProductsList, setproductList] = useState([]);

  // useEffect(() => {
  //   const getProductsList = async () => {
  //     try {
  //       const response = await axios.get(
  //         ${import.meta.env.VITE_BACKEND_URL}/api/product,
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       setproductList(response.data);
  return (
    <div className="details_Container">
      <div className="logo">
        <Details />
      </div>
    </div>
  );
}

export default ProductDetails;
