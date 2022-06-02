let contadorTabla=0;
let costoTotal=0;
let totalEnProductos=0;

let element = document.getElementById("totalPrecio");
element.innerHTML="Total en precio:";

let txtNombre = document.getElementById("Name");
// txtNombre.value="Leche Semidescremada";

let txtNumber = document.getElementById("Number");

let total= document.getElementById("precioTotal");

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

function validarNombre(){
    if(txtNombre.value.length <3){
        return false;
    }
    return true;
}

function validarCantidad(){
    if(txtNumber.value.length==0){
        return false;
    }
    if(isNaN(txtNumber.value)){
        return false;
    }
    if(parseFloat(txtNumber.value)<=0){
        return false;
    }
    return true;
}

agregar.addEventListener("click", (event)=>{
    event.preventDefault();
    if((!validarNombre())||(!validarCantidad())){

        let lista="";

        if (!validarNombre()){
            txtNombre.style.border="red thin solid";
            lista+="<li>Se debe escribir un nombre válido</li>"
        }
        if (!validarCantidad()){
            txtNumber.style.border="red thin solid";
            lista+="<li>Se debe escribir una cantidad válida</li>"
        }


        document.getElementById("alertValidacionesTexto").innerHTML=
        `Los campos deben ser llenados correctamente.
        <ul>
        ${lista}
        </ul>
        `;
        document.getElementById("alertValidaciones").style.display="block";

        setTimeout(function(){
            document.getElementById("alertValidaciones").style.display="none";
        },5000);
        return false;
    }
    txtNombre.style.border="";
    txtNumber.style.border="";
    // document.getElementById("alertValidaciones").style.display="none";
    contadorTabla++;
    document.getElementById("contadorProductos").innerHTML=contadorTabla;
    localStorage.setItem("contadorProductos",contadorTabla);
    let precio = (Math.floor((Math.random()*50)*100))/100;
    let cantidad = parseFloat(txtNumber.value);
    totalEnProductos+=Math.ceil(cantidad);
    document.getElementById("productosTotal").innerHTML=totalEnProductos;
    localStorage.setItem("productosTotal",totalEnProductos);
    costoTotal+=(precio*cantidad);
    total.innerHTML=`$ ${costoTotal.toFixed(2)}`;
    localStorage.setItem("precioTotal",costoTotal.toFixed(2));
        let temp =`<tr>
            <th scope="row">${contadorTabla}</th>
            <td>${txtNombre.value}</td>
            <td>${txtNumber.value}</td>
            <td>$ ${precio}</td>
         </tr>`

         cuerpoTabla[0].innerHTML+=temp;
         txtNombre.value="";
         txtNumber.value="";
         txtNombre.focus();
         


    } 
);

txtNombre.addEventListener("blur",(event)=>{
    event.target.value =event.target.value.trim();
});

txtNumber.addEventListener("blur",(event)=>{
    event.target.value =event.target.value.trim();
});

window.addEventListener("load",function(){
    if(localStorage.getItem("contadorProductos")!=null){
        contadorTabla=parseInt(localStorage.getItem("contadorProductos"));
        document.getElementById("contadorProductos").innerHTML=contadorTabla;
    }
    
    if(localStorage.getItem("productosTotal")!=null){
        totalEnProductos=parseInt(localStorage.getItem("productosTotal"));
        document.getElementById("productosTotal").innerHTML=totalEnProductos;
    }
    if(localStorage.getItem("precioTotal")!=null){
        costoTotal=parseInt(localStorage.getItem("precioTotal"));
        document.getElementById("precioTotal").innerHTML=costoTotal;
    }
});