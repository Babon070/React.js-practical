import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../../utilis/Container";
import "./Basket.scss";
import { IoCartSharp } from "react-icons/io5";
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Basket = () => {
  
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const basketProducts = useSelector(
    (state) => state.addToBasket.basketProducts
  );
  console.log(basketProducts);

  function trimDesc(str) {
    if (typeof str === "string") {
      return str.split(" ").splice(0, 5).join(" ") + "...";
    }
  }

  function addToBasket(product) {
    dispatch({ product, type: "ADD_TO_BASKET" });
  }

  function removeFromShopProducts(product) {
    dispatch({ id: product.id, type: "REMOVE_BASKET_PRODUCTS" });
  }

  return (
    <section className="basket">
      <Container>
        {!basketProducts.length ? (
          <div className="basket_empty-wrap">
            <h1>{t("basket_empty-title")}</h1>
            <p>{t("basket_empty_p")}</p>
            <Link to="/">{t("basket_empty-btn")}</Link>
          </div>
        ) : (
          <div className="search__result">
            {basketProducts?.map((item) => (
              <div key={item.id} className="search_wrapper-item">
                {item.images?.at(0) &&
                item.images?.at(0).startsWith("https://") ? (
                  <img
                    className="product__item--img"
                    src={item.images?.at(0)}
                    alt=""
                  />
                ) : (
                  <img
                    className="product__item--img"
                    src="https://avatars.mds.yandex.net/get-mpic/6780724/img_id5398870021742881284.jpeg/orig"
                    alt=""
                  />
                )}
                <div className="search_wrapper-info">
                  <div className="search_wrapper-title">
                    <h2>{item.title}</h2>
                    <strong className="price">
                      ${item.price}
                      {/* <small>{price}</small> */}
                    </strong>
                  </div>
                  <p>{trimDesc(item.description)}</p>

                  <div>
                    <button className="product_btn">Buy</button>
                    {basketProducts?.find((p) => p?.id === item.id) ? (
                      <IoCartSharp
                        onClick={() => removeFromShopProducts(item)}
                        color="red"
                      />
                    ) : (
                      <AiOutlineShoppingCart onClick={() => addToBasket(item)} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Basket;
