const MORSE_CODE = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

decodeMorse = function(code) {
    let words = code.split('   ').filter(element => element !== '' ? true : false)
    let letters = words.map(element => element.split(' '))
    let decode = []
    for(i in letters) {
        decode[i] = letters[i].map(element => {
            return MORSE_CODE[element.trim()]
        })
        decode[i] = decode[i].join('')
    }
    decode = decode.join(' ')
    return decode.toUpperCase()
}

decodeMorse('.... . -.--   .--- ..- -.. .')
decodeMorse('   .   .')
