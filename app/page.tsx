import DeleteTaskButton from "@/components/DeleteTaskButton";
import NewTaskForm from "@/components/NewTaskForm";
import TaskCheckbox from "@/components/TaskCheckbox";
import { getAllTasks } from "@/data/tasks";

export default async function Home() {
    const tasks = await getAllTasks()

    return (
        <div className="w-200 mx-auto bg-zinc-100 font-sans p-4 my-4 rounded-xl shadow-xl">
            <h1 className="text-2xl font-bold">My Tasks</h1>

            <NewTaskForm />

            <h2 className="text-lg font-semibold mt-2">To Do</h2>
            <ul>
                {tasks.filter((task) => !task.isCompleted).length > 0 ?
                    tasks.filter((task) => !task.isCompleted).map((task) => (
                        <li key={task._id.toString()}>
                            <label>
                                <TaskCheckbox taskId={task._id.toString()} isCompleted={task.isCompleted} />
                                <span className="ml-2">
                                    {task.content}
                                </span>
                                <DeleteTaskButton taskId={task._id.toString()} />
                            </label>
                        </li>
                    ))
                    : (
                        <li>You're all caught up!</li>
                    )
                }
            </ul>

            <h2 className="text-lg font-semibold mt-2">Completed Tasks</h2>
            <ul>
                {tasks.filter((task) => task.isCompleted).length > 0 ?
                    tasks.filter((task) => task.isCompleted).map((task) => (
                        <li key={task._id.toString()}>
                            <label>
                                <TaskCheckbox taskId={task._id.toString()} isCompleted={task.isCompleted} />
                                <span className="ml-2 line-through">
                                    {task.content}
                                </span>
                                <DeleteTaskButton taskId={task._id.toString()} />
                            </label>
                        </li>
                    ))
                    : (
                        <li>No tasks completed yet</li>
                    )
                }
            </ul>
        </div>
    );
}