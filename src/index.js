module.exports = function check(str, bracketsConfig) {
  let openBrackets = []
  let closeBrackets = []
  for(let item of bracketsConfig) {
    openBrackets.push(item[0])
    closeBrackets.push(item[1])
  }
  if(str.length % 2) return false
  let exp = ''
  for(let i = 0; i < str.length; i++) {
    if(closeBrackets.includes(str[i]) && (exp[exp.length-1] === openBrackets[closeBrackets.indexOf(str[i])])) {
      exp = exp.split('')
      exp.pop()
      exp = exp.join('')
      } else if(openBrackets.includes(str[i])) {
        exp += str[i]
      } else {
      exp += str[i]
    }
  }
  console.log(exp)
  return exp.length === 0
}
