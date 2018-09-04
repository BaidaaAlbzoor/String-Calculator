function add(stringNumbers) {

    let sum = 0;
    let numbers = stringNumbers.split(',');

    numbers.forEach(element => {
        let number = parseInt(element);

        if (isNaN(number)) {
            number = 0;
        }

        sum += number;
    });


    return sum;
}

module.exports = add;