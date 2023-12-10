import React, { useEffect, useState } from "react";
import axios from "axios";

const FilterByCategory = ({ onSelectCategory }) => {
  // State to store the fetched categories
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Function to fetch categories from the API
    const fetchCategories = async () => {
      try {
        // Fetch categories from the fakestoreapi
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );

        // Set the fetched categories in the state
        setCategories(response.data);
      } catch (error) {
        // Handle errors during API request
        console.error("Error fetching categories:", error);
      }
    };

    // Call the fetchCategories function when the component mounts
    fetchCategories();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      {/* Default option for displaying all categories */}
      <option value="">All Categories</option>

      {/* Map through the fetched categories and create an option for each */}
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default FilterByCategory;
