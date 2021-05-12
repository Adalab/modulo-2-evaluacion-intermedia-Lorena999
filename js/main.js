const buttonProof = document.querySelector('.js-button-proof');
const userNumber = document.querySelector('js-user-number');
const resultUserNumber = document.querySelector('js-result-user-number');


function getRandomNumber(max) {
    const number = Math.ceil(Math.random() * max);
    return number
    
}
const Randomnumber = getRandomNumber(100);
    console.log(Randomnumber);

    function compareUserNumber () {
        if (Randomnumber < userNumber) {
            resultUserNumber.value = 'Demasiado alto'
        } else if (Randomnumber < userNumber) {
            resultUserNumber.value = 'Demasiado bajo'
        }
        else if (Randomnumber === userNumber) {
            resultUserNumber.value = 'Has ganado campeona'
        }
    
  }

function handleClicButton () {
    compareUserNumber();
    //addAttemps();
  }
  buttonProof.addEventListener('click', handleClicButton);