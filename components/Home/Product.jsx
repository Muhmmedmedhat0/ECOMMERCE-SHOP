import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faMagnifyingGlass,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import style from '../../styles/Home/Product.module.css';
function Product({ product }) {
  return (
    <div className={style.container}>
      <div className={style.circle}></div>
      <img src={product.img} alt={product.id} className={style.img} />
      <div className={style.info}>
        <div className={style.icon}>
          <Link href="/products/1">
            <FontAwesomeIcon icon={faCartPlus} />
          </Link>
        </div>
        <div className={style.icon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className={style.icon}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  );
}

export default Product;
