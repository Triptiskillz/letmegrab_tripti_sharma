import React from "react";

// TableRow component representing a row in the product table
const TableRow = ({ product, onView, onUpdate, onDelete }) => (
  <tr key={product.id}>
    {/* Displaying product details in table cells */}
    <td>{product.id}</td>
    <td>{product.title}</td>
    <td>{product.price}</td>
    <td>{product.description}</td>
    <td>{product.category}</td>
    <td>
      {/* View button with onClick handler */}
      <button
        type="button"
        className="btn btn-primary me-2"
        onClick={() => onView(product)}
      >
        View
      </button>
      {/* Update button with onClick handler */}
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => onUpdate(product)}
      >
        Update
      </button>
      {/* Delete button with onClick handler */}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDelete(product.id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default TableRow;
