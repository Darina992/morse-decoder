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
  re=/(.{10}|.)/g
  re1=/(.{2}|.)/g
  let res = expr.match(re);
  let result = []
  //console.log(res)
  for(let i = 0; i < res.length;i++){
    let n = res[i].match(re1);
    //console.log(n);
    let a = n.filter((i) => i !== "00");
    //console.log(a);
    let s = [];
    for(let j = 0; j < a.length;j++){
      if (a[j] === '10'){
        s.push('.');
      } else if (a[j] === '11'){
        s.push('-');
      } else {
        s.push(' ');
      }
    }
    //console.log(s);

    //console.log(Object.keys(MORSE_TABLE).indexOf(s.join('')) !== -1)
    if(Object.keys(MORSE_TABLE).indexOf(s.join('')) !== -1){
      for(let key in MORSE_TABLE){
        if(s.join('') === key){
          result.push(MORSE_TABLE[key])
        }
      }
    } else {
      result.push(' ');
    }
  }
  //console.log(result);
  return result.join('')
}

module.exports = {
    decode
}
