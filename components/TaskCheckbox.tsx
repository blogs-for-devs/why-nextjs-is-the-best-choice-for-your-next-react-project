'use client'

import { ToggleTaskAction } from "@/actions/tasks";

export default function TaskCheckbox({
  taskId,
  isCompleted,
}: {
  taskId: string;
  isCompleted: boolean;
}) {
    return (
        <input
            type="checkbox"
            defaultChecked={isCompleted}
            onChange={() => ToggleTaskAction(taskId)}
        />
    );
}