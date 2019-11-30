const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const getRandomInts = (num) =>{
  var ints = []
  while (ints.length < num) {
    var randNum = getRandomInt(1, 50)
    if(ints.indexOf(randNum) === -1){
      ints.push(randNum, randNum)
    }
  }
  return ints.sort(() => Math.random() - 0.5)
}

export default getRandomInts