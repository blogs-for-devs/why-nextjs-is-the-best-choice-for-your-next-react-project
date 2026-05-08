'use client'

import { DeleteTaskAction } from "@/actions/tasks";

export default function DeleteTaskButton({
  taskId
}: {
  taskId: string;
}) {
    return (
        <button
            className="ml-2 text-xs rounded bg-red-500 text-white px-2 cursor-pointer hover:opacity-90"
            onClick={() => DeleteTaskAction(taskId)}
        >
            Delete
        </button>
    );
}