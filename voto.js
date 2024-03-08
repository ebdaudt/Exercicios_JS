const idade = parseInt(56);
if(idade == 16 || idade == 17 ||  idade >= 70) {
    console.log("Voto facultativo")
} else if (idade >= 18 || idade < 70  ) {
    console.log("Voto obrigatorio")
} else {
    console.log("Voto nao obrigatorio");
}