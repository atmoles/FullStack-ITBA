let arrPersona  = [];
let arrGastos   = [];
let total = 0;
let totalPC = 0;

function f(){
    const nombre = document.getElementById("nombre").value;
    const monto = document.getElementById("monto").value;
    arrPersona.push(nombre);
    arrGastos.push(parseInt(monto));
    total += parseInt(monto);
    totalPC = parseInt(total)/arrGastos.length;
    

    let demo = document.getElementById("demo");
    const p = document.createElement("p");
    p.innerHTML = nombre + ': ' + monto;
    demo.append(p);

    let demo2 = document.getElementById("demo2");
    demo2.innerHTML = total;
    demo2.append(demo2);

    let demo3 = document.getElementById("demo3");
    demo3.innerHTML = monto;
    demo3.append(demo3);
}

