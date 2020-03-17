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
    '**********': ' ',
};

function decode(expr) {
    
    let str = expr
    let str2 = []
    for(let i = 0; i <= expr.length; i++){
        str2 = str2.concat(str.slice(0, 10))
        str = str.slice(10)
    }

   
   str2 = str2.map(el => {
       if (el !== '**********'){
           let letters = []
        for(let i = 0; i <= el.length-1; i += 2){
            letters = letters.concat(el.slice(i, i+2))
            
        }
        letters = letters.map(x => {
          
          switch(x){
            case "00": return ""
            case "10": return "."
            case "11": return "-"
            }
          
          })
          
          return letters.join('')
       }else{
           return el
       }
       
   })


    str2 = str2.map(el =>{
        return MORSE_TABLE[el]
    })
    

    return str2.join('')
}   

module.exports = {
    decode
}