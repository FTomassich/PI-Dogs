import React from 'react'
import {useState} from 'react';
import {useDispatch} from "react-redux";
import { searchByName } from '../../actions';


const SearchBar = () => {
    const dispatch= useDispatch()
    const [name, setName]= useState("");


    function handleInputChange(e){
        e.preventDefault();
        const value= e.target.value;
        setName(value);
    
    }
    
function handleNameSubmit(e){
    e.preventDefault()
    dispatch(searchByName(name))
    
}


  return (
    <div >
        <input type="text"
        placeholder='"Search dogs...🔍' 
        onChange= {(e) => handleInputChange(e)}/>
<button type = 'submit' onClick={(e)=> handleNameSubmit(e)}>Search🐱‍👤</button>
    </div>
  )
}

export default SearchBar