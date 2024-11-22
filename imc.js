function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos!";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }

    document.getElementById('resultado').innerText = `Seu IMC é ${imc} (${classificacao}).`;
}
