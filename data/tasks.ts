import { getCollection } from "@/lib/mongodb";
import { Task } from "@/types/task";
import { ObjectId } from "mongodb";

export async function getAllTasks(): Promise<Task[]> {
    const tasks = await (await getCollection<Task>('tasks')).find().sort({ createdAt: -1 }).toArray()

    return tasks
}

export async function createTask(task: Omit<Task, '_id'>): Promise<string> {
    const result = await (await getCollection<Omit<Task, '_id'>>('tasks')).insertOne(task)

    return result?.insertedId.toString()
}

export async function toggleTaskById(taskId: string): Promise<boolean> {
    const task = await (await getCollection<Task>('tasks')).findOne({ _id: new ObjectId(taskId) })
    if (!task) return false

    const result = await (await getCollection<Partial<Omit<Task, '_id'>>>('tasks')).updateOne(
        { _id: new ObjectId(taskId) },
        { $set: { isCompleted: !task?.isCompleted, updatedAt: new Date() } }
    )

    return result.modifiedCount === 1
}

export async function deleteTaskById(taskId: string): Promise<boolean> {
    const result = await (await getCollection<Task>('tasks')).deleteOne({ _id: new ObjectId(taskId) })

    return result.deletedCount === 1
}