function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function selectedDogs (dogsArray) {
  console.log(dogsArray.length)
  const selectedDogs = []
  const cards1 = []
  const cards2 = []
  const usedDogs = []
  let ranker = 0
  for (let i = 1; i < 20; i++) {
    if (cards1.length === 10) {
      break
    }
    const number = getRandomInt(1, dogsArray.length - 1)  
    const selectedDog = dogsArray[number]

    if (!usedDogs.includes(selectedDog)) {
      ranker++
      let dogObj = {rank: ranker, name: selectedDog, id: `dog${i}`, index: number}
      cards1.push(dogObj)
      usedDogs.push(selectedDog)
      } 
  }
  ranker = 0
  for (let i = 1; i < 20; i++) {
    if (cards2.length === 10) {
      break
    }
    const number = getRandomInt(1, dogsArray.length - 1)  
    const selectedDog = dogsArray[number]

    if (!usedDogs.includes(selectedDog) && !usedDogs.includes(selectedDog)) {
      ranker++
      let dogObj = {rank: ranker, name: selectedDog, id: `dog${i}`, index: number}
      cards2.push(dogObj)
      usedDogs.push(selectedDog)
    }
  }
  selectedDogs.push(cards1, cards2)
  return selectedDogs
  
}
