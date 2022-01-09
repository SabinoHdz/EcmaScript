const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
  };

  //Operador de reposo
  let {name,...all}=obj;

  console.log(name,all);
/**
 * Porpagation Properties
 */
  const obj1 = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
  };

  const obj2 = {
    ...obj1,
    country: 'MX'
  };

  console.log(obj2);



  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };


  helloWorld()
  .then(result => console.log('result -> ', result))
  .catch(err => console.log('err -> ', err))
  .finally(() => console.log('finalizó'));


  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);