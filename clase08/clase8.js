let productos = ["gaseosa", "remera", "moto"]

for(let i = 0; i<productos.length; i++){
    console.log (productos)

    let creacion = document.createElement("p")
    creacion.innerText="producto";
    document.body.appendChild(creacion);

    console.log(creacion)
}
