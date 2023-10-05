function agregarTarea() {
    // Obtener el valor del textarea
    let tarea = document.getElementById("tarea").value;

    // Verificar si el campo está vacío
    if (tarea === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    // Crear una nueva tarjeta de Bootstrap para la tarea
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "mb-3");

    // Agregar contenido a la tarjeta
    tarjeta.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>${tarea}</strong> .
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    // Agregar la tarjeta a la lista de tareas
    let tareasDiv = document.getElementById("tareas");
    tareasDiv.appendChild(tarjeta);

    // Limpiar el textarea
    document.getElementById("tarea").value = "";
}
