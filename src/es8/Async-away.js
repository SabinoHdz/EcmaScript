const helloWorld=()=>{
    return new Promise((resolve,reject)=>{
        (true)
            ?   setTimeout(()=>resolve('Hello World'),300)
            : reject(new Error('Test Error'));
    })
}

const helloAsync=async()=>{
    const hello =await helloWorld();
    console.log(hello);
}

helloAsync();

const helloAsync2=async()=>{
   try {
    const hello =await helloWorld();
    console.log(hello);
   } catch (error) {
       return error;
   }
}