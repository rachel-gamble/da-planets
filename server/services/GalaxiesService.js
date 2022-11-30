import { dbContext } from "../db/DbContext.js";

class GalaxiesService {
    async getAll() {
        const galaxies = await dbContext.Galaxies.find()
        return galaxies
    }

    async create(body) {
        const newGalaxy = await dbContext.Galaxies.create(body)
        return newGalaxy
    }
}

export const galaxiesService = new GalaxiesService()