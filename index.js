
function countdown(callback) {
  timeoutID = window.setTimeout(callback, 200);
}



function createMultiplier(multiplierValue) {
  return function(n) {return n  * multiplierValue}
}
doubler = createMultiplier(2)
tripler = createMultiplier(3)

function multiplier(multiplierValue, value){
  return multiplierValue * value
}

doublerWithBind = multiplier.bind(null, 2)

triplerWithBind = multiplier.bind(null, 3)
