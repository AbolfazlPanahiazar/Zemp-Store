import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { getCategories } from "../../store/categories/categoriesThunk";
import "./Categories.scss";

function Categories({ getCategories }) {
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="categories">
      <div className="categories__header">
        <span>دسته بندی ها</span>
      </div>
      {categories.pending ? (
        <div className="categories__body">
          <span>در حال دریافت دسته بندی ها</span>
        </div>
      ) : (
        <div className="categories__body">
          {categories.categories.map((item) => (
            <div className="categories__body--item" key={item.name}>
              <img src={item.image.src} title={item.name} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default connect(null, { getCategories })(Categories);
