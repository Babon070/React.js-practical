import React from "react";
import { useParams } from "react-router-dom";
import UseFetchData from "../../hooks/useFetchData";
import Container from "../../utilis/Container";
import { AiOutlineHeart } from "react-icons/ai";
import "./Category.scss";
import Search from "../../components/search/Search";

const Category = ({ price }) => {
  const categoryId = useParams();
  const [data, isLoading] = UseFetchData(`/categories/${categoryId.id}/products`);
  console.log(data);

  function trimDesc(str) {
    if (typeof str === "string") {
      return str.split(" ").splice(0, 5).join(" ") + "...";
    }
  }

  return (
    <section className="category">
      <Container>
        <Search />
        <div className="category_wrapper">
          {data.map((item) => (
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
                    <small>{price}</small>
                  </strong>
                </div>
                <p>{trimDesc(item.description)}</p>

                <div>
                  <button className="product_btn">Buy</button>
                  <AiOutlineHeart />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Category;
