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
  let arr = expr.split('');
    let ans = [];

    for(let i = 0;i < arr.length;i++){
      if(Object.values(MORSE_TABLE).indexOf(arr[i]) !== -1){
        for(let key in MORSE_TABLE){
          if(arr[i] === MORSE_TABLE[key]){
            ans.push(key)
          }
        }
      } else {
        ans.push(' ')
      }
    }
    let result = [];
    //console.log(ans)
    for(let i = 0;i < ans.length;i++){
    let res = [];
    for(let j = 0;j < ans[i].length;j++){
      //console.log(ans[i][j])
      if(ans[i][j] === '-'){
        res.push('11');
      } else if (ans[i][j] === '.'){
        res.push('10');
      } else {
        res.push('**********');
      }
    }
    //console.log(res.join(''));
    //console.log(res.join('').length)
    if(res.join('').length < 10){
      let l = res.join('').length;
      for(let i = 0;i < (10 - l);i++){
        res.unshift('0');
      }
      //console.log(res)
      result.push(res.join(''));
    } else {
      result.push(res.join(''));
    }

    }
    //console.log(result.join(''))
    return result.join('')
}

module.exports = {
    decode
}
