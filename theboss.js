const elBoss = {
  nombre: "Jose Luis",
  edad: 194,
  poderes: [
    {
      nombre: "Paranoia",
      description: "intentandome escapar de esta paranoia",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la paranoia",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la paranoia",
          },
        },
      ],
    },
    {
      nombre: "Petrificasió",
      description: "Te mira y te petrifica",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la petrificasió",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la petrificasió",
          },
        },
      ],
    },
    {
      nombre: "Fuego",
      description: "Pues eso, fuego",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen del fueguito",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen del fueguito",
          },
        },
      ],
    },
  ],
  familiares: [
    {
      nombre: "Julian",
      edad: 342,
      parentesco: "Primo",
    },
    {
      nombre: "Paquito",
      edad: 312,
      parentesco: "Tío",
    },
    {
      nombre: "Emma",
      edad: 13,
      parentesco: "Sobrina",
    },
    {
      nombre: "Julia",
      edad: 100,
      parentesco: "Hermana",
    },
  ],
  reto: [
    [
      {
        sigueElReto: [
          {
            sigueElReto2: {
              sigueElReto3: {
                pareceQueSabesBucearEntreObjetos: {
                  definitivamenteSabes: [
                    "Jose",
                    "Luis,",
                    "te",
                    "miro",
                    "y",
                    23121,
                    "te",
                    "destruyo",
                    {
                      mensajeFinal:
                        "Enhorabuena!, si has llegado hasta aquí te costará mucho menos tratar los datos de la pokeapi en el proyecto final de JavaScript!",
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  ],
};

// EJERCICIO

// tenemos un objeto llamado elBoss, como hemos visto en clase con ejemplos muy sencillitos
// podemos recorrer arrays... bucear entre objetos... y tratar datos.
// Lo que tendrás que hacer a continuación solo es complicar un poco más lo que hemos visto antes,
// pero por mucho que te pueda asustar elBoss, es lo mismo!

// Requisitos para matar a elBoss

// vamos a imaginarnos que vamos a hablar con el mediante console.logs, cada vez que pongamos
// un console.log será como hablar con el.

// entonces: // le vamos a decir = console.log()
// 1: le vamos a decir "{su nombre}, te conozco y no me das ningún miedo!";
console.log(elBoss.nombre + ', te conozco y no me das ningún miedo!');
// 2: le vamos a decir "conozco tus poderes y lo que hacen!"
console.log('conozco tus poderes y lo que hacen!');
// 3: le vamos a decir "tu primer poder es {su primer poder} y hace {la descripción de su poder}"
for (let i = 0; i < elBoss.poderes.length; i++){
  const poder = elBoss.poderes[i];
  if (i == 0){ 
  console.log('tu primer poder es ' + poder.nombre + ' y hace ' + poder.description);
  } 
//"tu segundo poder es {su segundo poder} y hace {la descripción de su poder}"
  else if (i == 1){
  console.log('tu segundo poder es ' + poder.nombre + ' y hace ' + poder.description);
  }
//"tu tercero poder es {su tercero poder} y hace {la descripción de su poder}"
  else {
  console.log('tu tercer poder es ' + poder.nombre + ' y hace ' + poder.description);
  }
}
// 4: le vamos a decir "También se tu punto más debil, tus familiares, y les conozco..."
console.log('También se tu punto más debil, tus familiares, y les conozco..');
// "conozco a tu {parentesco del primer familiar} {nombre del primer familiar}"
for (let i = 0; i < elBoss.familiares.length; i++){
  const familiar = elBoss.familiares[i];
  if (i == 0){ 
  console.log('conozco a tu ' + familiar.parentesco + ' ' + familiar.nombre);
  }
// "conozco a tu {parentesco del segundo familiar} {nombre del segundo familiar}"
  else if (i == 1){
  console.log('conozco a tu ' + familiar.parentesco + ' ' + familiar.nombre);
  }
// "conozco a tu {parentesco del tercero familiar} {nombre del tercero familiar}"
  else if (i == 2){
  console.log('conozco a tu ' + familiar.parentesco + ' ' + familiar.nombre);
  }
// "y conozco a tu {parentesco del cuarto familiar} {nombre del cuarto familiar}"
  else {
  console.log('conozco a tu ' + familiar.parentesco + ' ' + familiar.nombre);
  }
}
// 5: para matarlo tendrás que superar el reto y para ello tendrás que decirle las palabras
// mágicas para que el mensaje quede tal que así "Jose luis, te miro y te destruyo".
/*let palabra1 = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[0];
let palabra2 = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[1];
let palabra3 = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[2];
let palabra4 = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[3];
let palabra5 = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[4];
let palabra6 = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[6];
let palabra7 = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[7];
console.log(palabra1 + ' ' + palabra2 + ' ' + palabra3 + ' ' + palabra4 + ' ' + palabra5 + ' ' + palabra6 + ' ' + palabra7)*/

let mensajeCompleto = '';
for (let i = 0; i < elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes.length; i++){
  const mensaje = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[i];
  if (i < 5){
    console.log(mensaje);
  } else if (i > 5 && i < 8){
    console.log(mensaje);
  }
}
// Por último, como bonus, mostraremos por pantalla las urls de todas las imágenes de los poderes.
for (let i = 0; i < elBoss.poderes.length; i++){
  const poder = elBoss.poderes[i];
  console.log(poder.imagenes);
}
// haremos la media de las edades de los familiares de elBoss.
let sumaEdades = 0;
for (let i = 0; i < elBoss.familiares.length; i++){
 // console.log(elBoss.familiares[i].edad);
  const familiar = elBoss.familiares[i];
  //console.log(familiar.edad);
  sumaEdades += familiar.edad;
}
console.log(sumaEdades);
let mediaEdades = sumaEdades/elBoss.familiares.length;
console.log(mediaEdades);
// y mostraremos por pantalla el mensajeFinal.
console.log(elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[8].mensajeFinal);
let mensajeFinal = '';
for (let i = 0; i < elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes.length; i++){
  const mensaje = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[i];
  if (i > 7){
    console.log(mensaje);
  } 
}
