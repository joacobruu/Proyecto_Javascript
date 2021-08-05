let salir = false;
let opcion = 0;
let cantidad;
let precio = 0;
let total = 0;
let subTotal = 0;
let totalIVA = 0;
const IVA = 0.21;



function agregarProducto (cantidad, precio) {
  subTotal = cantidad * precio;
  return subTotal;
}

function calcularIVA (IVA, subTotal) {
  totalIVA = subTotal * IVA;
  return totalIVA;
}

function calcularTotal (subTotal, totalIVA) {
  total = subTotal + totalIVA;
  return  total;
}


do {
  let opcion = parseInt(prompt("Que desea añadir a su pedido? \n1) Pinta de cerveza - $250" + 
                         "\n2) Papas Fritas con cheddar - $500" +
                         "\n3) Hamburguesa - $350" +
                         "\n4) Pizza - $700" +
                         "\n5) Gaseosa - $100" +
                         "\n6) Agua mineral - #70" +
                         "\n7) Pedido Completo" +
                         "\n8) Cancelar y salir"));

switch (opcion) {
  case 1:
    cantidad = parseInt(prompt("Cantidad de pintas?"));
    subTotal += agregarProducto(cantidad, 250);
    break;

  case 2:
    cantidad = parseInt(prompt("Cantidad de papas fritas?"));
    subTotal += agregarProducto(cantidad, 500);
    break;

  case 3:
    cantidad = parseInt(prompt("Cantidad de hamburguesas?"));
    subTotal += agregarProducto(cantidad, 350);
    break;

  case 4:
    cantidad = parseInt(prompt("Cantidad de pizzas?"));
    subTotal += agregarProducto(cantidad, 700);
    break;

  case 5:
    cantidad = parseInt(prompt("Cantidad de gaseosas?"));
    subTotal += agregarProducto(cantidad, 100);
    break;

  case 6:
    cantidad = parseInt(prompt("Cantidad de aguas minerales?"));
    subTotal += agregarProducto(cantidad, 70);
    break;

  case 7:
    totalIVA += calcularIVA(IVA, subTotal);
    total += calcularTotal(subTotal, totalIVA);
    alert("Pedido realizado!" +
          "\nSubtotal: " + "$" + subTotal +
          "\nIVA (%21): " + "$" + totalIVA +
          "\nTotal: " + "$" + total);
    salir = true;
    break;

  case 8:
    alert("Pedido cancelado");
    salir = true;
    break;

  default:
    alert("Ingrese una opcion valida");
    break;
}
} while (!salir);


  
