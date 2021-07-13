const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const MORSE_BIN = {};
    for (let key in MORSE_TABLE) {
        let keyBin = key.split("").map(el => {
            if (el == ".") {
                return "10";
            } else return "11"
        }).join("");
        while (keyBin.length < 10) {
            keyBin = "0" + keyBin
        }
        MORSE_BIN[keyBin] = MORSE_TABLE[key];
    }

    const exprArr = expr.split("**********")
    const resArr = exprArr.map(el => {
        let tempEl = "";
        for (let i = 0; i < el.length / 10; i++) {
            tempEl += MORSE_BIN[el.substr(i * 10, 10)];
        }
        return tempEl;
    })
    return resArr.join(" ");
}

module.exports = {
    decode
}