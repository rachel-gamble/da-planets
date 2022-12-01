import { Schema } from "mongoose"

export const PlanetSchema = new Schema({
    name: { type: String, required: true },
    biome: { type: String, required: true },
    galaxyId: { type: String, required: true, ref: "Galaxy" },
    atmosphere: { type: Boolean, required: true },
}, { timestamps: true, toJSON: { virtuals: true } })

PlanetSchema.virtual("Galaxy", {
    localField: "galaxyId",
    ref: "Galaxy",
    foreignField: "_id",
    justOne: true
})