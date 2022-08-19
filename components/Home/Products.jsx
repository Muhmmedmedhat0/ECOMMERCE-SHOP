import React, { useEffect, useState } from 'react';
import { popularProducts } from './data';
import Product from './Product';
import style from '../../styles/Home/Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../app/slices/productsSlice';

function Products({ category, filters, sort }) {
  const [data, setData] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts(category));
    setData(data);
  }, [dispatch, category]);

  useEffect(() => {
    category &&
      setFilterProducts(
        products.filter((product) => {
          Object.entries(filters).every(([key, value]) => {
            product[key].includes(value);
          });
        })
      );
  }, [category, filters, sort]);
  return (
    <section className={style.container}>
      {filterProducts.map((product) => (
        <Product
          key={product.id}
          product={product}
          // loading={loading}
          // error={error}
        />
      ))}
    </section>
  );
}

export default Products;
