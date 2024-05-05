let NombreProducto = ("alfajores")
let PrecioUnitario = "200";
let CantidadDeseada = prompt("Cuantos " + NombreProducto + " vas a llevar?")


if(CantidadDeseada >= 5 )
    {
        let total =(PrecioUnitario * CantidadDeseada)
        let Descuento = (total * 0.1 )
        let Resto = (total - Descuento)
        alert("El total a pagar es de " + Resto)   
    }
else{
    let total2 =(PrecioUnitario * CantidadDeseada)
    alert ("tu monto a pagar es de " + total2)
}
    