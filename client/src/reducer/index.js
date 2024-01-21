

 //Declaro un reducer y luego para comenzar un estado inicial.
 const initialState= {
    dogs: [],
    detail: [],
    allDogs: [],
    temperaments: []
 }
 
 function rootReducer (state=initialState, action){
    switch(action.type){
        //lo que hago es llenar el estado vacío dogs con toda la data que trae mi action GET/DOGS (llena dos estados)
        case 'GET_DOGS':
            return{
                ...state,
                dogs: action.payload,
                allDogs: action.payload, // copia del estado que siempre tenga todos los perro
                
            }
            
            case 'GET_DETAILS':
                return{
                    ...state, 
                    detail: action.payload

                }
            
            case 'GET_TEMPS':
                return {
                    ...state,
                    temperaments: action.payload
                }

                case 'FILTER_TEMPS':
                    
                    const filteredDogs = state.allDogs.filter((dog) => {
                        // Verifica si el temperamento seleccionado está en los temperamentos del perro
                        return dog.temperament && dog.temperament.includes(action.payload);
                      });
                    
                      return {
                        ...state,
                        dogs: filteredDogs,
                      };



            case 'FILTER_ORIGIN':
            const allDogs= state.allDogs
               const originFilter = 
               action.payload === 'created' 
               ? allDogs.filter(el => el.createdInDb) 
               : allDogs.filter(el => !el.createdInDb);
               return {
                ...state,
                dogs: action.payload === 'All' ? state.allDogs : originFilter,
               };

            case 'ORDER_BY_NAME':
                const sortedDogs= action.payload === 'asc' ?
                state.allDogs.sort(function(a,b){
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;

                }) :
                state.allDogs.sort(function(a,b){
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
    });
    return {
        ...state,
        dogs: sortedDogs,
    };

               case 'SEARCH_BY_NAME':
                return {
                    ...state,
                    dogs: action.payload
                }


                case 'POST_DOG':
                    return {
                        ...state,
                    }



               default:
                return state;
               
            }


            
    
        

}
export default rootReducer;