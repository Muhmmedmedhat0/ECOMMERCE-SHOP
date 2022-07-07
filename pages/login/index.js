import React from 'react';
import Link from 'next/link';
import style from '../../styles/Login/Login.module.css';

function Login() {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>SIGN IN</h1>
        <form action="" className={style.form}>
          <input type="email" placeholder="email" className={style.input} />
          <input
            type="password"
            placeholder="password"
            className={style.input}
          />
          <span className={style.agrement}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className={style.button}>LOG IN</button>
          <Link className={style.link} href="/register">CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </section>
  );
}

export default Login;
