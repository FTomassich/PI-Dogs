import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import {postDog, getTemps} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import dogValidator from './validation';
import style from '../CreateDog/CreateDog.module.css';


const CreateDog = () => {
  const [errors, setErrors]= useState ({})
  const dispatch = useDispatch()
  // const history= useHistory
  const temperaments = useSelector ((state)=> state.temperaments) //el use selector apunta al estado "temperaments" del reducer que se llena con la accion GET TEMPS

  const [input, setInput] = useState({         //creo un estado para guardar el form
      
      name: "",
      image: "",
      height: "",
      weight: "",
      life_span: "",
      temperament: []

  })


  function handleChange (e) {
    setErrors (dogValidator({...input, [e.target.name]: e.target.value}))
    setInput ({
        ...input,
        [e.target.name]: e.target.value

    })
    console.log (input)
}
//Manejo del select
function handleSelect(e){
    setInput({
        ...input,
        temperament: [...input.temperament, e.target.value] //

    })
}



//Manejo del Submit (botón)
function handleSubmit(e) {
  e.preventDefault();

  // Validar el formulario antes de enviar
  const formErrors = dogValidator(input);

  if (Object.keys(formErrors).length === 0) {
    // No hay errores, enviar el formulario
    console.log(input);
    dispatch(postDog(input));
    alert("Perreque creado con éxito!!!");

    setInput({
      name: "",
      image: "",
      height: "",
      weight: "",
      life_span: "",
      temperament: []
    });

    // history.push('/home');
  } else {
    
    console.log("Formulario no enviado debido a errores:", formErrors);
    alert("Corrige los errores antes de enviar el formulario.");
  }

}

  useEffect(()=>{
    dispatch(getTemps())
  }, [dispatch]);

  return (
    <div>
            <Link to= '/home'><button>🏠Go Home!</button></Link>
            <h1 className={style.titulo}> Create your Dog! </h1>

            <div className={style.formContainer}>

            <form
            onSubmit = {(e)=> handleSubmit(e)}
            >
                
                <div className={style.text}>📝Name</div>
                <div className={style.option}>
                        
                    <input 
                    className={style.input}
                    type= "text"
                    value= {input.name}
                    name= "name"
                    onChange={(e)=>handleChange(e)} //le agregamos una propiedad al input que sea Onchange y que contenga el Handle
                    />{errors.name && <p className={style.error}>{errors.name}</p>}
                    </div>

                  
                    <div className={style.text}>📈Weight (Min-Max)</div>
                <div className={style.option}>
                
                    <input 
                    className={style.input} 
                    type= "text"
                    value= {input.weight}
                    name = "weight"
                    onChange={(e)=>handleChange(e)}
                    />{errors.weight && <p className={style.error}>{errors.weight}</p>}


                    </div>
                    
                    <div className={style.text}>📸URL de imágen</div>
                    <div className={style.option}>

                    <input className={style.input}
                    type= "text"
                    value= {input.image}
                    name = "image"
                    onChange={(e)=>handleChange(e)}
                    
                    />{errors.image && <p className={style.error}>{errors.image}</p>}
                    </div>
<div className={style.text}>📏Height (min-max)</div>
<div className={style.option}>
                
                    <input className={style.input}
                    type= "text"
                    value= {input.height}
                    name = "height"
                    onChange={(e)=>handleChange(e)}
                    />{errors.height && <p className={style.error}>{errors.height}</p>}

                  </div>
     <div className={style.text}>🌟Life Span</div>
<div className={style.option}>
    
                    <input className={style.input}
                    type= "text"
                    value= {input.life_span}
                     name = "life_span"
                     onChange={(e)=>handleChange(e)}
                    />
                    </div>

                    <div className={style.text}>🔋Temperaments</div>
                    <div className={style.option}>
                
          
      
          <select className={style.input}
          onChange={(e)=>handleSelect(e)}
          >
            {temperaments.map((temperament)=>{
                return(
                <option value={temperament.name}>{temperament.name}</option>
            );
                })}
          </select>
          </div>
          
          <div className={style.containertemps}>
          <ul className={style.ul}><li className={style.lis}>{input.temperament && input.temperament.map(el => el + " ,")}</li></ul>
          
          </div>
          
          <div className={style.button}>
          <button type='submit'
          >Create Dog🐶</button></div>

        
        </form>

        </div>
        </div>
  )
}

export default CreateDog
