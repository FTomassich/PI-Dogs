import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Landing/Landing.module.css';

const Landing = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>¡Welcome to Dogs App!</h1>
      <h2 className={style.h2}>Find your next pet</h2>
      <div className={style.containerbutton}>
        <Link to="/home">
          <button className={style.button}>Start</button>
        </Link>
      </div>
      <div className={style.image}></div>
    </div>
    )
  }

export default Landing