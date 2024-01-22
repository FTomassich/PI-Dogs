import React from 'react'
import {Link} from 'react-router-dom'
import style from '../Landing/Landing.module.css';

const Landing = () => {
  return (
  <div className={style.landingcontainer}>
    <div className={style.itemscontainer}>
      <div className= {style.text}>
        <h2>¡Welcome to the Dogs Single Page App!</h2>
        {/* <h3 >"Life is better with a dog by your side, teaching you lessons of unconditional love, loyalty, and joy in the simplest moments." - Unknown</h3> */}
        </div>
         <div className={style.containerbutton}>
          <Link to= "/home">
        <button className={style.button}>Ingresar</button> 
        </Link> 
        
        </div>
        </div>
    </div>)
}

export default Landing