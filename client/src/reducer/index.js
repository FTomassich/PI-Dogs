

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
                allDogs: action.payload, // copia del estado que siempre tenga todos los perros
                
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
                
                case 'FILTER_ORIGIN':
                    const originFilter = action.payload === 'created' 
                        ? state.allDogs.filter(el => el.createdInDb) 
                        : state.allDogs.filter(el => !el.createdInDb);
                    
                    return {
                        ...state,
                        dogs: action.payload === 'All' ? state.allDogs : originFilter,
                    };
                // case 'FILTER_ORIGIN':
                //     const allDogs = state.allDogs;
                
                //     // Verificar si hay temperamentos seleccionados
                //     const hasTemperamentsFilter = state.dogs.length < state.allDogs.length;
                
                //     // Inicializar filteredDogs con el valor actual de state.dogs o state.allDogs
                //     let filteredDogs1 = hasTemperamentsFilter ? state.dogs : allDogs;
                
                //     // Aplicar el filtro de origen solo si no se está mostrando todos los perros
                //     if (action.payload !== 'All') {
                //         // Actualizar filteredDogs en lugar de redeclararlo con let
                //         filteredDogs1 = action.payload === 'created' 
                //             ? filteredDogs1.filter(el => el.createdInDb)
                //             : filteredDogs1.filter(el => !el.createdInDb);
                //     }
                
                //     return {
                //         ...state,
                //         dogs: filteredDogs1,
                //     };

               case 'ORDER_BY_NAME':
                const dogsToSort = state.dogs.length > 0 ? state.dogs : state.allDogs;
            
                const sortedDogs = dogsToSort.slice().sort((a, b) => {
                    if (action.payload === 'asc') {
                        return a.name.localeCompare(b.name);
                    } else {
                        return b.name.localeCompare(a.name);
                    }
                });
            
                return {
                    ...state,
                    dogs: sortedDogs,
                };

                case 'FILTER_TEMPS':
                    
                    const filteredDogs = state.allDogs.filter((dog) => {
                        // Verifica si el temperamento seleccionado está en los temperamentos del perro
                        return dog.temperament && dog.temperament.includes(action.payload);
                      });
                    
                      return {
                        ...state,
                        dogs: filteredDogs,
                      };



            
    //         case 'ORDER_BY_NAME':
    //             const sortedDogs= action.payload === 'asc' ?
    //             state.allDogs.sort(function(a,b){
    //                 if (a.name > b.name) {
    //                     return 1;
    //                 }
    //                 if (b.name > a.name) {
    //                     return -1;
    //                 }
    //                 return 0;

    //             }) :
    //             state.allDogs.sort(function(a,b){
    //                 if (a.name > b.name) {
    //                     return -1;
    //                 }
    //                 if (b.name > a.name) {
    //                     return 1;
    //                 }
    //                 return 0;
    // });
    // return {
    //     ...state,
    //     dogs: sortedDogs,
    // };

               case 'SEARCH_BY_NAME':
                return {
                    ...state,
                    dogs: action.payload
                }


                case 'POST_DOG':
                    return {
                        ...state,
                    }


                    // case 'ORDER_BY_WEIGHT':
                    //     const dogsToSortByWeight = state.dogs.length > 0 ? state.dogs : state.allDogs;
                    
                    //     const sortedDogsByWeight = dogsToSortByWeight.slice().sort((a, b) => {
                    //         // Extraer los valores numéricos de la cadena de peso
                    //         const extractWeight = (dog) => {
                    //             const [min, max] = dog.weight.split('-').map(Number);
                    //             return (min + max) / 2; // Puedes ajustar esto para elegir cómo comparar los pesos
                    //         };
                    
                    //         // Comparar los pesos
                    //         return extractWeight(a) - extractWeight(b);
                    //     });
                    
                    //     return {
                    //         ...state,
                    //         dogs: sortedDogsByWeight,
                    //     };
                    case 'ORDER_BY_WEIGHT':
  const dogsToSortByWeight = state.dogs.length > 0 ? state.dogs : state.allDogs;

  const sortedDogsByWeight = dogsToSortByWeight.slice().sort((a, b) => {
    const extractWeight = (dog) => {
      const [min, max] = dog.weight.split('-').map(Number);
      return (min + max) / 2;
    };

    // Determinar si se debe ordenar de forma ascendente o descendente
    const orderMultiplier = action.payload === 'asc' ? 1 : -1;

    // Comparar los pesos con el multiplicador de orden
    return (extractWeight(a) - extractWeight(b)) * orderMultiplier;
  });

  return {
    ...state,
    dogs: sortedDogsByWeight,
  };


  case 'RESET_DETAIL':
  return {
    ...state,
    detail: [], // Restablece el estado del detalle a un array vacío
  };

               default:
                return state;
               
            }

            


            
    
        

}
export default rootReducer;