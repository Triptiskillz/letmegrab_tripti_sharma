import React from "react";

// TableHeader component displaying column headers for the product table
function TableHeader() {
  return (
    <thead className="table-dark">
      <tr>
        {/* Header columns with scope and styling */}
        <th scope="col" className="p-4">
          ID
        </th>
        <th scope="col" className="p-4">
          Product Title
        </th>
        <th scope="col" className="p-4">
          Product Price
        </th>
        <th scope="col" className="p-4">
          Product Description
        </th>
        <th scope="col" className="p-4">
          Product Category
        </th>
        <th scope="col" className="p-4">
          Action
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;
