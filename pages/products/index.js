import React from 'react';
import Annoucement from '../../components/Home/Annoucement';
import Footer from '../../components/Home/Footer';
import Navbar from '../../components/Home/Navbar';
import NewsLetter from '../../components/Home/NewsLetter';
import Products from '../../components/Home/Products';
import ProductFilter from '../../components/Products/ProductFilter';

function Home() {
  return (
    <section>
      <Annoucement />
      <Navbar />
      <ProductFilter />
      <Products />
      <NewsLetter />
      <Footer />
    </section>
  );
}

export default Home;
