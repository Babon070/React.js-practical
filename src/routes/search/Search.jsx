import React, { useEffect, useState } from "react";
import "./Search.scss";
import { useParams } from "react-router-dom";
import UseFetchData from "../../hooks/useFetchData";
import Container from "../../utilis/Container";
import { AiOutlineHeart } from "react-icons/ai";
import SearchCom from "../../components/search/Search";
import instance from "../../api/instance";
import axios from "axios";

const Search = ({ price }) => {


 
  const productInfo = useParams();
  var [data, isLoading] = UseFetchData(`/products/?title=${productInfo.productName}`);

  function trimDesc(str) {
    if (typeof str === "string") {
      return str.split(" ").splice(0, 5).join(" ") + "...";
    }
  }

  const [loverSelect, setLoverSelect] = useState(1);
  const [upperSelect, setUpperSelect] = useState(10000);
  const [filterResult, setFilterResult] = useState([]);

  const prices = [1, 10, 100, 1000, 10000];

  useEffect(() => {
    if (loverSelect > upperSelect) {
      setLoverSelect(upperSelect);
      setUpperSelect(loverSelect);
    }

    instance
      .get(
        `products/?title=${productInfo.productName}&price_min=${loverSelect}&price_max=${upperSelect}`
      )
      .then((response) => setFilterResult(response.data))
      .catch((err) => console.log(err));
  }, [loverSelect, upperSelect]);
  if (filterResult.length > 0) {
    data = filterResult;
  }

  return (
    <section className="search__rout">
      <Container>
        <SearchCom />
        <div className="filter_price">
        
          <select
            value={loverSelect}
            onChange={(e) => setLoverSelect(e.target.value)}
          >
            {prices.map((prices) => (
              <option key={prices} value={`${prices}`}>
                {prices}
              </option>
            ))}
          </select>

          <select
            value={upperSelect}
            onChange={(e) => setUpperSelect(e.target.value)}
          >
            {prices.map((prices) => (
              <option key={prices} value={`${prices}`}>
                {prices}
              </option>
            ))}
          </select>
        </div>

        <h2 className="search_length">{`Biz ${data.length} ta e'lon topdik`}</h2>
        <div className="search__result">
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

export default Search;
