"use client"

import { useState } from "react"
import { Trash2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { deleteTask, toggleTask } from "@/lib/actions/task.actions"
import { cn } from "@/lib/utils"

interface Task {
  id: string
  title: string
  completed: boolean
  created_at: string
}

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [isToggling, setIsToggling] = useState(false)

  const handleToggle = async () => {
    setIsToggling(true)
    try {
      await toggleTask(task.id, !task.completed)
    } finally {
      setIsToggling(false)
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deleteTask(task.id)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div
      className={cn(
        "flex items-center space-x-3 p-3 border rounded-lg transition-all duration-200",
        "hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600",
        task.completed && "bg-gray-50 dark:bg-gray-800/50",
      )}
    >
      <Checkbox
        checked={task.completed}
        onCheckedChange={handleToggle}
        disabled={isToggling}
        className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
      />

      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-sm font-medium transition-all duration-200",
            task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-white",
          )}
        >
          {task.title}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {new Date(task.created_at).toLocaleDateString()}
        </p>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleDelete}
        disabled={isDeleting}
        className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
      >
        {isDeleting ? <X className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
      </Button>
    </div>
  )
}
