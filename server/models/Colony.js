import { Schema } from "mongoose";

export const ColonySchema = new Schema({
    name: { type: String, required: true },
    population: { type: Number },
    planetName: { type: String, required: true },
    planetId: { type: String, required: true },
    species: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } })