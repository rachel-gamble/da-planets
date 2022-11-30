import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
    name: { type: String },
    parentId: { type: Schema.Types.ObjectId }
}, { timestamps: true, toJSON: { virtuals: true } })

GalaxySchema.virtual('creator', {
    localField: 'galaxyId',
    reference: 'Parent',
    foreignField: '_id',
    justOne: true
})