import {Schema, model} from 'mongoose'
interface IWorker {
    name: string,
    phone_number: number,
    opinion: string,
    tag: { type: Schema.Types.ObjectId, ref: 'Tag' },
}
const WorkerSchema = new Schema<IWorker>({
	name: {type: String},
    phone_number: {type: Number},
    opinion:  {type: String},
    tag: { type: Schema.Types.ObjectId, ref: 'Tag' },
})

WorkerSchema.methods.toJSON = function() {
	const {__v, ...worker} = this.toObject()

	return worker
}

export const Worker = model<IWorker>('Worker', WorkerSchema)