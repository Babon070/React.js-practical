import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../../utilis/Container";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import "./Header.scss";
import Redirectbutton from "../../utilis/Button";
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";
import { useSelector } from "react-redux";

const Header = () => {
  const createUserData = useSelector((state) => state.createReducer);
  console.log(createUserData.user.user.avatar);
  const countLikedProducts = useSelector(
    (state) => state.likeReducer.likeProducts
  );
  const basketProductsLength = useSelector(
    (state) => state.addToBasket.basketProducts
  );
  console.log(basketProductsLength);
  const { t } = useTranslation();
  const location = useLocation();
  const navigator = useRef();

  let prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navigator.current.style.top = "0px";
    } else {
      navigator.current.style.top = "-72px";
    }
    prevScrollPos = currentScrollPos;
  });

  return location.pathname.includes("auth/create") ? (
    <></>
  ) : (
    <header ref={navigator} className="header">
      <Container>
        <div className="header__wrapper">
          <Link to="/">
            <img
              className="header__logo"
              src="https://lindeal.com/images/2022/10/top-8-luchshikh-kazakhstanskikh-marketplejsov-olx.png"
              alt=""
            />
          </Link>

          <nav className="header__nav">
            <Link className="header__nav--message" to="/put">
              <FiMessageSquare />
              {t("header_message")}
            </Link>

            <ul className="header__nav--ul">
              <li
                className={
                  localStorage.getItem("lang") === "uz" ? "active_lang" : ""
                }
                onClick={() => i18n.changeLanguage("uz")}
              >
                UZ
              </li>
              <span>|</span>
              <li
                className={
                  localStorage.getItem("lang") === "ru" ? "active_lang" : ""
                }
                onClick={() => i18n.changeLanguage("ru")}
              >
                RU
              </li>
            </ul>

            <Link className="header__nav--heart" to="/like">
              <AiOutlineHeart />
              {countLikedProducts.length ? (
                <span className="countLikeProducts">
                  {countLikedProducts.length}
                </span>
              ) : (
                <></>
              )}
            </Link>

            <Link className="header__nav--basket" to="/basket">
              <AiOutlineShoppingCart />
              {basketProductsLength.length ? (
                <span className="countLikeProducts">
                  {basketProductsLength.length}
                </span>
              ) : (
                <></>
              )}
            </Link>

            <Link className="header__nav--auth" to="/auth/create">
              {createUserData?.user?.user.avatar ? (
                <img
                  className="avatar_img"
                  src={createUserData?.user.user.avatar}
                  alt=""
                />
              ) : (
                <FaRegUser />
              )}
              {createUserData?.user.user.email
                ? createUserData?.user.user.email
                : t("header_account")}
            </Link>

            <Redirectbutton
              headerButton="/newpost"
              title={t("header_button")}
              type="light"
            ></Redirectbutton>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
