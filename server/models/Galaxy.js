import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
    name: { type: String },
    stars: { type: Number },
}, { timestamps: true, toJSON: { virtuals: true } })

// GalaxySchema.virtual('galaxy', {
//     localField: 'galaxyId',
//     // ref: 'Parent',
//     foreignField: '_id',
//     justOne: true
// })