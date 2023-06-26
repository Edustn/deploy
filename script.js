const naoButton = document.getElementById("nao");

// Função para calcular a distância entre o cursor e o botão
function calcularDistancia(cursorX, cursorY, elemento) {
    const elementoX = elemento.offsetLeft + elemento.clientWidth / 2;
    const elementoY = elemento.offsetTop + elemento.clientHeight / 2;

    const distanciaX = cursorX - elementoX;
    const distanciaY = cursorY - elementoY;

    return Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
}

// Função para verificar a proximidade do cursor com o botão e mover somente o botão jogar
function verificarProximidade(event) {
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    const distanciaLimite = 100; // Defina o valor de proximidade desejado

    const distancia = calcularDistancia(cursorX, cursorY, naoButton);

    if (distancia < distanciaLimite) {
        // Mova somente o botão jogar para um novo local aleatório na tela
        const novaPosicaoX = Math.random() * (window.innerWidth - naoButton.clientWidth);
        const novaPosicaoY = Math.random() * (window.innerHeight - naoButton.clientHeight);

        naoButton.style.left = novaPosicaoX + "px";
        naoButton.style.top = novaPosicaoY + "px";
    }
}

// Adicione o evento de movimento do mouse ao documento
document.addEventListener("mousemove", verificarProximidade);


// poup_up codigo
document.getElementById('sim').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('fechar').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        document.getElementById('popup').style.display = 'none';
    }
});

