const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false
  return num > 1
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const getRandomInts = num =>{
  const ints = []
  while (ints.length < num) {
    const randNum = getRandomInt(1, 50)
    if(ints.indexOf(randNum) === -1 && isPrime(randNum)){
      ints.push(randNum, randNum)
    }
  }

  return ints.sort(() => Math.random() - 0.5)
}

export default getRandomInts