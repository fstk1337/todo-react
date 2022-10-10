import mongoose, { Document, Schema } from 'mongoose';
import * as TODO from './todoTypes';

export interface ITodo {
    category: TODO.CATEGORY;
    description: string,
    priority: TODO.PRIORITY,
    started: Date,
    deadline: Date,
    status: TODO.STATUS,
    finished: Date,
};

export interface ITodoModel extends ITodo, Document {};

const TodoSchema: Schema = new Schema(
    {
        category: { type: String, required: false, default: TODO.CATEGORY.GENERAL },
        description: { type: String, required: true},
        priority: { type: String, required: false, default: TODO.PRIORITY.NORMAL },
        started: { type: Date, required: false, default: null },
        deadline: { type: Date, required: false, default: null },
        status: { type: String, required: false, default: TODO.STATUS.CREATED },
        finished: { type: Date, required: false, default: null }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<ITodoModel>('Todo', TodoSchema);