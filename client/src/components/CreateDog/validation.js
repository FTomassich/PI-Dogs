const dogValidator = (data) => {
    let errors = {};
  
    if (!data.name.trim()) {
      errors.name = '⚠Ingresa un nombre para el perro.';
   
    } else if (!/^[a-zA-Z\s]+$/.test(data.name)) {
        errors.name = '⚠ El nombre debe contener solo letras.';
   
   
    } else if (data.name.length < 3 || data.name.length > 15) {
        errors.name = '⚠ El nombre debe tener entre 3 y 15 caracteres.';
      }

    
  
    if (!data.weight.trim()) {
      errors.weight = '⚠Ingresa el peso en formato min-max.';
    } else if (!/^\d+-\d+$/.test(data.weight)) {
      errors.weight = '⚠El peso debe tener el formato correcto (min-max).';
    } else {
        const [min, max] = data.weight.split('-').map(Number);
    
        if (min >= max) {
          errors.weight = '⚠El peso mínimo debe ser menor que el peso máximo.';
        }
      }
  
    // Validación altura
    if (!data.height.trim()) {
        errors.height = '⚠Ingresa la altura en formato min-max.';
      } else if (!/^\d+-\d+$/.test(data.height)) {
        errors.height = '⚠La altura debe tener el formato correcto (min-max).';
      } else {
          const [min, max] = data.height.split('-').map(Number);
      
          if (min >= max) {
            errors.height = '⚠La altura mínima debe ser menor que la altura máxima.';
          }
        }


        //validación imágen
        if (!data.image.trim()) {
            errors.image = '⚠ Ingresa una URL de imagen para el perro.';
          } else if (!/^https?:\/\/\S+$/.test(data.image)) {
            errors.image = '⚠ Ingresa una URL de imagen válida.';
          }
  
    return errors;
  };
  
  export default dogValidator;




// const validator= (data) => {
//     let errors={}
   
//      if(!data.email.includes('@')){
//        errors.e1= 'Ingresa un email válido.'
//      }
//      if(!data.email){
//        errors.e2= 'Ingresa un email.'
//      }
//      if (data.email.length>35){
//        errors.e3= 'Debe tener menos de 36 caracteres.'
//      }
   
//      if(!/\d/.test(data.password)){
//        errors.p1= 'Al menos un número.'
//      }
   
//      if(data.password.length < 6 || data.password.length > 10 ) {
//         errors.p2= 'Debe tener más de 6 y menos de diez caracteres.'
//      }
   
//     return errors;
   
   
//    }
//    export default validator;