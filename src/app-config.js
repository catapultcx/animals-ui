import AnimalService from "./services/animalService.js";

export const supportedAnimalTypes = [
    "cat",
    "dog",
    "owl",
    "parrot",
    "spider",
    "tuna",
    "salmon",
    "frog",
    "iguana"
]

export const animalServices = (url) => supportedAnimalTypes.map(type => [type, new AnimalService(url, `${type}s`)])
