import {Schema, model} from 'mongoose'
interface IWorker {
    name: string,
    phone_number: string,
    opinion: string,
    tag: { type: Schema.Types.ObjectId, ref: 'Tag' },
}
const WorkerSchema = new Schema<IWorker>({
	name: {type: String},
    phone_number: {type: String},
    opinion:  {type: String},
    tag: { type: Schema.Types.ObjectId, ref: 'Tag' },
})

WorkerSchema.methods.toJSON = function() {
	const {__v, ...worker} = this.toObject()

	return worker
}

export const Worker = model<IWorker>('Worker', WorkerSchema)