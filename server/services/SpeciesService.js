import { dbContext } from "../db/DbContext.js";

class SpeciesService {
    async getAll() {
        const newSpecies = await dbContext.Species.find()
        return newSpecies
    }

    async create(body) {
        const newSpecies = await dbContext.Species.create(body)
        return newSpecies
    }
}

export const speciesService = new SpeciesService()