import axios from 'axios';

//Aquí sucede la conexión entre back y front
// export function getDogs() {
//     return async function (dispatch){
//         var json = await axios.get("http://localhost:3001/dogs");
//         return dispatch ({
//             type: 'GET_DOGS',
//             payload: json.data


//         })
//     }}
    

export function getDogs() {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/dogs");

            dispatch({
                type: 'GET_DOGS',
                payload: response.data
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

export function searchByName (name) {  //el name me llega por "payload" (input del searchbar)
    return async function (dispatch){
        try{
            var json=await axios.get ("http://localhost:3001/dogs?name=" + name);
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
            const response=await fetch ("http://localhost:3001/temperaments", {});
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
        const response= await axios.post("http://localhost:3001/dogs", payload);
        console.log(response)
        return response;     
    }catch (error) {
        console.log(error)
    }
}
};
  

// export function getDetail (id){
//     return async function (dispatch){
//         try{
//             var json= await axios.get ("http://localhost:3001/dogs/" + id)
//             return dispatch({
//                 type: 'GET_DETAILS',
//                 payload: json.data
//             })

//         }catch (error) {
//             console.log(error)
//         }
//     }
// };

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/dogs/" + id);
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








