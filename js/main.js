let element = document.getElementById("totalPrecio");
element.innerHTML="Total en precio:";

let txtNombre = document.getElementById("Name");
// txtNombre.value="Leche Semidescremada";

let txtNumber = document.getElementById("Number");

// let campos = document.getElementsByClassName("campo");
// campos[0].value = "Leche descremada deslactosada light=Agua";
// console.log(campos[0].value);
// console.log(campos);

// for (let i=0; i<campos.length;i++){
//     campos[i].style.border="red thin solid";
// }

// let spans = document.getElementsByTagName("span");
// for (let i=0;i<spans.length;i++){
//     console.log(spans[i].textContent);
// }

//tablaListaCompras

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

// cuerpoTabla[0].innerHTML=`<tr>
// <th scope="row">1</th>
// <td>Leche descremada (1Ltr/cu)</td>
// <td>3</td>
// <td>$ 23.00</td>
// </tr>`;

let agregar =document.getElementById("btnAgregar");

//Opcion recomendada de evento de boton

agregar.addEventListener("click", (event)=>{
    let precio = Math.random()*50;
        let temp =`<tr>
            <th scope="row">1</th>
            <td>${txtNombre.value}</td>
            <td>${txtNumber.value}</td>
            <td>${precio}</td>
         </tr>`

         cuerpoTabla[0].innerHTML+=temp;
         txtNombre.value="";
         txtNumber.value="";
         


    } 
);