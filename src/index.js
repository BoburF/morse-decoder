const MORSE_TABLE = {
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

function decode(expr) {
    // write your solution here
    const text = expr
    let arr = []
    for(let i = 0; i < (text.length / 10); i++){
        arr.push(text.slice( i * 10 ,(i * 10) + 10))
    }
    const arr2 = []
    for(let i = 0; i < arr.length; i++){
        let letter = ''
        if(arr[i].slice(0, 2) === '*'){
            letter = ' '
        }else{
            for(let j = 0; j < arr[i].length; j++){
                if(arr[i].slice(j * 2, (j * 2) + 2) === '10'){
                    letter += '.'
                }else if(arr[i].slice(j * 2, (j * 2) + 2) === '11'){
                    letter += '-'
                }
            }
        }
        arr2.push(letter)
    }
    let res = ''
    arr2.forEach(letter => {
        for(let key in MORSE_TABLE){
            if(letter === key){
                res += MORSE_TABLE[key]
            }
        }
        if(letter === ''){
            res += ' '.repeat(1)
        }
    })
    return res
}

module.exports = {
    decode
}