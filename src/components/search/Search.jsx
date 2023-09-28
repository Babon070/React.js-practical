import React, { useState } from "react";
import "./Search.scss";
import Container from "../../utilis/Container";
import { FiSearch } from "react-icons/fi";
import instance from "../../api/instance";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { t } = useTranslation()
  const [searchREsult, setSearchREsult] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const giveSearch = (e) => {
    setSearchValue(e.target.value);
    instance
      .get(`/products/?title=${e.target.value}&offset=10&limit=10`)
      .then((response) => setSearchREsult(response.data))
      .catch((err) => console.log(err));
  };

  function giveMoreResult(e) {
    e.preventDefault();
    if(searchValue){
      window.location.pathname = `/search/${searchValue}`;
      console.log(65);
    }
  }

  return (
    <section className="search">
      <Container>
        <form onSubmit={giveMoreResult}>
          <div className="search__wrapper">
            <div className="search_elements">
              <FiSearch />
              <input
                onChange={giveSearch}
                className="search_input"
                type="text"
                placeholder={t("serachInput_placeholder")}
              />
              {searchREsult.length > 0 && searchValue ? (
                <div className="search_suggestions">
                  {searchREsult.map((item, index) => (
                    <Link
                      key="index"
                      to={`/product/${item.id}`}
                      className="search_suggestions-link"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>

            <button className="search_btn">
              <FiSearch />
              {t("searchComponent_button")}
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Search;
