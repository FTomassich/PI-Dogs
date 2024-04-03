import React from 'react'
import style from '../About/About.module.css';
import { Link } from 'react-router-dom';
import dog from '../../assets/dog.svg';
import person from '../../assets/person.svg';
import link from '../../assets/link.svg'
import github from '../../assets/github.svg'
import home from '../../assets/home.svg'

const About = () => {
    return (
        <div className={style.container}>
            <div className={style.empty}></div>
            <a href="/home" rel="noopener noreferrer">
                <img src={home} alt="home" className={style.svg} />
            </a>
            <div className={style.section}>
                <div className={style.title}>
                    <img src={dog} alt="" className={style.svg} />
                    <h1 className={style.h1}>About this project
                    </h1>
                </div>
                <div>
                    <h3 className={style.h3}>A simple webpage application where you can search among over 260 dog breeds, sort them alphabetically, by estimated weight, and filter by temperaments and origin. It also features a 'create' section where you can create a new record in the database. The technologies used were: React, Redux, NodeJs, Express, PostgreSQL, Sequelize, Javascript. I used the power of grid to make the APP full responsive.</h3>
                </div>
            </div>

            <div className={style.section}>
                <div className={style.title}>
                    <img src={person} alt="" className={style.svg} />
                    <h1 className={style.h1}>
                        About me
                    </h1>
                </div>
                <div>
                    <h3 className={style.h3}>
                    Hi! My name is Franco Tomassich, and I'm a full-stack developer capable of implementing solid, creative, and functional proposals to achieve specific goals. I enjoy challenges and constantly learning.
If you want to know more about me, you can follow me on LinkedIn or GitHub.
                    </h3>
                </div>
                <div className={style.icons}>
                    <a href="https://www.linkedin.com/in/franco-tomassich-227446271" target="_blank" rel="noopener noreferrer">
                        <img src={link} alt="LinkedIn" className={style.svg} />
                    </a>
                    <a href="https://github.com/FTomassich" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className={style.svg} />
                    </a>
                </div>
                <div className={style.empty}></div>

            </div>

        </div>
    )
}

export default About