//My code

function descendingOrder(n){
  return Number(n.toString().split("").sort().reverse().join(""))
}

//Best practice

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}