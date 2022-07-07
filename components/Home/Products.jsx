import React from 'react';
import { popularProducts } from './data';
import Product from './Product';
import style from '../../styles/Home/Products.module.css';
function Products() {
  return (
    <section className={style.container}>
      {popularProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Products;
