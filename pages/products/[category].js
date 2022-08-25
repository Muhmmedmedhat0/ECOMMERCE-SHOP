import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Annoucement from '../../components/Home/Annoucement';
import Footer from '../../components/Home/Footer';
import Navbar from '../../components/Home/Navbar';
import NewsLetter from '../../components/Home/NewsLetter';
import Products from '../../components/Home/Products';
import style from '../../styles/Products/ProductFilter.module.css';

function category() {
  // get the pathname from the router
  const router = useRouter();
  const { category } = router.query;

  const [filters, setFilters] = useState({});
  const handleFilter = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFilters({ ...filters, [name]: value });
  };
  const [sort, setSort] = useState('newest');
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  return (
    <section>
      <Annoucement />
      <Navbar />
      <div className={style.container}>
        <h1 className={style.title}>Dresses</h1>
        <div className={style.filterContainer}>
          <div className={style.filter}>
            <span className={style.filterText}>Filter Products</span>
            <select className={style.select} name="color" id="color" defaultValue={'DEFAULT'} onChange={handleFilter}>
              <option className={style.option} value="DEFAULT" disabled>Color</option>
              <option className={style.option} value="White">White</option>
              <option className={style.option} value="Black">Black</option>
              <option className={style.option} value="Red">Red</option>
              <option className={style.option} value="Blue">Blue</option>
              <option className={style.option} value="Yellow">Yellow</option>
              <option className={style.option} value="Green">Green</option>
            </select>
            <select className={style.select} name="size" id="size" defaultValue={'DEFAULT'} onChange={handleFilter}>
              <option className={style.option} value="DEFAULT" disabled>Sizes</option>
              <option className={style.option} value="XS">XS</option>
              <option className={style.option} value="S">S</option>
              <option className={style.option} value="M">M</option>
              <option className={style.option} value="L">L</option>
              <option className={style.option} value="XL">XL</option>
            </select>
          </div>
          <div className={style.filter}>
            <span className={style.filterText}>Sort Products</span>
            <select className={style.select} name="sizes" id="sizes" defaultValue={'newest'} onChange={handleSort}>
              <option className={style.option} value="newest" disabled>Newest</option>
              <option className={style.option} value="ascending">Price (ascending)</option>
              <option className={style.option} value="descending">Price (descending)</option>
            </select>
          </div>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </section>
  );
}
export default category;
