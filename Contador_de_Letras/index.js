function mostrarLetras() {
    let texto = document.getElementById('input').value;
    let quantiade = texto.length

    document.getElementById("resultado").innerHTML = "Quantiade de letras do nome é " + quantiade
}