import React from 'react';
import style from '../../styles/Products/ProductFilter.module.css';

function ProductFilter() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Dresses</h1>
      <div className={style.filterContainer}>
        <div className={style.filter}>
          <span className={style.filterText}>Filter Products</span>
          <select className={style.select} name="color" id="color" defaultValue={'DEFAULT'}>
            <option className={style.option} value="DEFAULT" disabled>Color</option>
            <option className={style.option} value="White">White</option>
            <option className={style.option} value="Black">Black</option>
            <option className={style.option} value="Red">Red</option>
            <option className={style.option} value="Blue">Blue</option>
            <option className={style.option} value="Yellow">Yellow</option>
            <option className={style.option} value="Green">Green</option>
          </select>
          <select className={style.select} name="sizes" id="sizes" defaultValue={'DEFAULT'} >
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
          <select className={style.select} name="sizes" id="sizes" defaultValue={'DEFAULT'} >
            <option className={style.option} value="DEFAULT" disabled>Newest</option>
            <option className={style.option} value="">Price (ascending)</option>
            <option className={style.option} value="">Price (descending)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
