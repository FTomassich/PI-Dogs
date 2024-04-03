import React from 'react'
import style from '../About/About.module.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={style.container}>
            <div>
                <h1>About this project</h1>     
            </div>
           <div>
            <h1>About me</h1>
           </div>

        </div>
    )
}

export default About