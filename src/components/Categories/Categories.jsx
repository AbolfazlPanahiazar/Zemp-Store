import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Categories.scss";

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  const history = useHistory();

  const linkHandler = (item) => {
    history.push(`/categories/${item.id}`);
  };

  return (
    <div className="categories">
      <div className="categories__header">
        <span>دسته بندی ها</span>
      </div>
      <div className="categories__body">
        {categories.map((item) => (
          <div onClick={() => linkHandler(item)} className="categories__body--item" key={item.name}>
            <img src={item.image.src} title={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
