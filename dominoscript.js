var nombreJoueurs = 2;
var listeDominos = new Array([0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [3, 3], [3, 4], [3, 5], [3, 6], [4, 4], [4, 5], [4, 6], [5, 5], [5, 6], [6, 6]);
// var dominoMix = listeDominos;

var board = [];

var mainJ1 = [];
var mainJ2 = [];

var distribution = function (x) {

    for (var i = 0; i < 7; i++) {
        var dominosRandom = Math.floor(Math.random() * listeDominos.length)
        var prendreUn = listeDominos[dominosRandom];

        x.push(prendreUn);

        listeDominos.splice(dominosRandom, 1);

    }
}

distribution(mainJ1);
distribution(mainJ2);
console.log(mainJ1);
console.log(mainJ2);
console.log(listeDominos);


function placer(x, mainJ1) {
    var domino = mainJ1[x];
    console.log(domino);

    if (board.length === 0) {
        board.splice(0, 0, mainJ1)
        mainJ1.splice(x, 1)
    }
}











// var tuile = document.getElementById('tuile');
// var pos = 0;

// var clicGauche = function () {
//     pos += 90;
//     tuile.style.transform = 'rotate(' + pos + 'deg)';
//     console.log(pos);
// };

// tuile.addEventListener('click', clicGauche);

// Fonction rotation is OK. Je la garde en commentaire pour tester d'autres fonctions avec le clic gauche.
