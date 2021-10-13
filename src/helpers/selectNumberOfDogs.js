function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function selectedDogs (dogsArray) {
  const selectedDogs = []
  const cards1 = []
  const cards2 = []
  for (let i = 1; i < 20; i++) {
    if (cards1.length === 10) {
      break
    }
    const number = getRandomInt(1, dogsArray.length)  
    const selectedDog = dogsArray[number]

    if (!cards1.includes(selectedDog)) {
      cards1.push(selectedDog)
      } 
  }
  for (let i = 1; i < 20; i++) {
    if (cards2.length === 10) {
      break
    }
    const number = getRandomInt(1, dogsArray.length)  
    const selectedDog = dogsArray[number]

    if (!cards1.includes(selectedDog) && !cards2.includes(selectedDog)) {
      cards2.push(selectedDog)
    }
  }

  selectedDogs.push(cards1, cards2)
  return selectedDogs
}
