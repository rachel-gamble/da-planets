import { Schema } from "mongoose"

export const PlanetSchema = new Schema({
    name: { type: String, required: true },
    biome: { type: String, required: true },
    galaxyId: { type: String, required: true },
    atmosphere: { type: Boolean, required: true },
}, { timestamps: true, toJSON: { virtuals: true } })