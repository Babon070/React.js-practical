import React from 'react';
import Categories from '../../components/category/Categories';
import MainProducts from '../../components/main-products/MainProducts';
import Search from '../../components/search/Search';

const Home = () => {
    return (
        <>
            <main>
                <Search/>
                <Categories/>
                <MainProducts/>
            </main>
        </>
    );
}

export default Home;
