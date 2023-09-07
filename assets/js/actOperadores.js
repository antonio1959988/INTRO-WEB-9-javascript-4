function celsiusAFarenheit(grados){
    let farenheit = (grados * 1.8) + 32;
    return console.log("La respuesta es: " + farenheit + "°F")
}

function farenheitACelsius(grados){
    let celsius = (grados -32) / 1.8;
    return console.log("La respuesta es: " + celsius + "°C")
}



let opcion = parseInt(prompt("¿Que conversion deseas realizar? \n 1. Celsius a Farenheit \n 2. Farenheit a celsius"));

if(opcion == 1){
    let c = parseInt(prompt("Por favor, digita la temperatura en °C"));
    celsiusAFarenheit(c);
}else if(opcion == 2){
    let f = parseInt(prompt("Por favor, digita la temperatura en °F"));
    farenheitACelsius(f);
}else{
    console.log("ERROR opcion no existente");
}
