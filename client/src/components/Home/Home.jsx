import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import style from '../Home/Home.module.css'
//importación de actions
import { getDogs, filterOrigin, orderByName, getTemps, filterByTemps, orderByWeight } from '../../actions';
import SearchBar from '../SearchBar/SearchBar';
import arrow2 from '../../assets/arrow2.svg'


const Home = () => {

  const dispatch = useDispatch()
  const allDogs = useSelector((state) => state.dogs) //me traigo el estado del reducer
  const allTemps = useSelector((state) => state.temperaments);
  const [isVisibleIndex, setIsVisibleIndex] = useState(null);
  const [orden, setOrden] = useState('')
  //Estados locales del paginado
  const [currentPage, setCurrentPage] = useState(1)//mi página actual que arranca en 1
  const [dogsPerPage, setDogsPerPage] = useState(9)
  const indexOfLastDog = currentPage * dogsPerPage //9
  const indexOfFirstDog = indexOfLastDog - dogsPerPage//0
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog) //esta constante tiene los perros de la página actual


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {

    if (allDogs.length === 0) {

      dispatch(getDogs());
      dispatch(getTemps());
    }


  }, [dispatch]);

  //Handler de botón refreshDogs 
  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }



  //Handler para filtrar por temps según el select

  function handleFilterTemps(e) {
    const selectedTemperament = e.target.value;
    dispatch(filterByTemps(selectedTemperament));
    setCurrentPage(1);
  }

  function handleFilterOrigin(e) {
    dispatch(filterOrigin(e.target.value))
    setCurrentPage(1);

  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
  };

  function handleOrderByWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
  }

  const handleToggleVisibility = (index) => {
    setIsVisibleIndex(isVisibleIndex === index ? null : index);
  };

  return (

    <div className={style.containerHome}>
      <div className={style.containerbutton}>
        <div className={style.twobuttons}>
          <button className={style.button3}><Link to='/'>Welcome</Link></button>
          <button className={style.button2}><Link to='/dogs'> Create Dog</Link>  </button>
          <button className={style.button} onClick={e => { handleClick(e) }}>Refresh Dogs</button>
          <button className={style.button3}> <Link to='/about'>About</Link></button>
        </div>
        <SearchBar ></SearchBar>
      </div>
      <div className={style.containerAllSelect}>
        <div className={style.group}>

          <div className={style.section}
            onClick={() => handleToggleVisibility(0)}
          >
            <h3
              className={style.h3}

            >ORIGIN</h3>
            <img src={arrow2} alt="" className={style.svg}

            />
          </div>

          <div
            className={`${style.section} ${isVisibleIndex === 0 ? style.visible : style.hidden
              }`}>
            <select
              className={style.select}
              onChange={e => handleFilterOrigin(e)}>
              <option disabled defaultValue>Filtrar según orígen</option>
              <option value="All">Todos</option>
              <option value="created">Creado en base de datos</option>
              <option value="api">Existente en Api</option>
            </select>
          </div>
        </div>

        <div className={style.group}>
          <div className={style.section}
            onClick={() => handleToggleVisibility(1)}>
            <h3 className={style.h3}
            >TEMPS</h3>
            <img src={arrow2} alt="" className={style.svg} />
          </div>
          <div className={`${style.section} ${isVisibleIndex === 1 ? style.visible : style.hidden
            }`}>
            <select
              className={style.select}
              onChange={(e) => handleFilterTemps(e)}>
              {allTemps.map((temperament) => (
                <option key={temperament.id} value={temperament.name}>
                  {temperament.name}
                </option>
              ))}
            </select>
          </div>


        </div>

        <div className={style.group}>
          <div className={style.section}
            onClick={() => handleToggleVisibility(2)}>

            <h3 className={style.h3}
            >A-Z</h3>
            <img src={arrow2} alt="" className={style.svg} />
          </div>
          <div className={`${style.section} ${isVisibleIndex === 2 ? style.visible : style.hidden
            }`}>
            <select
              className={style.select}
              onChange={e => handleSort(e)}>
              <option disabled defaultValue>Ordenar alfabéticamente</option>
              <option value="asc">Ascendente (A-Z)</option>
              <option value="desc">Descendente (Z-A)</option>
            </select>
          </div>


        </div>

        <div className={style.group}>
          <div className={style.section}
          onClick={() => handleToggleVisibility(3)}>
            <h3 className={style.h3}
            >WEIGHT</h3>
            <img src={arrow2} alt="" className={style.svg} />
          </div>
          <div className={`${style.section} ${isVisibleIndex === 3 ? style.visible : style.hidden
            }`}>
            <select
              className={style.select}
              onChange={e => handleOrderByWeight(e)}>
              <option disabled defaultValue>Ordenar por Peso</option>
              <option value="asc">Ascendente🔼</option>
              <option value="desc">Descendente🔽</option>
            </select>
          </div>
        </div>




      </div>

      <div className={style.containerCards}>

        {currentDogs && currentDogs.map((el) => (
          <Card id={el.id} name={el.name} image={el.image} weight={el.weight} temperament={el.temperament} />
        ))}

      </div>

      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        currentPage={currentPage}
        paginado={paginado}
      />

    </div>
  )
}

export default Home