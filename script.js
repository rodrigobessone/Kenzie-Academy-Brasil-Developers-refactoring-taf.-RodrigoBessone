
// Variáveis para aplicar os resultados do teste. Não as altere.

let passed = false;

// Implemente aqui as funções

function isHeightValid(gender, height) {
    if (gender == 'male' && height >= 1.70) {
        passed = true;
    } else if (gender == 'female' && height >= 1.60) {
        passed = true;
    } else {
        passed = false;
    }
    return passed
}


function isBarValid(gender, barReps, barSeconds) {
    if (gender == 'male' && (barReps >= 6 || barSeconds <= 15)) {
        passed = true;
    } else if (gender == 'female' && (barReps >= 5 || barSeconds <= 12)) {
        passed = true;
    } else {
        passed = false;
    }
    return passed
}

function isAbsValid(abs) {
    if (abs >= 41) {
        passed = true;
    } else {
        passed = false
    }
    return passed
}

function isRunValid(gender, runDistance, runTime) {
    if (gender == 'male' && ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200))) {
        passed = true;
    } else if (gender == 'female' && ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320))) {
        passed = true;
    } else {
        passed = false;
    } return passed
}

function isSwimValid(swimDistance, swimTime, diveTime) {
    if ((swimDistance >= 100 && swimTime <= 60) || (diveTime <= 30)) {
        passed = true;
    } else {
        passed = false
    } return passed
}



function areCandidateResultsValid(gender, height, barReps, barSeconds, abs,
    runDistance, runTime, swimDistance, swimTime, diveTime) {
    if (isHeightValid(gender, height) &&
        isAbsValid(abs) &&
        isBarValid(gender, barReps, barSeconds) &&
        isRunValid(gender, runDistance, runTime) &&
        isSwimValid(swimDistance, swimTime, diveTime)) {
        passed = true
    } else {
        passed = false
    }
    return passed
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console

const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console

function showMessage(message) {
    const msg = message.toString();
    console.log(msg.toUpperCase());
}

showMessage(areCandidateValid)