import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import "./Categories.scss";

function Categories() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="categories">
      <div className="categories__header">
        <span>دسته بندی ها</span>
      </div>
      <div className="categories__body">
        {categories.categories.map((item) => (
          <div className="categories__body--item" key={item.name}>
            <img src={item.image.src} title={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
