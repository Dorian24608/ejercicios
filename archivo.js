console.log("Hola, mundo");
console.time("contador");
console.timeLog("contador");
console.timeEnd("contador");
function rand(n){
// creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
 return(Math.floor(Math.random() * n + 1 ));
}
//guardas imagenes en el array
var cambia_imagen = new Array();
cambia_imagen[0] = "images (78).jpeg";
cambia_imagen[1] = "images (79).jpeg";
cambia_imagen[2] = "images (80).jpeg";
cambia_imagen[3] = "images (81).jpeg";
cambia_imagen[4] = "images (82).jpeg";
cambia_imagen[5] = "images (83).jpeg";
cambia_imagen[6] = "images (84).jpeg";
cambia_imagen[7] = "images (85).jpeg";
cambia_imagen[8] = "images (86).jpeg";
cambia_imagen[9] = "images (87).jpeg";
cambia_imagen[10] = "images (88).jpeg";
cambia_imagen[11] = "images (89).jpeg";
cambia_imagen[12] = "images (90).jpeg";
cambia_imagen[13] = "descarga (2).jpeg";
cambia_imagen[14] = "descarga (3).jpeg";
cambia_imagen[15] = "descarga (4).jpeg";
cambia_imagen[16] = "descarga (5).jpeg";
cambia_imagen[17] = "descarga (6).jpeg";
cambia_imagen[18] = "descarga (7).jpeg";
cambia_imagen[19] = "images (4).png";
cambia_imagen[20] = "images (5).png";
cambia_imagen[21] = "images (95).jpeg";
cambia_imagen[22] = "images (87).jpeg";
//la función para que al clickear establezca el source del tag imagem que tiene id "ia" (Imagen aleatoria)
//como no son tantas, puede que alguna vez se repita 2 veces la misma
//incluso, si usamos numeros para las imágenes, la script puede ser más sencilla


function cambiar(){
     document.getElementById("ia").src = cambia_imagen[rand(22)-0];
}
 function alertar(texto) {
       alert(texto);
    }