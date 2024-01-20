import React from 'react'
import {Link} from 'react-router-dom'
import style from '../Landing/Landing.module.css';

const Landing = () => {
  return (
  <div className={style.landingcontainer}>
    <div >
      <div>
        <h3 className= {style.text}>"Life is better with a dog by your side, teaching you lessons of unconditional love, loyalty, and joy in the simplest moments." - Unknown</h3>
        </div>
         
          <Link to= "/home">
        <button className={style.button}>Ingresar</button> 
        </Link> 
        </div>
    </div>)
}

export default Landing