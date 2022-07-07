import React from 'react';
import Link from 'next/link';
import Annoucement from '../../components/Home/Annoucement';
import Footer from '../../components/Home/Footer';
import Navbar from '../../components/Home/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import style from '../../styles/Cart/Cart.module.css';
function Cart() {
  return (
    <section>
      <Navbar />
      <Annoucement />
      <div className={style.wrapper}>
        <h1 className={style.title}>YOUR BAG</h1>
        <div className={style.top}>
          <button
            style={{ backgroundColor: 'transparent', color: 'black' }}
            className={style.topButton}
          >
            <Link href="/products">CONTINUE SHOPPING</Link>
          </button>
          <div className={style.topTexts}>
            <span className={style.topText}>Shopping Bag(2)</span>
            <span className={style.topText}>Your Wishlist (0)</span>
          </div>
          <button
            style={{ border: 'none', backgroundColor: 'black', color: 'white' }}
            className={style.topButton}
          >
            CHECKOUT NOW
          </button>
        </div>
        <div className={style.bottom}>
          <div className={style.info}>
            {/* start first Product */}
            <div className={style.product}>
              <div className={style.productDetails}>
                <img
                  className={style.productImage}
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt="product"
                />
                <div className={style.details}>
                  <span className={style.productName}>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className={style.ProductId}>
                    <b>ID:</b> 93813718293
                  </span>
                  <div
                    className={style.ProductColor}
                    style={{ backgroundColor: 'black' }}
                  ></div>
                  <span className={style.ProductSize}>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className={style.pricetDetails}>
                <div className={style.productAmountContainer}>
                  <FontAwesomeIcon icon={faMinus} className={style.icon} />
                  <span className={style.amount}>1</span>
                  <FontAwesomeIcon icon={faPlus} className={style.icon} />
                </div>
                <span className={style.productPrice}>
                  <b>$100</b>
                </span>
              </div>
            </div>
            {/* end first Product */}
            <hr className={style.hr} />
            {/* start second Product */}
            <div className={style.product}>
              <div className={style.productDetails}>
                <img
                  className={style.productImage}
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt="product"
                />
                <div className={style.details}>
                  <span className={style.productName}>
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span className={style.ProductId}>
                    <b>ID:</b> 93813718293
                  </span>
                  <div
                    className={style.ProductColor}
                    style={{ backgroundColor: 'gray' }}
                  ></div>
                  <span className={style.ProductSize}>
                    <b>Size:</b> M
                  </span>
                </div>
              </div>
              <div className={style.pricetDetails}>
                <div className={style.productAmountContainer}>
                  <FontAwesomeIcon icon={faMinus} className={style.icon} />
                  <span className={style.amount}>1</span>
                  <FontAwesomeIcon icon={faPlus} className={style.icon} />
                </div>
                <span className={style.productPrice}>
                  <b>$25</b>
                </span>
              </div>
            </div>
            {/* end second Product */}
            <hr className={style.hr} />
          </div>
          {/* start summery */}
          <div className={style.summery}>
            <h1 className={style.summeryTitle}>ORDER SUMMARY</h1>
            <div className={style.summeryItem}>
              <span className={style.summeryText}>Subtotal</span>
              <span className={style.summeryPrice}>$ 80</span>
            </div>
            <div className={style.summeryItem}>
              <span className={style.summeryText}>Estimated Shipping</span>
              <span className={style.summeryPrice}>$ 5.90</span>
            </div>
            <div className={style.summeryItem}>
              <span className={style.summeryText}>Shipping Discount</span>
              <span className={style.summeryPrice}>$ -5.90</span>
            </div>
            <div className={style.summeryItem}>
              <span className={(style.summeryText, style.summeryTotal)}>
                Total
              </span>
              <span className={style.summeryPrice}>$ 80</span>
            </div>
            <button className={style.checkNow}>CHECKOUT NOW</button>
          </div>
          {/* end summery */}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Cart;
