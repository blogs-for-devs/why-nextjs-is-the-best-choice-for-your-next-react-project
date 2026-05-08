'use server'

import { createTask, deleteTaskById, toggleTaskById } from "@/data/tasks";
import { Task } from "@/types/task";
import { revalidatePath } from "next/cache";

export async function ToggleTaskAction(taskId: string) {
    const result = await toggleTaskById(taskId)
    revalidatePath('/')
}

export async function CreateTaskAction(taskContent: string) {
    if (taskContent.trim().length === 0) return

    const newTask: Omit<Task, '_id'> = {
        content: taskContent,
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    const newTaskId = await createTask(newTask)
    revalidatePath('/')
}

export async function DeleteTaskAction(taskId: string) {
    const result = await deleteTaskById(taskId)
    revalidatePath('/')
}