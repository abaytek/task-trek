import { getTasks } from "@/lib/actions/task.actions"
import { TaskItem } from "./task-item"

export async function TaskList() {
  const tasks = await getTasks()

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        <p className="text-lg mb-2">No tasks yet</p>
        <p className="text-sm">Add your first task above to get started!</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}
