document.write("<h2>DOM</h2><br>");

document.write("<h3>getElementById</h3><br>");
parrafo = document.getElementById("parrafo");
document.write(parrafo + "<br>");

document.write("<h3>getElementsByTagName</h3><br>");
parrafo = document.getElementsByTagName("p");
document.write(parrafo[1] + "<br>");

document.write("<h3>querySelector</h3><br>");
parrafo = document.querySelector(".parrafo3");
document.write(parrafo + "<br>");

document.write("<h3>querySelectorAll</h3><br>");
parrafo = document.querySelectorAll("parrafo");
document.write(parrafo + "<br>");

document.write("<h2>Atributos</h2><br>");
document.write("<h3>setAttribute</h3><br>");
const rangoEtario = document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type","number"); 

document.write("<h3>getAttribute</h3><br>");
valorAtributo = rangoEtario.getAttribute("type")
document.write("<br>" + valorAtributo);

document.write("<h3>removeAttribute</h3><br>");
valorAtributo = rangoEtario.removeAttribute("type");
document.write("<br>" + valorAtributo);
