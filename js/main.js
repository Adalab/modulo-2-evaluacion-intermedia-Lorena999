const buttonProof = document.querySelector('.js-button-proof');
const userNumber = document.querySelector('js-user-number');
const resultUserNumber = document.querySelector('js-result-user-number');
const addUser = document.querySelector('.js-addUser');

function getRandomNumber(max) {
    const number = Math.ceil(Math.random() * max);
    return number
}
const Randomnumber = getRandomNumber(100);
    console.log(Randomnumber);

    function compareUserNumber () {
        const userNumberValue = userNumber.value;
        if (Randomnumber < userNumberValue) {
            resultUserNumber.value = 'Demasiado alto';
        } else if (Randomnumber < userNumberValue) {
            resultUserNumber.value = 'Demasiado bajo';
        }
        else if (Randomnumber === userNumberValue) {
            resultUserNumber.value = 'Has ganado campeona';
        }
    
  }

  function addAttemps() {
const addUserForm = addUser
  }

function handleClicButton () {
    compareUserNumber();
    addAttemps();
  }
  buttonProof.addEventListener('click', handleClicButton);