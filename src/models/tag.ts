/* eslint-disable @typescript-eslint/no-unused-vars */
import {Schema, model} from 'mongoose'
interface ITag {
    name: string,
}
const TagSchema = new Schema<ITag>({
	name: {type: String},
})

TagSchema.methods.toJSON = function() {
	const {__v, ...tags} = this.toObject()

	return tags
}

export const Tag = model<ITag>('Tag', TagSchema)