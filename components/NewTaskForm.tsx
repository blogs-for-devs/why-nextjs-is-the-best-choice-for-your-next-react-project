'use client'

import { CreateTaskAction } from "@/actions/tasks"
import { useState } from "react"

export default function NewTaskForm() {
    const [task, setTask] = useState<string>("")

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        CreateTaskAction(task)
        setTask("")
    }

    return (
        <form
            className="flex items-center gap-2"
            onSubmit={(e) => handleSubmit(e)}
        >
            <label htmlFor="newTask">New Task:</label>
            <div className="flex gap-2">
                <input
                    type="text"
                    id="newTask"
                    name="newTask"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="border border-black rounded px-1"
                />
                <button
                    type="submit"
                    className="rounded bg-blue-500 text-white px-2 py-1 cursor-pointer hover:opacity-90"
                >
                    Add
                </button>
            </div>
        </form>
    )
}