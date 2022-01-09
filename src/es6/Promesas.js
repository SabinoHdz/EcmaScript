const helloPromise=()=>{

    /**
     * Resolve:Va a resolver
     * Reject: Va hacer rechasada
     * then(): se obtiene la respuesta ejecutada del resolve
     * catch(): se obtiene el error del reject
     */
    return new Promise((resolve,reject)=>{
        if(false){
            resolve("Hey, Resolve ejecute!")
        }else{
            reject("Ups!, Reject ejecute!");
        }
    });
}
helloPromise()
.then(response=>console.log(response))
.catch(error=>console.log(error));

const empleados=[
{
    id:1,
    nombre:"Gerardo"
},
{
    id:2,
    nombre:"Maria"
},
{
    id:3,
    nombre:"Julio"
}
];

const salarios=[
    {
        id:1,
        saliario:1000
    },
    {
        id:2,
        salario:1500
    }
    ];

    const getEmpleado=(id)=>{
        return new Promise((resolve,reject)=>{
            const empleado=empleados.find(e=>e.id===id)?.nombre;
            // if (empleado) {
            //     resolve(empleado);
            // } else {
            //     reject(`No existe el empleado con id: ${id}`);
            // }
            (empleado)
                ?resolve(empleado)
                :reject(`No existe el empleado con id: ${id}`);
        });
    }
    const getSalario=(id)=>{
        return new Promise((resolve,reject)=>{
            const salario=salarios.find(s=>s.id===id)?.salario;
            (salario)
                ?resolve(salario)
                :reject("El salario del empleado no existe");
        })
    }
// getEmpleado(2)
//     .then(empleado=>console.log(empleado))
//     .catch(error=>console.log(error));
// getSalario(2)
//     .then(salario=>console.log(salario))
//     .catch(error=>console.log(error));

const id=4;
getEmpleado(id)
    .then(empleado=>getSalario(id)
        .then(salario=>{
            console.log(`El empleado ${empleado} tiene un salario  de ${salario}`);
        })
        .catch(error=>{"El empleado no tiene un salario"})
    )
    .catch(error=>console.log("El empleado no existe"));
