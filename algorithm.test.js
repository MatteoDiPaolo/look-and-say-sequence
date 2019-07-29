const { algorithmNextOne, algorithmNextN } = require('./algorithm');

const testNextOne = (input, expected) => {
    console.log(`With input: ${input} it should return: ${expected} --> ${algorithmNextOne(input, true) === expected.toString()}`);
}

const testSequence = (input, n, expected) => {
    console.log(`With input: ${input} it should return: ${expected} --> ${JSON.stringify(algorithmNextN(input, n)) == JSON.stringify(expected)}`);
}

testNextOne(1, 11);
testNextOne(11, 21);
testNextOne(21, 121112);
testNextOne(1211, 111221);
testNextOne(111221, 312211);
testNextOne(312211, 1311222113);
testNextOne('312211', 1311222113);
testNextOne(312211, '1311222113');
testNextOne('312211', '1311222113');

testSequence(1, 5, ['11', '21', '1211', '111221', '312211']);
testSequence(4, 5, ['14', '1114', '3114', '132114', '1113122114']);


testNextOne('312211', '1311222114');
testNextOne('312d211', '1311222114');
testNextOne('eee', '1311222114');