
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // fetch all the forms we want to apply custom style
        var inputs = document.getElementsByClassName('form-control')

        // loop over each input and watch blue event
        var validation = Array.prototype.filter.call(inputs, function (input) {

            input.addEventListener('blur', function (event) {
                // reset
                input.classList.remove('is-invalid')
                input.classList.remove('is-valid')

                if (input.checkValidity() === false) {
                    input.classList.add('is-invalid')
                } else {
                    input.classList.add('is-valid');
                }

            }, false);

        });

    }, false); 

})();

function playGame() {
    var attempts = 3;
    var success = false;
    var numSucces = 18;
    var numplayer;

    var name = document.getElementById("txtGamePlayer").value;
    alert("Try to remember how many species of Graptopetalum there are ");

    if (name == "") {
        alert("Please enter a name to play :)");
    } else {
        while (attempts > 0 && success != true) {
            attempts--;
            numplayer = parseInt(prompt("Enter a number"));
            if (numplayer == numSucces) {
                alert("You got it!  " + name );
                success = true;
            } else if (numplayer < numSucces) {
                alert("Clues: it is higher \n  You have " + attempts + " attemps left");
            } else if (numplayer > numSucces) {
                alert("Clues: it is lower \n  You have " + attempts + " attemps left");
            } else {
                alert("Ohh! :( Maybe next time " );
            }


        }
        
    }

}

