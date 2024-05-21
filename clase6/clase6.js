let producto = {
    nombre : "gorra",
    precio : "$2000",
    CantidadDisponible : 5,
}



producto.nombre = "zapatilla";

console.log (producto.nombre);
producto.categoria = "calzado" ;

delete producto.CantidadDisponible;

console.log(producto);

