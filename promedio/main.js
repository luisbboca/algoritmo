
let notas;
let promedio;
let suma=0;
let nNotas=parseInt(prompt("Ponga la cantidad de notas que desea promediar"))
for(i=0; i < nNotas; i++){
let notas=parseInt(prompt("Introduzca la Nota "+ i));
suma = suma + notas;
}


function promedioTotal(suma, numNotas){
    promedio = suma / numNotas;
    return promedio
}
alert("el resultado es " + promedioTotal(suma, nNotas));

if (promedio>=6) {
   alert("APROBADO");
}else{
    alert("DESAPROBADO");
}