import React, { useEffect, useState } from "react";
import Container from "../../utilis/Container";
import "./Products.scss";
import { Link, useParams } from "react-router-dom";
import UseFetchData from "../../hooks/useFetchData";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";

const Product = ({ price }) => {
  const getProductId = useParams();
  const [data,isLoading] = UseFetchData(`/products/${getProductId.id}`);
  console.log(data);
  function trimDesc(str) {
    if (typeof str === "string") {
      return str.split(" ").splice(0, 6).join(" ") + "...";
    }
  }

 
  return (
    <section className="product">
      <Container>
        <div className="product_wrapper">
          <div className="product_wrapper-item">
            <img className="product_img" src={data.images} alt="" />
            <div className="product_wrapper-info">
              <div className="product_wrapper-title">
                <h2>{data.title}</h2>
                <strong className="price">
                  ${data.price}
                  <small>{price}</small>
                </strong>
              </div>
              <p>{trimDesc(data.description)}</p>
              <div>
                <button className="product_btn">Buy</button>
                <AiOutlineHeart />
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Product;
