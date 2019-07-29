const createSections = inputString => {
    return inputString.match(/(.)\1*/g);
}

const algorithmNextOne = (inputValue, withSpecialChar) => {
    const inputString = inputValue.toString();
    const sections = createSections(inputString);
    let outputValue = '';
    const specialChar = inputString[0] !== '1' ? inputString[0] : '';
    sections.forEach((section, i) => {
        outputValue += section.length + section[0];
    });
    outputValue += withSpecialChar && specialChar ? '1' + specialChar : '';
    return outputValue;
}

const algorithmNextN = (inputValue, n) => {
    let sequence = [algorithmNextOne(inputValue, false)];
    for (let i = 1; i < n; i++) {
        sequence.push(algorithmNextOne(sequence[i - 1]));
    }
    return sequence;
}

module.exports = { 
    algorithmNextOne,
    algorithmNextN
}