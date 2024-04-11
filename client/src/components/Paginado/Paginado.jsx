
import React from 'react'
import style from '../Paginado/Paginado.module.css';

const Paginado = ({paginado, dogsPerPage, allDogs, currentPage}) => {
  const totalPages = Math.ceil (allDogs/dogsPerPage);
  const pageRange = 7;

  let startPage = Math.max (1, currentPage - Math.floor(pageRange / 2));
  let endPage = startPage + pageRange - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - pageRange + 1);
  }

  const pageNumbers = Array.from({ length: endPage - startPage +1 }, (_, i) => startPage + i);

  
    return (
        <nav className={style.nav}>
        <ul className={style.ul}>
          {currentPage > 1 && (
            <li className={style.number} key="previous">
              <button 
              className={style.button}
              onClick={() => paginado(currentPage - 1)}>Previous</button>
            </li>
          )}
          {pageNumbers.map((number) => (
            <li key={number} className={number === currentPage ? style.active : style.number}>
              <button className= {style.number} onClick={() => paginado(number)}>{number}</button>
            </li>
          ))}
          {currentPage < totalPages && (
            <li className={style.number} key="next">
              <button 
              className={style.button}
              onClick={() => paginado(currentPage + 1)}>Next</button>
            </li>
          )}
        </ul>
      </nav>
  )
}

export default Paginado