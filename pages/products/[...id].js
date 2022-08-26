import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Annoucement from '../../components/Home/Annoucement';
import Footer from '../../components/Home/Footer';
import Navbar from '../../components/Home/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import NewsLetter from '../../components/Home/NewsLetter';
import style from '../../styles/Products/Product.module.css';
import { fetchProduct } from '../../app/slices/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

function Product() {
  // get the pathname from the router
  const router = useRouter();
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const id = router.asPath.split('/')[3];
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id]);
  return (
    <section>
      <Annoucement />
      <Navbar />
      {loading ? (
        'Loading ....'
      ) : (
        <div className={style.wrapper}>
          <div className={style.imgContainer}>
            <img className={style.Image} src={products?.img} alt={products?.title}/>
          </div>
          <div className={style.infoContainer}>
            <h1 className={style.infoTitle}>{products?.title}</h1>
            <div className={style.infoDescription}>{products?.description}</div>
            <span className={style.infoPrice}>{products?.price}</span>
            <div className={style.filterContainer}>
              <div className={style.filter}><span className={style.filterTitle}>Color</span>
                <div className={style.filterColor} style={{ backgroundColor: 'black' }}></div>
                <div className={style.filterColor} style={{ backgroundColor: 'gray' }}></div>
                <div className={style.filterColor} style={{ backgroundColor: 'darkblue' }}></div>
              </div>
              <div className={style.filter}>
                <span className={style.filterTitle}>Size</span>
                <select className={style.filterSize} name="sizes" id="sizes" defaultValue={'xs'}>
                  <option disabled>Sizes</option>
                  <option value="xs">XS</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </select>
              </div>
            </div>
            <div className={style.addToCart}>
              <div className={style.amountContainer}>
                <FontAwesomeIcon icon={faMinus} className={style.icon} />
                <span className={style.amount}>1</span>
                <FontAwesomeIcon icon={faPlus} className={style.icon} />
              </div>
                <button className={style.addToCartButton}>
                  <Link href="/cart">ADD TO CART</Link>
                </button>
            </div>
          </div>
        </div>
      )}
      <NewsLetter />
      <Footer />
    </section>
  );
}

export default Product;
