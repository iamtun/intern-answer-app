import { Pet } from "model/Pet";

export const getAllPets = () => {
  return fetch(`${process.env.API_PETS_URI}`)
    .then((resp) => resp)
    .then((pets) =>  pets.json())
    .catch((err) => new Error(err));
};
