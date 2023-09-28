import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UseFetchData from "../../hooks/useFetchData";
import Container from "../../utilis/Container";
import "./MainProducts.scss";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
import { IoCartSharp } from 'react-icons/io5'
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const MainProducts = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [products, isLoading] = UseFetchData("/products?offset=0&limit=20");
  const likedProducts = useSelector((state) => state.likeReducer.likeProducts);
  const basket = useSelector((state) => state.addToBasket.basketProducts);
  console.log(basket);
  console.log(likedProducts);

  function trimTitle(str) {
    return str.split(",").splice(0, 2);
  }

  function trimDesc(str) {
    return str.split(" ").slice(0, 4).join(" ") + "...";
  }

  function addToLike(product) {
    dispatch({ product, type: "LIKE_PRODUCTS" });
  }

  function removeFromLikedProducts(product) {
    dispatch({ id: product.id, type: "REMOVE_LIKED_PRODUCT" });
  }

  function addToBasket(product) {
    dispatch({ product, type: "ADD_TO_BASKET" });
  }

  function removeFromShopProducts(product) {
    dispatch({ id: product.id, type: "REMOVE_BASKET_PRODUCTS" });
  }

  return (
    <section className="products">
      <Container>
        <h1 className="main_product_title">{t("main_product_title")}</h1>
        <div className="products__wrapper">
          {!isLoading ? (
            products.map((product) => (
              <div className="products__item" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  {product.images?.at(0) &&
                  product.images?.at(0).startsWith("https:") ? (
                    <img className="product__img" src={product.images[0]} alt="" />
                  ) : (
                    <img
                      className="product__img"
                      src="https://avatars.mds.yandex.net/get-mpic/6780724/img_id5398870021742881284.jpeg/orig"
                      alt=""
                    />
                  )}
                  <h2>{trimTitle(product.title)}</h2>
                </Link>
                <div className="product__info">
                  |<p>{trimDesc(product.description)}</p>
                  <div className="product__price">
                    <span className="price">${product.price}</span>
                    <div className="like_shop">
                      {likedProducts?.find((p) => p?.id === product.id) ? (
                        <AiFillHeart
                          onClick={() => removeFromLikedProducts(product)}
                          color="red"
                        />
                      ) : (
                        <AiOutlineHeart onClick={() => addToLike(product)} />
                      )}

                      {basket?.find((p) => p?.id === product.id) ? (
                        <IoCartSharp
                          onClick={() => removeFromShopProducts(product)}
                          color="red"
                        />
                      ) : (
                        <AiOutlineShoppingCart onClick={() => addToBasket(product)} />
                      )}

                      {/* {
                        <AiOutlineShoppingCart
                          onClick={() => addToBasket(product)}
                        />
                      } */}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="loading">Loading...</p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default MainProducts;
