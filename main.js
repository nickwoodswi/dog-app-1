function callDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => populateDogs(responseJson));
};

function getDog() {
    $('form').submit(event => {
        event.preventDefault();
        $('.dog-results').empty();
        let dogNumber = document.getElementById('userInput').value;
        if (dogNumber > 50) {
            alert('too many dogs');
            return false;
        }
        if (dogNumber == '') {
            alert('need a number!');
            return false;
        }
        else {
            for (i = 0; i < dogNumber; i++) {
                callDog();
            };
        };
    });
};

function populateDogs(responseJson) {
    let dogImage = responseJson.message;
    $('.dog-results').append(
        `<img src="${dogImage}">`
    );
    console.log(responseJson);
};

getDog();