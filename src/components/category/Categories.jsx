import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../api/instance";
import UseFetchData from "../../hooks/useFetchData";
import Container from "../../utilis/Container";
import "./Categories.scss";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation()
  const [data, isLoading] = UseFetchData("/categories?offset=0&limit=5");

  return (
    <section className="categories">
      <Container>
        <h1 className="title_categories">{t("categories")}</h1>
        <div className="categories__wrapper">
          {data.map((category) => (
            <Link
              className="category_item"
              to={`/category/${category.id}`}
              key={category.id}
            >
              <div>
                <img className="category_img" src={category.image} alt="" />
              </div>
              <h2>{category.name}</h2>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
