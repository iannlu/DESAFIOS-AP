console.log ("LISTA ANTES DE LA VENTA")

const productos = ["Computadora", "Tablet", "Play5", "206Peugeot", "Iphone15", "PcGamer"]

for(let i = 0; i <= 5; i++) {
    console.log (productos[i]);
}


console.log ("LISTA DESPUES DE LA VENTA")

productos.pop();
for(let i = 0; i <=5; i++){
    console.log (productos[i])
}