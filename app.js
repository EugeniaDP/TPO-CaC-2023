function validar() {
    var nombre=document.getElementById("nombre");
    var apellido=document.getElementById("apellido");
    var mail=document.getElementById("mail");
    var telefono=document.getElementById("telefono");

    if (nombre.value==="" || apellido.value==="" || mail.value==="" || telefono.value==="") {
        alert("Debe completar todos los campos del formulario.");
        return false;
    }

    for (var j = 0; j < telefono.value.length; j++) {
        var digit = telefono.value.charAt(j);
        if (digit < "0" || digit > "9") {
          alert("El campo 'Teléfono' sólo puede contener dígitos numéricos.");
          return false;
        }
    }

    for (var j = 0; j < nombre.value.length; j++) {
        var char = nombre.value.charAt(j);
        if (char >= "0" && char <= "9") {
          alert("El campo 'Nombre' no puede contener dígitos numéricos.");
          return false;
        }
    }

    for (var j = 0; j < apellido.value.length; j++) {
        var char = apellido.value.charAt(j);
        if (char >= "0" && char <= "9") {
          alert("El campo 'Apellido' no puede contener dígitos numéricos.");
          return false;
        }
    }

    alert("Formulario enviado correctamente. Gracias por su consulta.")
    return true;
  
}


const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
event.preventDefault();
const form = new FormData(this);
const response = await fetch(this.action, {
method: this.method,
body: form,
headers: {
'Accept': 'application/json'
}
});
if(response.ok){
this.reset();
alert('¡Todo bien!');
}
}


