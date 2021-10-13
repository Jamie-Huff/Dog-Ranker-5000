export default function generateDogsArray(dogsObj) {
  const allDogs = [];
  for (const dog in dogsObj) {
    if (dogsObj[dog].length === 0) {
      allDogs.push(dog);
    } else {
      const dogArray = dogsObj[dog];
      const dogName = dog;
      for (const dog of dogArray) {
        const fullDogName = dog.concat(` ${dogName}`);
        allDogs.push(fullDogName);
      }
    }
  }
  return allDogs;
}
