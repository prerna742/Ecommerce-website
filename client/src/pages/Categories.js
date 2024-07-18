import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const CategoriesPage = () => {
  const categorie = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="categories container" >
        <div className="row container">
          {categorie.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
              <Link to={`/category/${c.slug}`} className="btn cat-btn">
                {c.name}
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
