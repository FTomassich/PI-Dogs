
import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { useParams,} from 'react-router-dom';
import { getDetail, resetDetail} from '../../actions';
import style from '../Detail/Detail.module.css';

const Detail = (props) => {
    console.log (props)
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      
      dispatch(resetDetail()); //clean Detail
    };
  }, [dispatch, id ]);

  const myDog = useSelector((state) => state.detail);

 

  return (
    <div >
      {myDog.length > 0 ? (
        <div className={style.card}>
          <h2 className={style.itemName}>Name: {myDog[0].name} </h2>
          <div className={style.image}>
            <img className={style.image} src={myDog[0].image} alt="img not found" />
          </div>

          <div className={style.itemContainer}>
            <h2 className={style.itemCard}>Temperament: {myDog[0].temperament}</h2>
            <h2 className={style.itemWeight}>Weight (kg): {myDog[0].weight}</h2>
            <h2 className={style.itemWeight}>Height (cm): {myDog[0].height}</h2>
            <h2 className={style.itemWeight}>Life_Span: {myDog[0].life_span}</h2>
          </div>
        </div>
      ) : (
        <p>💫Loading...</p>
      )}

    </div>
  );
};

export default Detail;