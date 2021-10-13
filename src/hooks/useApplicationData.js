import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
const [dogBreeds, setDogBreeds] = useState(null);

  const getDogBreeds = async () => {
    try{
      const { data } = await axios.get('https://dog.ceo/api/breeds/list/all')
      if(data) {
        const newDogList = data['message']
        setDogBreeds(newDogList);
      }
    } catch(err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    getDogBreeds()
  }, []);

  return {
    dogBreeds,
    setDogBreeds
  }
}