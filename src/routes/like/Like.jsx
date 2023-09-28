import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../utilis/Container";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Like.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Like = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const likedProducts = useSelector((state) => state.likeReducer.likeProducts);
  console.log(likedProducts);

  function trimDesc(str) {
    if (typeof str === "string") {
      return str.split(" ").splice(0, 5).join(" ") + "...";
    }
  }

  function addToLike(item) {
    dispatch({ item, type: "LIKE_PRODUCTS" });
  }

  function removeFromLikedProducts(item) {
    dispatch({ id: item.id, type: "REMOVE_LIKED_PRODUCT" });
  }

  return (
    <section className="like_wrapper">
      <Container>
        {!likedProducts.length ? (
          <div className="basket_empty-wrap">
            <h1>{t("basket_empty-title")}</h1>
            <p>{t("basket_empty_p")}</p>
            <Link to="/">{t("basket_empty-btn")}</Link>
          </div>
        ) : (
          <div className="search__result">
            {likedProducts?.map((item) => (
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
                    {likedProducts?.find((p) => p?.id === item.id) ? (
                      <AiFillHeart
                        onClick={() => removeFromLikedProducts(item)}
                        color="red"
                      />
                    ) : (
                      <AiOutlineHeart onClick={() => addToLike(item)} />
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

export default Like;
