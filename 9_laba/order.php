<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["item"]) && isset($_POST["material"]) && isset($_POST["quantity"])) {
        $item = $_POST["item"];
        $material = $_POST["material"];
        $quantity = $_POST["quantity"];

        echo "Замовлено виріб: " . htmlspecialchars($item) . "<br>";
        echo "Матеріал: " . htmlspecialchars($material) . "<br>";
        echo "Кількість: " . htmlspecialchars($quantity) . "<br>";
    } else {
        echo "Помилка! Дані не були передані.";
    }
}
?>
