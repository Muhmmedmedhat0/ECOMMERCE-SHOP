import React from 'react';
import Link from 'next/link';
import Annoucement from '../../components/Home/Annoucement';
import Footer from '../../components/Home/Footer';
import Navbar from '../../components/Home/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import style from '../../styles/Cart/Cart.module.css';
import {useSelector} from 'react-redux'
function Cart() {
  const  cart  = useSelector((state) => state.cart);
  return (
    <section>
      <Navbar />
      <Annoucement />
      <div className={style.wrapper}>
        <h1 className={style.title}>YOUR BAG</h1>
        <div className={style.top}>
          <button style={{ backgroundColor: 'transparent', color: 'black' }} className={style.topButton} >
            <Link href="#">CONTINUE SHOPPING</Link>
          </button>
          <div className={style.topTexts}>
            <span className={style.topText}>Shopping Bag(2)</span>
            <span className={style.topText}>Your Wishlist (0)</span>
          </div>
          <button style={{ border: 'none', backgroundColor: 'black', color: 'white' }} className={style.topButton} >
            CHECKOUT NOW
          </button>
        </div>
        <div className={style.bottom}>
          <div className={style.info}>
            {/* start second Product */}
            {cart.products.map((product) => (
              <div className={style.product} key={product._id}>
                <div className={style.productDetails}>
                  <img className={style.productImage} src={product.img} alt={product.title} />
                  <div className={style.details}>
                    <span className={style.productName}> <b>Product:</b> {product.title} </span>
                    <span className={style.ProductId}> <b>ID:</b> {product._id} </span>
                    <div className={style.ProductColor} style={{ backgroundColor: `${product.color}` }} ></div>
                    <span className={style.ProductSize}><b>Size:</b> {product.size}</span>
                  </div>
                </div>
                <div className={style.pricetDetails}>
                  <div className={style.productAmountContainer}>
                    <FontAwesomeIcon icon={faMinus} className={style.icon} />
                    <span className={style.amount}>{product.quantity}</span>
                    <FontAwesomeIcon icon={faPlus} className={style.icon} />
                  </div>
                  <span className={style.productPrice}>
                    <b>${product.price * product.quantity}</b>
                  </span>
                </div>
              </div>
            ))}
            {/* end OF Product */}
          </div>
          {/* start summery */}
          <div className={style.summery}>
            <h1 className={style.summeryTitle}>ORDER SUMMARY</h1>
            <div className={style.summeryItem}>
              <span className={style.summeryText}>Subtotal</span>
              <span className={style.summeryPrice}>$ {cart.totalPrice}</span>
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
              <span className={(style.summeryText, style.summeryTotal)}>Total</span>
              <span className={style.summeryPrice}>$ {cart.totalPrice}</span>
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
