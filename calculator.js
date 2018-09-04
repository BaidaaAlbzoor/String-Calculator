function add(stringNumbers) {
    
    if (isNaN(stringNumbers)) {
        return 0;
    }

    return parseInt(stringNumbers);
}

module.exports = add;