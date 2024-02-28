document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    const nombreInput = document.getElementById("nombre");
    const nombreError = document.querySelector(".errorNombre");
    const nombreValue = nombreInput.value.trim();
    const nombreRegex = /^[a-zA-Z\s]+$/;

    if (!nombreRegex.test(nombreValue)) {
        nombreError.textContent = "El nombre solo puede contener caracteres alfabéticos";
        nombreError.classList.add("error");
        nombreInput.focus();
    } else {
        nombreError.textContent = "Nombre válido";
        nombreError.classList.remove("error");
        nombreError.classList.add("success");
    }

    
    const asuntoInput = document.getElementById("asunto");
    const asuntoError = document.querySelector(".errorAsunto");
    const asuntoValue = asuntoInput.value.trim();

    if (asuntoValue === "") {
        asuntoError.textContent = "Por favor, ingrese un asunto";
        asuntoError.classList.add("error");
        asuntoInput.focus();
    } else {
        asuntoError.textContent = "Asunto válido";
        asuntoError.classList.remove("error");
        asuntoError.classList.add("success");
    }

   
    const mensajeInput = document.getElementById("mensaje");
    const mensajeError = document.querySelector(".errorMensaje");
    const mensajeValue = mensajeInput.value.trim();

    if (mensajeValue === "") {
        mensajeError.textContent = "Por favor, ingrese un mensaje";
        mensajeError.classList.add("error");
        mensajeInput.focus();
    } else {
        mensajeError.textContent = "Mensaje válido";
        mensajeError.classList.remove("error");
        mensajeError.classList.add("success");
    }

   
    if (nombreError.textContent === "Nombre válido" &&
        asuntoError.textContent === "Asunto válido" &&
        mensajeError.textContent === "Mensaje válido") {
        const resultado = document.querySelector(".resultado");
        resultado.textContent = "Mensaje enviado con éxito !!!";
        resultado.classList.add("success");
}
});

