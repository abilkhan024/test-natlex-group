import { Task } from "@/services/tasks";
import dayjs from "dayjs";
import { groupArrayBySameKey } from "./shared";

export function getTasksPerDayStats(tasks: Task[]) {
  const tasksCreatedByDay: Record<string, number> = {};

  const sortedTasks = [...tasks].sort(
    (a, b) => dayjs(a.createdAt).unix() - dayjs(b.createdAt).unix()
  );

  const minDate = sortedTasks[0].createdAt;
  const maxDate = sortedTasks[sortedTasks.length - 1].createdAt;

  let currentDate = dayjs(minDate);
  while (currentDate.isBefore(dayjs(maxDate).add(1, "day"), "day")) {
    tasksCreatedByDay[currentDate.toISOString()] = 0;
    currentDate = currentDate.add(1, "day");
  }

  for (let task of tasks) {
    tasksCreatedByDay[dayjs(task.createdAt).toISOString()]++;
  }

  return tasksCreatedByDay;
}

export function getTasksCountBySameStatus(tasks: Task[]) {
  return Object.fromEntries(
    Object.entries(groupArrayBySameKey(tasks, "status")).map(
      ([status, tasks]) => [status, tasks.length]
    )
  );
}
