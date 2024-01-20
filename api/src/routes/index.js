const { Router } = require('express');
const {getAllDogs, getApiInfo}= require ('./prefetching')
const {Dog, Temperaments} = require ('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Ruta que trae las razas de perros y busca por name

router.get ('/dogs', async (req, res)=> {
    const name=req.query.name
    let allDogs= await getAllDogs();
    if (name){
        let dogName= await allDogs.filter (el=> (el.name).toLowerCase().includes(name.toLowerCase()));
    dogName.length?
    res.status(200).send(dogName):
    res.status (404).send ('No está el perreque');
    }else {
        res.status (200).send (allDogs);
    }

});

//Ruta para búsqueda por ID
router.get ('/dogs/:idRaza', async (req, res) => {
    const idRaza = parseInt(req.params.idRaza)
    let totalDogs= await getAllDogs();

    const RazaById= await totalDogs.find(el => el.id === (idRaza));
    if (RazaById) {
        res.status (200).send (RazaById)
    } else {
        res.status (404).send ("No se encontró el perreque");
    }

}

);

//Ruta que trae los temperamentos

router.get ('/temperaments', async (req,res)=>{
    const apiDogs= await getApiInfo();
    const temperaments= apiDogs.map(el=>el.temperament)
    .join(',')
    .split(',')
    .map (temperament=>temperament.trim());
    
    //eliminar duplicado de temperamentos

    const uniqueTemperaments=[]
    for (let temperament of temperaments){
        if (!uniqueTemperaments.includes(temperament)){
            uniqueTemperaments.push(temperament);
        }
     };
     const sortedTemperaments = uniqueTemperaments.sort((a, b) => a.localeCompare(b));

     //Recorrer el array de temps y por cada uno generar una tabla en la DB

     sortedTemperaments.forEach(el=>{
        Temperaments.findOrCreate({
            where: {name:el}
        })
     })

     const allTemperaments= await Temperaments.findAll();
     

     res.send (allTemperaments);

})


router.post ('/dogs', async (req,res) => {
    let {
        name,
        image,
        height,
        weight,
        life_span,
        createdInDb,
        temperament,  

 }= req.body;

 
 let dogCreated= await Dog.create({
    name,
    image,
    height,
    weight,
    life_span,
    createdInDb,

 });
 
 let temperamentsDb= await Temperaments.findAll({
    where: {name : temperament},
 });

await dogCreated.addTemperaments(temperamentsDb);
res.send ('Perreque creado con éxito')

});


module.exports = router;
