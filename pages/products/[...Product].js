import React from 'react';
import Link from 'next/link';
import Annoucement from '../../components/Home/Annoucement';
import Footer from '../../components/Home/Footer';
import Navbar from '../../components/Home/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import NewsLetter from '../../components/Home/NewsLetter';
import style from '../../styles/Products/Product.module.css';

function Product() {
  return (
    <section>
      <Annoucement />
      <Navbar />
      <div className={style.wrapper}>
        <div className={style.imgContainer}>
          <img className={style.Image} src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="product"/>
        </div>
        <div className={style.infoContainer}>
          <h1 className={style.infoTitle}>Denim Jumpsuit</h1>
          <div className={style.infoDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </div>
          <span className={style.infoPrice}>$ 20</span>
          <div className={style.filterContainer}>
            <div className={style.filter}><span className={style.filterTitle}>Color</span>
            <div className={style.filterColor} style={{ backgroundColor: 'black' }}></div>
              <div className={style.filterColor} style={{ backgroundColor: 'gray' }}></div> 
              <div className={style.filterColor} style={{ backgroundColor: 'darkblue' }}></div>
            </div>
            <div className={style.filter}>
              <span className={style.filterTitle}>Size</span>
              <select className={style.filterSize} name="sizes" id="sizes" defaultValue={'XS'}>
                <option disabled>Sizes</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
          <div className={style.addToCart}>
            <div className={style.amountContainer}>
              <FontAwesomeIcon icon={faMinus} className={style.icon} />
              <span className={style.amount}>1</span>
              <FontAwesomeIcon icon={faPlus} className={style.icon} />
            </div>
            <button className={style.addToCartButton}><Link href="/cart">ADD TO CART</Link></button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </section>
  );
}

export default Product;
