var buttonOne = $('#1star');
var buttonTwo = $('#2star');
var buttonThree = $('#3star');
var buttonFour = $('#4star');
var buttonFive = $('#5star');
var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var clicked5 = false;

var changeColorOne = function() {
    if (!clicked1) {
        buttonOne.css('color', '#ff4565');
        buttonTwo.css('color', '#707896');
        buttonThree.css('color', '#707896');
        buttonFour.css('color', '#707896');
        buttonFive.css('color', '#707896');
        clicked1 = true;
    } else {
        buttonOne.css('color', '#707896');
        buttonTwo.css('color', '#707896');
        buttonThree.css('color', '#707896');
        buttonFour.css('color', '#707896');
        buttonFive.css('color', '#707896');
        clicked1 = false;
    }
}

var changeColorTwo = function() {
    if (!clicked2) {
        buttonOne.css('color', '#ff4565');
        buttonTwo.css('color', '#ff4565');
        buttonThree.css('color', '#707896');
        buttonFour.css('color', '#707896');
        buttonFive.css('color', '#707896');
        clicked2 = true;
    } else {
        buttonOne.css('color', '#707896');
        buttonTwo.css('color', '#707896');
        buttonThree.css('color', '#707896');
        buttonFour.css('color', '#707896');
        buttonFive.css('color', '#707896');
        clicked2 = false;
    }
}

var changeColorThree = function() {
    if (!clicked3) {
        buttonOne.css('color', '#ff4565');
        buttonTwo.css('color', '#ff4565');
        buttonThree.css('color', '#ff4565');
        buttonFour.css('color', '#707896');
        buttonFive.css('color', '#707896');
        clicked3 = true;
    } else {
        buttonOne.css('color', '#707896');
        buttonTwo.css('color', '#707896');
        buttonThree.css('color', '#707896');
        buttonFour.css('color', '#707896');
        buttonFive.css('color', '#707896');
        clicked3 = false;
    }
}

var changeColorFour = function() {
    if (!clicked4) {
        buttonOne.css('color', '#ff4565');
        buttonTwo.css('color', '#ff4565');
        buttonThree.css('color', '#ff4565');
        buttonFour.css('color', '#ff4565');
        buttonFive.css('color', '#707896');
        clicked4 = true;
    } else {
        buttonOne.css('color', '#707896');
        buttonTwo.css('color', '#707896');
        buttonThree.css('color', '#707896');
        buttonFour.css('color', '#707896');
        buttonFive.css('color', '#707896');
        clicked4 = false;
    }
}

var changeColorFive = function() {
    if (!clicked5) {
        buttonOne.css('color', '#ff4565');
        buttonTwo.css('color', '#ff4565');
        buttonThree.css('color', '#ff4565');
        buttonFour.css('color', '#ff4565');
        buttonFive.css('color', '#ff4565');
        clicked5 = true;
    } else {
        buttonOne.css('color', '#707896');
        buttonTwo.css('color', '#707896');
        buttonThree.css('color', '#707896');
        buttonFour.css('color', '#707896');
        buttonFive.css('color', '#707896');
        clicked5 = false;
    }
}

buttonOne.on('click', changeColorOne);
buttonTwo.on('click', changeColorTwo);
buttonThree.on('click', changeColorThree);
buttonFour.on('click', changeColorFour);
buttonFive.on('click', changeColorFive);


