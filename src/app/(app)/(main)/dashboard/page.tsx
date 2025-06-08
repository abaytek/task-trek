import { Suspense } from "react";
import { TaskList } from "@/components/task-list";
import { AddTaskForm } from "@/components/add-task-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { supabaseServer } from "@/lib/supabase/server";
import UserAvatar from "@/components/user-avatar";

function TaskListSkeleton() {
  return (
    <div className="space-y-3">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="flex items-center space-x-3 p-3 border rounded-lg"
        >
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      ))}
    </div>
  );
}

export default async function Dashboard() {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div>
      <UserAvatar />

        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Task Tracker
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Stay organized and get things done
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Add New Task</CardTitle>
                <CardDescription>
                  What would you like to accomplish today?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AddTaskForm />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Tasks</CardTitle>
                <CardDescription>Keep track of your progress</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<TaskListSkeleton />}>
                  <TaskList />
                </Suspense>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
