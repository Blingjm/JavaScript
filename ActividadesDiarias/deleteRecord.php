<?php
// Conexión a la base de datos
$host= 'localhost';
$user = 'root';
$pass = '';
$bd = 'actividades';

$db = mysqli_connect($host,$user,$pass,$bd);

// Verificar si la conexión fue exitosa
if (!$db) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}

// Función para agregar un registro
if (isset($_POST["activity"]) && isset($_POST["date"])) {
    $activity = $_POST["activity"];
    $date = $_POST["date"];

    $query = "INSERT INTO records (activity, date) VALUES ('$activity', '$date')";
    mysqli_query($db, $query);
}

// Función para obtener los registros
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $query = "SELECT * FROM records";
    $result = mysqli_query($db, $query);

    echo "<table>";
    echo "<tr><th>Actividad</th><th>Fecha</th><th></th><th></th></tr>";
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td><input type='text' id='activity-" . $row["id"] . "' value='" . $row["activity"] . "'></td>";
        echo "<td><input type='date' id='date-" . $row["id"] . "' value='" . $row["date"] . "'></td>";
        echo "<td><button onclick='updateRecord(" . $row["id"] . ")'>Modificar</button></td>";
        echo "<td><button onclick='deleteRecord(" . $row["id"] . ")'>Eliminar</button></td>";
        echo "</tr>";
    }
    echo "</table>";
}

// Función para eliminar un registro
if (isset($_POST["id"])) {
    $id = $_POST["id"];

    $query = "DELETE FROM records WHERE id=$id";
    mysqli_query($db, $query);
}
