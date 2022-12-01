import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
    name: { type: String },
    stars: { type: Number },
}, { timestamps: true, toJSON: { virtuals: true } })

GalaxySchema.virtual("planetCount",{
    localField: "_id",
    ref: 'Planet', 
    foreignField: 'galaxyId',
    count: true
})