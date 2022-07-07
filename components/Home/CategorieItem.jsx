import React from 'react';
import Link from 'next/link';
import style from '../../styles/Home/CategorieItem.module.css';
function CategorieItem({ item }) {
  return (
    <div className={style.container}>
      <img src={item.img} alt={item.title} className={style.img} />
      <div className={style.info}>
        <h1 className={style.title}>{item.title}</h1>
        <button className={style.button}>
          <Link href="/products">SHOP NOW</Link>
        </button>
      </div>
    </div>
  );
}

export default CategorieItem;
