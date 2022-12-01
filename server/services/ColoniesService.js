import { dbContext } from "../db/DbContext.js";

class ColoniesService {
    async getAll() {
        const newColony = await dbContext.Colonies.find().populate("HomePlanet")
        return newColony
    }
    async create(body) {
        const newColony = await dbContext.Colonies.create(body)
        return newColony
    }
}

export const coloniesService = new ColoniesService()