import { dbContext } from "../db/DbContext";

class GalaxiesService {
async getAllGalaxies(){
    const classes = await dbContext.Galaxies.find().populate('coach')
    return galaxies
}
}

export const galaxiesService = new GalaxiesService()