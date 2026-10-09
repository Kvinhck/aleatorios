function generarNumeroAleatorios(){
    let numero = Math.floor(Math.random() * 100) + 1;
    return numero;
}

function generarAleatorios(){
    let aleatorios=[];
    let alea;
    let numero=recuperarInt("txtNumero")
    if(numero>=5 && numero<=20){
        for(let i=0;i<numero;i++){
            alea=generarNumeroAleatorios();
            aleatorios.push(alea);
        }
        mostrarResultados(aleatorios);
    } else{
        console.log("Error, el numero debe estar entre 5 y 20");
    }
    
}

function mostrarResultados(arregloNumeros){
    let cmpTabla=document.getElementById("divTabla");
    let contenido="<table><tr><th>POSICION</th><th>NUMERO</th></tr>";
    for(let i=0;i<arregloNumeros.length;i++){
        contenido+="<tr><td>"+i+"</td><td>"+arregloNumeros[i]+"</td></tr>";
    }
    contenido+="</table>";
    cmpTabla.innerHTML=contenido;
}