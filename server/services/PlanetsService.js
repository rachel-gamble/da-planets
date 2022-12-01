import { dbContext } from "../db/DbContext.js";

class PlanetsService {
    async getAll() {
        const newPlanets = await dbContext.Planets.find().populate("Galaxy")
        return newPlanets
    }

    async create(body) {
        const newPlanet = await dbContext.Planets.create(body)
        return newPlanet
    }
}

export const planetsService = new PlanetsService()