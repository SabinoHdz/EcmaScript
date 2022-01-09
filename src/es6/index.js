
function  nameFunction(name,age,country) {
    var name=name||"Sabino";
    var age=age||"23";
    var country=country|| "MX"; 
}

//es6
function namefunction2(name="Sabino",age=23,country="México") {
    console.log(name,age, country);
}

//Se le puede declarar parametros y asignar un valor por deafult
namefunction2();
namefunction2("Juan Jose");
namefunction2("Perla",45);
namefunction2("Santiago",18,"EUA");