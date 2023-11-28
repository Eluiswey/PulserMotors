function js_style() 
{
//font styles added by JS:
text.style.fontSize = "14pt";
text.style.fontFamily = "Comic Sans MS";
text.style.color = "green";
}
function insert_Row()
{
var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
}
function changeContent()
{
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("Input the Column number(0,1)","0");
content = window.prompt("Input the Cell content");  
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}
function volume_sphere()
 {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
}

// Funcion para determinar que navegador se esta utilizando
 //
 function Is () {
 var agent = navigator.userAgent.toLowerCase();
 this.major = parseInt(navigator.appVersion);
 this.minor = parseFloat(navigator.appVersion);
 this.ns = ((agent.indexOf('mozilla')!=-1) && ((agent.indexOf('spoofer')==-1) &&
(agent.indexOf('compatible') == -1)));
 this.ns2 = (this.ns && (this.major == 2));
 this.ns3 = (this.ns && (this.major == 3));
 this.ns4b = (this.ns && (this.minor < 4.04));
 this.ns4 = (this.ns && (this.major >= 4));
 this.ie = (agent.indexOf("msie") != -1);
  this.ie3 = (this.ie && (this.major == 2));
 this.ie4 = (this.ie && (this.major >= 4));
 this.op3 = (agent.indexOf("opera") != -1);
 this.win = (agent.indexOf("win")!=-1);
 this.mac = (agent.indexOf("mac")!=-1);
 this.unix = (agent.indexOf("x11")!=-1);
 }
 var is = new Is ();
 // Se habilitan una serie de variables que se utilizaran para manejar
 // el documento y las capas de forma independiente del navegador
 //
 if (is.ns4) {
 doc = "document";
 sty = "";
 htm = ".document"
 } else if(is.ie4) {
 doc = "document.all";
 sty = ".style";
 htm = ""
 }
 // Funcion para la precarga de imagenes
 //
 function preCarga () {
 // Se cargan las imagenes desde 00.gif hasta 09.gif
 //
 for (i=0;i<=9;i++) {
 eval("num" + i + "=new Image()");
 eval("num" + i + ".onload=(is.ns4b)?testCarga():testCarga");
 eval("num" + i + ".src='0" + i + ".gif'");
 }
 // Se cargan las imagenes desde 00.gif hasta 09.gif
 //
 for (i=10;i<=12;i++) {
 eval("num" + i + "=new Image()");
 eval("num" + i + ".onload=(is.ns4b)?testCarga():testCarga");
 eval("num" + i + ".src='" + i + ".gif'");
 }
 // Se cargan las imagenes en positivo y negativo del boton
 // de avance
 //
 masPositivo=new Image();
 masPositivo.onload=(is.ns4b)?testCarga():testCarga;
 masPositivo.src="mas-positivo.gif"
masNegativo=new Image();
 masNegativo.onload=(is.ns4b)?testCarga():testCarga;
 masNegativo.src="mas-negativo.gif"
 }
 totalImagenes=0;
 // Funcion que controla el proceso de carga
 //
 function testCarga() {
 totalImagenes++;
 // Si se han cargado todas las imagenes iniciar la demo
 //
 if (totalImagenes==15) {
 estableceCapas();
 capaNumeros.visibility="visible";
 animaNumeros(1);
 }
 }
 // Funcion que hace la animacion de los numeros
 //
 function animaNumeros(frame) {
 var siguiente;
 eval("capaImgNumeros.imgNumero.src=num"+ frame +".src");
 if (frame<8) {
 // La animacion para el 5
 //
 siguiente=frame+1;
 eval("setTimeout('animaNumeros(" + siguiente + ")',110)");
 } else if (frame<12) {
 // La animacion para el resto de numeros
 //
 siguiente=frame+1;
 eval("setTimeout('animaNumeros(" + siguiente + ")',200)");
 } else {
 // Se ocultan los numeros y se muestra la explicacion no 1. //
 setTimeout("capaNumeros.visibility='hidden'",100);
 setTimeout("capaExplicacion1.visibility='visible'",100);
 }
 }
 // Funcion que oculta la explicacion no 1
 //
 function animaCapaArriba1 () {
 var y_pos = parseInt (capaExplicacion1.top);
 if (y_pos>-150) {
 capaExplicacion1.top=y_pos-4;
 setTimeout("animaCapaArriba1()",1);
 } else {
// Se muestra la explicacion no 2
 //
 capaExplicacion2.visibility="visible";
 animaCapaLado1();
 }
}
// Funcion que anima la explicacion no 2
 //
 function animaCapaLado1 () {
 var x_pos = parseInt (capaExplicacion2.left);
 if (x_pos<0) {
 capaExplicacion2.left=x_pos+4;
 setTimeout("animaCapaLado1()",1);
 }
 }
 // Funcion que inicia la explicacion del boton
 //
 function explicacionBoton() {
 setTimeout("animaCapaLado2()",1);
 }
 // Funcion que oculta la explicacion no 2
 //
 function animaCapaLado2 () {
 var x_pos = parseInt (capaExplicacion2.left);
 if (x_pos>-320) {
 capaExplicacion2.left=x_pos-4;
 setTimeout("animaCapaLado2()",1);
 } else {
 // Se inicia la explicacion no 3
 //
 capaExplicacion3.visibility="visible";
 animaCapaArriba2();
 }
 }
 // Funcion que anima la explicacion no 3
 //
 function animaCapaArriba2 () {
 var y_pos = parseInt (capaExplicacion3.top);
 if (y_pos<0) {
 capaExplicacion3.top=y_pos+4;
 setTimeout("animaCapaArriba2()",1);
 }
 }
 // Funcion que oculta la ultima explicacion y muestra el final
 //
 function fin() {
 capaExplicacion3.visibility="hidden";
 capaFin.visibility="visible";
 }
 // Funcion que crea los accesos a las capas y sus elementos
 //
 function estableceCapas() {
 // Se crea el acceso a las capas
 //
 capaNumeros = eval(doc + '["cuentaAtras"]' + sty);
 capaExplicacion1 = eval(doc + '["Explicacion1"]' + sty);
 capaExplicacion2 = eval(doc + '["Explicacion2"]' + sty);
 capaExplicacion3 = eval(doc + '["Explicacion3"]' + sty);
 capaFin = eval(doc + '["Fin"]' + sty);
 // Se crea el acceso a los elementos de las capas
 //
 capaImgNumeros = eval(doc + '["cuentaAtras"]' + '.document');
 capaImgExplicacion1 = eval(doc + '["Explicacion1"]' + '.document');
 capaImgExplicacion2 = eval(doc + '["Explicacion2"]' + '.document');
 capaImgExplicacion3 = eval(doc + '["Explicacion3"]' + '.document');
 }
 // Funcion para el manejador onMouseOver
 //
 function dentroBoton(capa) {
 eval ("capaImgExplicacion" + capa + ".imgMas" + capa +
".src=masNegativo.src");
 }
 // Funcion para el manejador onMouseOut
 //
 function fueraBoton(capa) {
 eval ("capaImgExplicacion" + capa + ".imgMas" + capa +
".src=masPositivo.src");
 }