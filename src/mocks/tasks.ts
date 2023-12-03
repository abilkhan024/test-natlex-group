import { TASKS_LOCAL_STORAGE_KEY, TASKS_STATUSES } from "@/constants/tasks";
import { Task } from "@/services/tasks";
import { getRandomNumber, safeJsonParse } from "@/utils/shared";
import dayjs from "dayjs";

export const getMockTasks = () => {
  const mockTasks: Task[] = [];
  const storedTasksJson = localStorage.getItem(TASKS_LOCAL_STORAGE_KEY);

  if (storedTasksJson) {
    const storedTasks = safeJsonParse<Task[]>(storedTasksJson);
    if (storedTasks) mockTasks.push(...storedTasks);
  } else {
    let tasksCount = getRandomNumber(40, 50);
    while (tasksCount) {
      mockTasks.push({
        id: tasksCount,
        body: "Lorem ipsum " + tasksCount,
        title: "Not lorem ipsum title " + tasksCount,
        status: TASKS_STATUSES[getRandomNumber(0, 2)] ?? "",
        createdAt: dayjs()
          .subtract(getRandomNumber(300, 10000), "m")
          .toISOString(),
        updatedAt: dayjs()
          .subtract(getRandomNumber(300, 10000), "m")
          .toISOString(),
      });
      tasksCount--;
    }
    localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(mockTasks));
  }
  return mockTasks;
};
