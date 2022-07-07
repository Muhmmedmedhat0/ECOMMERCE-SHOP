import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCartArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import style from '../../styles/Home/Navbar.module.css';

function Navbar() {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <span className={style.language}>EN</span>
          <div className={style.search_container}>
            <input type="text" className={style.search_input} />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: `gray`, fontSize: `16px` }}
            />
          </div>
        </div>
        <div className={style.center}>
          <h1 className={style.center_logo}>
            <Link href="/">Logo</Link>
          </h1>
        </div>
        <div className={style.right}>
          <div className={style.right_menuItem}>
            <Link href="/register">Register</Link>
          </div>
          <div className={style.right_menuItem}>
            <Link href="/login">Login</Link>
          </div>
          <div className={style.right_menuItem}>
            <Link href="/cart">
              <FontAwesomeIcon icon={faCartArrowDown} className={style.cart} />
            </Link>
            <span className={style.menuItem_count}>1</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
