import React, { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <button className="btn" onClick={() => dispatch(add(product))}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
