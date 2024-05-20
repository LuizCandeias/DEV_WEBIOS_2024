let tabuada = 2;

if (tabuada === 2 || tabuada === 3) {
    console.log("Tabuada do número " + tabuada);
    for (let i = 1; i <= 10; i++) {
        console.log(tabuada + " x " + i + " = " + (tabuada * i));
    }
} else {
    console.log("Escolha a tabuada do número 2 ou 3");
}
