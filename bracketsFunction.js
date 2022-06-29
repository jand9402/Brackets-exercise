function doBracketsBalance(string){
  let toArray = string.split("")
  let characterToCheck = []
  let counter = 0
  toArray.map(character => {
    if(character == "(" ){
      characterToCheck.push(character)
      counter = counter+1
    }
    if(character == "{" ){
      characterToCheck.push(character)
      counter = counter+1
    }
    if(character == "[" ){
      characterToCheck.push(character)
      counter = counter+1
    }
    if(character === ")"){
      if(characterToCheck[characterToCheck.length-1] === "("){
        characterToCheck.pop()
        counter = counter-1
      }else{ counter = counter + 1 }
    }
    if(character === "}"){
      if(characterToCheck[characterToCheck.length-1] === "{"){
        characterToCheck.pop()
        counter = counter-1
      }else{ counter = counter + 1 }
    }
    if(character === "]"){
      if(characterToCheck[characterToCheck.length-1] === "["){
        characterToCheck.pop()
        counter = counter-1
      }else{ counter = counter + 1 }
    }
  })
  return counter === 0 ? true : false
}

console.log(doBracketsBalance('(){}[]'))

module.exports = doBracketsBalance