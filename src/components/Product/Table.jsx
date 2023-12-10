import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

// Table component for displaying product data
const Table = ({ products, onView, onUpdate, onDelete }) => (
  <table className="table table-sm mt-4 table-bordered table-striped text-center p-4 w-auto">
    <TableHeader />
    <tbody>
      {/* Check if there are products to display */}
      {products.length > 0 ? (
        // Map through products and create TableRow for each product
        products.map((product) => (
          <TableRow
            key={product.id}
            product={product}
            onView={onView}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      ) : (
        // Display a message if no products are available
        <tr>
          <td colSpan="6">
            <h1>No data</h1>
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default Table;
