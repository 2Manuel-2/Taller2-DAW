//Redondeando el precio a mostrar a dos cifras decimales
function Decimal(val, n) {
    n = n || 2;
    var str = "" + Math.round(parseFloat(val) * Math.pow(10, n));
    while (str.length <= n) {
        str = "0" + str;
    }
    var pt = str.length - n;
    return str.slice(0, pt) + "." + str.slice(pt);
}
function getRadioVal(form, name) {
    var radios = form.elements[name];
    var val;
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked == true) {
            val = radios[i].value;
            break;
        }
    }
    return val;
}
//Calcula el subtotal de ingredientes seleccionados
function ExtrasOrden(e) {
    var form = this.form;
    var val = parseFloat(form.elements['tops_tot'].value);
    if (this.checked == true) {
        val += parseFloat(this.value);
    } else {
        val -= parseFloat(this.value);
    }
    form.elements['tops_tot'].value = Decimal(val);
    Total(form);
}
//Obtiene el subtotal del valor de la pizza de acuerdo al tamaño
function ObtenerPrecio(e) {
    this.form.elements['sz_tot'].value = parseFloat(this.value);
    Total(this.form);
}
//Calcula el precio total a cancelar por la pizza tomando en cuenta
//los subtotales de acuerdo al tamaño y a los ingredientes seleccionados
function Total(form) {
    var sz_tot = parseFloat(form.elements['sz_tot'].value);
    
    var tops_tot = parseFloat(form.elements['tops_tot'].value);
    // para sacar el iva
    var iva = (sz_tot + tops_tot)*0.13;
    var totaltt = sz_tot + tops_tot + iva;
    form.elements['subtotal'].value = Decimal(sz_tot + tops_tot);
    //para mostrar el precvio total con iva
    form.elements['total'].value = Decimal(totaltt);
}
(function () {
    var form = document.getElementById('polloForm');
    var el = document.getElementById('extras');
    // Determinar los ingredientes seleccionados en las casillas de verificación
    var tops = el.getElementsByTagName('input');
    for (var i = 0, len = tops.length; i < len; i++) {
        if (tops[i].type === 'checkbox') {
            tops[i].onclick = ExtrasOrden;
        }
    }
    var sz = form.elements['combo'];
    for (var i = 0, len = sz.length; i < len; i++) {
        sz[i].onclick = ObtenerPrecio;
    }
    // set sz_tot to value of selected
    form.elements['sz_tot'].value = Decimal(parseFloat(getRadioVal(form, 'combo')));
    Total(form);
})();