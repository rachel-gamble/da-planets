import { Schema } from "mongoose";

export const ColonySchema = new Schema({
    name: { type: String, required: true },
    population: { type: Number },
    planetName: { type: String, required: true },
    planetId: { type: String, required: true, ref: "Planet" },
    species: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } })

ColonySchema.virtual("HomePlanet", {
    localField: "planetId",
    ref: "Planet",
    foreignField: "_id",
    justOne: true
})