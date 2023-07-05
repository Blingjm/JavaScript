// Función para agregar un registro
function addRecord() {
    // Obtener los valores de los campos de entrada
    var activity = document.getElementById("activity").value;
    var date = document.getElementById("date").value;

    // Crear un objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "addRecord.php", true);

    // Enviar los datos al servidor
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("activity=" + activity + "&date=" + date);

    // Actualizar la tabla de registros
    getRecords();
}

// Función para obtener los registros
function getRecords() {
    // Crear un objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Actualizar la tabla de registros con la respuesta del servidor
            document.getElementById("recordsTable").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", "getRecords.php", true);
    xhr.send();
}

// Función para eliminar un registro
function deleteRecord(id) {
    // Crear un objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "deleteRecord.php", true);

    // Enviar los datos al servidor
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("id=" + id);

    // Actualizar la tabla de registros
    getRecords();
}

// Función para modificar un registro
function updateRecord(id) {
    // Obtener los valores de los campos de entrada
    var activity = document.getElementById("activity-" + id).value;
    var date = document.getElementById("date-" + id).value;

    // Crear un objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "updateRecord.php", true);

    // Enviar los datos al servidor
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("id=" + id + "&activity=" + activity + "&date=" + date);

    // Actualizar la tabla de registros
    getRecords();
}
