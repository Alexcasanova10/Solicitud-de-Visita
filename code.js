function validarTexto(e){
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value
    let institucion = document.getElementById('institucion').value
    let municipio = document.getElementById('municipio').value
    let correo = document.getElementById('correo').value
    let carrera = document.getElementById('carrera').value;
    if(nombre == "" || direccion == "" || institucion == "" || municipio== "" ||correo == "" ||carrera == "" ){
        alert('Existen campos vacios, favor de llenar todos los espacios');
    }else if (!correo.includes('@') && !correo.includes('.com')){
        alert('El correo electronico debe incluir @ y .com');
    }else {
        alert('Campos validados exitosamente')
    }
    e.preventDefault();
}

function validarNum(e){
    let telefono = document.getElementById('telefono').value; 
    let participantes = document.getElementById('participantes').value;

    let fecha = document.getElementById('fecha');
    let fechaVal= new Date(fecha.value);
    let fechaHoy = new Date();


    if(telefono.length == 0  || telefono == 0) {
        alert('El teléfono debe tener 10 dígitos')
    }else if(participantes == 0 || participantes.length == 0){
        alert('favor de ingresar asistentes a la visita')
    }else if(fechaVal === ''|| fechaVal <= fechaHoy){
        alert('favor de ingresar una fecha posterior al día de hoy');
    }
    e.preventDefault();
}
function validarButtons(e){
    let nivEdu = document.querySelector('input[name="nivel-educativo"]:checked');
    if(!nivEdu){
        alert('Favor de seleccionar un nivel educativo');
    }
    e.preventDefault();
}



function validar(e){
    let observaciones = document.getElementById('observaciones').value;
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value
    let institucion = document.getElementById('institucion').value
    let municipio = document.getElementById('municipio').value
    let correo = document.getElementById('correo').value
    let carrera = document.getElementById('carrera').value;
    let telefono = document.getElementById('telefono').value; 
    let participantes = document.getElementById('participantes').value;
    let fecha = document.getElementById('fecha');
    let fechaVal= new Date(fecha.value);

    validarTexto(e);
    validarNum(e);
    validarButtons(e);

  
        document.write(" GRACIAS POR AGENDAR SU VISITA" + "<br/>");
        document.write("<a href=\"index.html\">Regresar</a> ");
        
        document.write("<br/>");
        document.write("<br/>");
        
        document.write("Nombre: " + nombre + " <br/>");
        document.write("Direccion: " + direccion + " <br/>");
        document.write("Institución: " + institucion + " <br/>");
        document.write("Municipio: " + municipio + " <br/>");
        document.write("Email: " + correo + " <br/>");
        document.write("Telefono: " + telefono + " <br/>");
        if(observaciones != ""){
            document.write("Observaciones: " +observaciones  + " <br/>");
        }
        document.write("Fecha: " + fechaVal + " <br/>");   
        document.write("Carrera: " + carrera + " <br/>");   
        document.write("Número de asistenes: " + participantes + " <br/>");   
}