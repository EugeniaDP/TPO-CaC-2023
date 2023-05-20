function validar() {
    var nombre=document.getElementById("nombre");
    var apellido=document.getElementById("apellido");
    var mail=document.getElementById("mail");
    var telefono=document.getElementById("telefono");

    if (nombre.value==="" || apellido.value==="" || mail.value==="" || telefono.value==="") {
        alert("Debe completar todos los campos del formulario");
        return false;
    }
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


