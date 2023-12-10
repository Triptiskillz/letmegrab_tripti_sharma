import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterByCategory from "./FilterbyCategory"; // Corrected component name
import UpdateProductModal from "./UpdateProductModal";
import ViewProductModal from "./ViewProductModal";
import Table from "./Table";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUpdateProduct, setUpdateSelectedProduct] = useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${selectedCategory}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Fetch products based on the selected category
    if (selectedCategory) {
      fetchProductsByCategory();
    } else {
      // If no category is selected, fetch all products
      const fetchAllProducts = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchAllProducts();
    }
  }, [selectedCategory]); // Removed 'products' from the dependency array as it's causing an unnecessary re-render

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openUpdateModal = (product) => {
    setUpdateSelectedProduct(product);
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
  };

  const handleUpdate = (updatedProduct) => {
    // Perform the update logic, e.g., update the product in your state or API
    console.log("Updated Product:", updatedProduct);
  };

  const handleDelete = async (productId) => {
    try {
      // Send a DELETE request to delete the product
      const response = await axios.delete(
        `https://fakestoreapi.com/products/${productId}`
      );

      // Handle the result of the deletion
      console.log("Deleted Product:", response.data);
      alert(JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product."); // Show an alert for failure
    }
  };

  return (
    <div className="container">
      <div className="row mt-4 mb-4">
        <div className="col-md-7">
          <input
            type="text"
            className="form-control"
            placeholder="Search by product title"
            onChange={handleSearch}
            value={searchTerm}
          />
        </div>
        <div className="col-md-5">
          <FilterByCategory onSelectCategory={handleCategorySelect} />
        </div>
      </div>

      <div className="table-responsive-md">
        <Table
          products={filteredProducts}
          onView={openModal}
          onUpdate={openUpdateModal}
          onDelete={handleDelete}
        />
      </div>

      {selectedProduct != null && (
        <ViewProductModal
          product={selectedProduct}
          show={isModalOpen}
          handleClose={closeModal}
        />
      )}

      {selectedUpdateProduct != null && (
        <UpdateProductModal
          product={selectedUpdateProduct}
          show={isUpdateModalOpen}
          handleClose={closeUpdateModal}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default Product;
