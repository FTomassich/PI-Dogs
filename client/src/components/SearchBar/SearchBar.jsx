import React from 'react'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { searchByName } from '../../actions';
import style from '../SearchBar/searchbar.module.css'


const SearchBar = () => {
    const dispatch= useDispatch()
    const [name, setName]= useState("");


    function handleInputChange(e){
        e.preventDefault();
        const value= e.target.value;
        setName(value);
    
    }
    
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
          e.preventDefault();
          dispatch(searchByName(name));
      }
  };


  return (
    <div className={style.container}>
        <input 
        className={style.input}
        type="text"
        placeholder='Search beerd dogs by name...🔍' 
        onChange= {(e) => handleInputChange(e)}
        onKeyDown={handleKeyDown}
        />

    </div>
  )
}

export default SearchBar