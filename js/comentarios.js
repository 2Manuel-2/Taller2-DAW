/* Inicializando variable global i */
var i = 0;
/********************************************************************
* Función para incremento automático de contador que se concatenará *
* con el valor del atributo name en los campos de formulario. *
********************************************************************/
function increment(){
i += 1;
}
/********************************************************************
* Función que permite eliminar dinámicamente campos de formulario *
********************************************************************/
function removeElement(parentDiv, childDiv){
if (childDiv == parentDiv){
alert("Contenedor padre no puede ser removido.");
}
else if (document.getElementById(childDiv)){
var child = document.getElementById(childDiv);
var parent = document.getElementById(parentDiv);
parent.removeChild(child);
}
else{
alert("Contenedor hijo ha sido removido o no existe.");
return false;
}
}

/********************************************************************
* Función que será llamada cuando el usuario haga clic en el botón *
* Comentario. *
********************************************************************/
function textareaFunction(){
var r = document.createElement("span");
var y = document.createElement("textarea");
var g = document.createElement("img");
y.setAttribute("cols", "18");
y.setAttribute("placeholder", "Comentario");
g.setAttribute("src", "img/delete.png");
increment();
y.setAttribute("name", "textelement_" + i);
g.setAttribute("class", "textBr");
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
r.appendChild(g);
r.setAttribute("id", "id_" + i);
document.getElementById("myForm").appendChild(r);
}

/*******************************************************************
* Función que será llamada cuando el usuario haga clic en el botón *
* reset del formulario. *
*******************************************************************/
function resetElements(){
document.getElementById('myForm').innerHTML = '';
}