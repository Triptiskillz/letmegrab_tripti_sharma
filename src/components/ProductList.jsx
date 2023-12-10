import React, { useState, useEffect } from "react";

function ProductList() {
  // State to store the list of products
  const [products, setProducts] = useState([]);

  // Fetch products from the Fake Store API on component mount
  useEffect(() => {
    // Fetch products from the Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="menu-area section-gap">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-4 col-lg-10">
            <div className="title text-center">
              {/* Title for the product list section */}
              <h1 className="mb-10">What kind of Coffee we serve for you</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-4" key={product.id}>
              <div className="single-menu">
                <div className="title-div justify-content-between d-flex">
                  {/* Product title and price */}
                  <h4>{product.title}</h4>
                  <p className="price float-right">${product.price}</p>
                </div>
                {/* Product description */}
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
