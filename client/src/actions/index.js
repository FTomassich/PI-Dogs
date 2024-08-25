import axios from 'axios';


export function getDogs() {
    return async function (dispatch) {
        try {
            // const response = await fetch("http://localhost:3001/dogs");
            const response = await fetch("https://invigorating-curiosity-production.up.railway.app/dogs");
            const data= await response.json()

            dispatch({
                type: 'GET_DOGS',
                payload:data
            });

        } catch (error) {
            
            console.error('Error al obtener perreques:', error);
        }}}

export function filterOrigin (payload) {     //el payload es el value del select que le va a allegar
    return {
        type: 'FILTER_ORIGIN',
        payload
    }
}


export function orderByName(payload){
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}


export function orderByWeight(payload){
    return {
        type: 'ORDER_BY_WEIGHT',
        payload
    }
}

export function searchByName (name) {  //el name me llega por "payload" (input del searchbar)
    return async function (dispatch){
        try{
            // var json=await axios.get ("http://localhost:3001/dogs?name=" + name);
            var json=await axios.get ("https://invigorating-curiosity-production.up.railway.app/dogs?name=" + name);
            return dispatch  ({
        type: 'SEARCH_BY_NAME',
        payload: json.data
    })
}catch (error){
    console.log(error)
}
    }
}

//Action para cargar los temps (se hará con Use Effect en componente home)
export function getTemps(){
    return async function (dispatch){
        try{
            // const response=await fetch ("http://localhost:3001/temperaments", {});
            const response=await fetch ("https://invigorating-curiosity-production.up.railway.app/temperaments", {});
            const data=await response.json();
            return dispatch ({type: 'GET_TEMPS', payload: data});
        } catch (error) {
            console.log(error)
        }
    }
}


//Action para filtrar por temperamento
export const filterByTemps = (temperament) => ({
    type: 'FILTER_TEMPS',
    payload: temperament,
  });


  //Action para postear un dog
  export function postDog(payload){
    return async function (dispatch){
    try{
        // const response= await axios.post("http://localhost:3001/dogs", payload);
        const response= await axios.post("https://invigorating-curiosity-production.up.railway.app/dogs", payload);
        console.log(response)
        return response;     
    }catch (error) {
        console.log(error)
    }
}
};
  

export function getDetail(id) {
    return async function (dispatch) {
        try {
            // var json = await axios.get("http://localhost:3001/dogs/" + id);
            var json = await axios.get("https://invigorating-curiosity-production.up.railway.app/dogs/" + id);
            console.log(json.data); // Agrego esta línea para verificar la respuesta
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export const resetDetail = () => {
    return {
      type: 'RESET_DETAIL',
    };
  };







