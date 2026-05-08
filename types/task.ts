import { ObjectId } from "mongodb";

export interface Task {
    _id: ObjectId;
    content: string;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}