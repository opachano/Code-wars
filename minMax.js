//My code

let min = function(list){
  return list.reduce((x, y)=> {
    if(x >= y) {
      return y;
    } else return x
  });
}

let max = function(list){
return list.reduce((x, y)=> {
  if(x >= y) {
    return x;
  } else return y
});
}

//Best practice

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);