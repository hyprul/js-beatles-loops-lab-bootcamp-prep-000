function theBeatlesPlay(musicians, instruments){
  var iter =[]
  
  for(let i =0; i < musicians.length; i++){
    iter.push(musicians[i] + " plays " + instruments[i])
  }
  
  return iter
}

function johnLennonFacts(facts){
  
}

function iLoveTheBeatles(n){
  var iter = []
  do{
    iter.push("I love the Beatles!")
    n += 1
  }while(n < 15);
  
  return iter
}