import React from 'react'
import style from '../Card/Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({id,image,name,temperament,weight}) => {
  return (

<div className={style.card}>
 
 <h2 className={style.itemName}>
        <Link to={`/detail/${id}`} className={style.itemName}>
          {name}
        </Link>
      </h2>
<div className={style.image}>
<img className={style.image}src={image} alt="img not found" />
</div>

<div className={style.itemContainer}>
<h2 className={style.itemCard}>Temperament: {temperament}</h2>
<hr className={style.hr}/>
<h2 className={style.itemWeight}>Weight: {weight}</h2>


</div>   
</div>
  )
}

export default Card