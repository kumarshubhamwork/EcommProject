import axios from "./axios1";
import React, { createContext, useEffect, useState } from "react";

export const ProductCentext = createContext();

function Context(props) {
  const [products, setproducts] = useState(null);
  let getproducts = async () => {
    try {
      const { data } = await axios("/products");
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <ProductCentext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductCentext.Provider>
  );
}

export default Context;
