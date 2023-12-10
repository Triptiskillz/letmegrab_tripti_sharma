import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const UpdateProductModal = ({ product, show, handleClose, handleUpdate }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });
  const [categories, setCategories] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      // Send a PATCH or PUT request to update the product
      const response = await axios.patch(
        `https://fakestoreapi.com/products/${product.id}`,
        updatedProduct
      );

      // Handle the updated product data (you can log it to the console)
      console.log("Updated Product:", response.data);
      alert(JSON.stringify(response.data, null, 2));

      // Pass the updated product to the parent component
      handleUpdate(updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
    }

    handleClose();
  };

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Input fields for updating product properties */}
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={updatedProduct.title}
          onChange={handleChange}
          className="w-100 form-control"
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={updatedProduct.price}
          onChange={handleChange}
          className="w-100 form-control"
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={updatedProduct.description}
          onChange={handleChange}
          className="w-100 form-control"
        />
        <label>Category:</label>
        <select
          className="form-select"
          name="category"
          value={updatedProduct.category}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select a Category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {/* Add input fields for other product properties as needed */}
      </Modal.Body>
      <Modal.Footer>
        {/* Close and Update buttons */}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateProductModal;
