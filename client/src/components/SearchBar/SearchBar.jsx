import React from 'react'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { searchByName } from '../../actions';
import style from '../SearchBar/searchbar.module.css'
import search from '../../assets/search.svg'


const SearchBar = () => {
    const dispatch= useDispatch()
    const [name, setName]= useState("");


    function handleInputChange(e){
        e.preventDefault();
        const value= e.target.value;
        setName(value);
    
    }
    
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
          event.preventDefault();
          dispatch(searchByName(name));
      }
  };


  return (
    <div className={style.container}>
    <input 
        className={style.input}
        type="text"
        placeholder='Search beard dogs by name...' 
        onChange={(e) => handleInputChange(e)}
        onKeyDown={handleKeyDown}
    />
    <svg
        className={style.svg}
        onClick={() => dispatch(searchByName(name))}
        aria-hidden="true"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g>
            <path fill="grey" d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
    </svg>
</div>
  )
}

export default SearchBar