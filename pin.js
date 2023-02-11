function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else { 
        return getPin();
    }
};

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
};

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedInput = document.getElementById('typed-numbers');
    if(isNaN(number)) {
        if(number == 'C') {
            typedInput.value = '';
        }
    } else {
        const previousNumber = typedInput.value;
        const newNumber = previousNumber + number;
        typedInput.value = newNumber;
    }
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const error = document.getElementById('fail-error');
    const success = document.getElementById('success-message');
    if(pin == typedNumbers){
        success.style.display = 'block';
        error.style.display = 'none';
    }else{
        success.style.display = 'none';
        error.style.display = 'block';
    }
};

