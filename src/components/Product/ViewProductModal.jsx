import React from "react";
import { Modal } from "react-bootstrap";

// ViewProductModal component for displaying product details in a modal
const ViewProductModal = ({ product, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      {/* Modal header with product title and close button */}
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Displaying product details in the modal body */}
        <div className="text-center">
          <img
            src={product.image}
            className="img-fluid w-50"
            alt={product.title}
          />
        </div>
        <p>
          <b>Product ID:</b> {product.id}
        </p>
        <p>
          <b>Price:</b> {product.price}
        </p>
        <p>
          <b>Description:</b> {product.description}
        </p>
        {/* Add other product details as needed */}
      </Modal.Body>
    </Modal>
  );
};

export default ViewProductModal;
