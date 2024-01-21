// import React from 'react'
// import style from '../Detail/Detail.module.css';
// import { useEffect } from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getDetail } from '../../actions';

// const Detail = (props) => {
//     console.log (props)
//     const dispatch = useDispatch

//     useEffect(()=>{
//         const id=props.match.params.id
//        dispatch (getDetail(id));  //Accedo al id
//     }, [dispatch][props.match.params.id])
  
// const myCharacter = useSelector((state)=>state.detail)
  
  
// const { name, image, temperament, weight } = myCharacter;

// return (
//   <div className={style.card}>
//     {myCharacter.length > 0 ? (
//       <div>
//         <h2 className={style.itemName}>Name: {name} </h2>
//         <div className={style.image}>
//           <img className={style.image} src={image} alt="img not found" />
//         </div>

//         <div className={style.itemContainer}>
//           <h2 className={style.itemCard}>Temperament: {temperament}</h2>
//           <h2 className={style.itemCard}>Weight: {weight}</h2>
//         </div>
//       </div>
//     ) : (
//       <p>Loading...</p>
//     )}

//     <Link to= '/home'>

//     <button>Back to Home</button>
//         </Link> 
    
    
//   </div>
// );
// };



// export default Detail;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetail } from '../../actions';
import style from '../Detail/Detail.module.css';


const Detail = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(getDetail(id));
  }, [dispatch, props.match.params.id]);

  const myCharacter = useSelector((state) => state.detail);

  const { name, image, temperament, weight } = myCharacter.length > 0 ? myCharacter[0] : {};

  return (
    <div className={style.card}>
      {!Object.keys(myCharacter).length ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className={style.itemName}>Name: {name} </h2>
          <div className={style.image}>
            <img className={style.image} src={image} alt="img not found" />
          </div>

          <div className={style.itemContainer}>
            <h2 className={style.itemCard}>Temperament: {temperament}</h2>
            <h2 className={style.itemCard}>Weight: {weight}</h2>
          </div>
        </div>
      )}

      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Detail;