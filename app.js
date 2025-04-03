let nombre = "pepito"

console.log("hola mundo");

document.getElementById("h3").innerHTML = "anio 2025"




//console.log(perritos.length)


////perritos[5] = "blanquita"


//console.log(perritos);

//perritos[perritos.length]= "thor"
//console.log(perritos);


// for (let i=0;i<perritos.length;i++) {
//     console.log(perritos[i]);
// }

let alumno = {
    nombre : "pepe",
    edad: 20,
    legajo:4747,
    materias:["prog 3","base de datos 2","ingles 2","metodologia"],
    alumnoRegular: true,
    notas: [8,7,9,6],   
    dormir: function(){
        console.log("zzzzzzzz");
    },
    mascotas:[{
        nombreMascota:"firu",
        raza:"gato siamess",
        edadMascota: 3,
        vacunas:[{
            nombreVacuna:"sputnik",
            cantidad:"500ml"
        },
    {
        nombreVacuna:"rabisin",
        cantidad:"500ml"
    }]
    },{
        nombreMascota:"toby",
        raza:"tortuga",
        edadMascota: 5,
        vacunas:[{
            nombreVacuna:"sputnik",
            cantidad:"500ml"
        },
    {
        nombreVacuna:"rabisin",
        cantidad:"500ml"
    }]
    }]

}
let nombreVacuna2doAnimal = alumno.mascotas[1].vacunas[1].nombreVacuna
//console.log(nombreVacuna2doAnimal);



let perritos = ["firu","toby","toto","mia","toto"]



// for (let i = 0; i < perritos.length; i++) {
//    if (perritos[i] === "toby") {
//     console.log("el perrito es toby");
//    }else {
//     console.log("toby se fue");
//    }
    
// }

//if ternario
perritos.length > 0 ? console.log("si hay perrenques") : console.log("no hay perrenques");

if (perritos.length > 0) {
    //console.log("si hay perrenques") 
}else {
    //console.log("no hay perrenques")
}


let resultado = perritos.filter(perrito=> perrito === "toto")
//console.log(resultado);


let resultado2 = perritos.includes("miahffhd")
//console.log(resultado2);


//destructuring


let numeros = [4,-10,7,54]

let number1 = numeros[1]

let [a,b,c,d] = numeros

let suma = b+c 
//console.log(suma);


let persona = {
    nombre2 :"juan",
    edad: 25
}

let {nombre2,edad} = persona
//console.log(edad);


let gatitos2 = ["michifu","tito","peke"]

let perritos2 = ["toby","mila","nesa"]


let animales = gatitos2.concat(perritos2)

console.log(animales);

let animales2 = [...gatitos2,perritos2]

//todo lo que tiene dentro




let alumnoNuevo = {...alumno,estadoCivil:"soltero"}

console.log(alumnoNuevo);



console.log("agregue GIT");
