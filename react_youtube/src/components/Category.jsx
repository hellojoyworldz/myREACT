import React from "react";
import { categories } from "../utils/contents";

const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          type="button"
          key={category.name}
          onClick={() => setSelectCategory(category.name)}>
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Category;
