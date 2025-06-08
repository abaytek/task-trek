"use server"

import { revalidatePath } from "next/cache"
import { supabaseServer } from "../supabase/server"

interface Task {
  id: string
  title: string
  completed: boolean
  created_at: string
}

export async function getTasks(): Promise<Task[]> {
  const supabase = await supabaseServer()

  const { data: tasks, error } = await supabase.from("tasks").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching tasks:", error)
    return []
  }

  return tasks || []
}

export async function addTask(title: string) {
  const supabase = await supabaseServer()

  const { error } = await supabase.from("tasks").insert([
    {
      title,
      completed: false,
    },
  ])

  if (error) {
    console.error("Error adding task:", error)
    throw new Error("Failed to add task")
  }

  revalidatePath("/")
}

export async function toggleTask(id: string, completed: boolean) {
  const supabase = await supabaseServer()

  const { error } = await supabase.from("tasks").update({ completed }).eq("id", id)

  if (error) {
    console.error("Error toggling task:", error)
    throw new Error("Failed to update task")
  }

  revalidatePath("/")
}

export async function deleteTask(id: string) {
  const supabase = await supabaseServer()

  const { error } = await supabase.from("tasks").delete().eq("id", id)

  if (error) {
    console.error("Error deleting task:", error)
    throw new Error("Failed to delete task")
  }

  revalidatePath("/")
}
