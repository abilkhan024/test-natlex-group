import { TASKS_LOCAL_STORAGE_KEY } from "@/constants/tasks";
import { getMockTasks } from "@/mocks/tasks";
import { getRandomNumber, resolveAfter } from "@/utils/shared";
import dayjs from "dayjs";
import { TaskCreateData, TaskEditData, Task } from "./type";

const tasksService = {
  deleteById: (id: number) => {
    const previousList: Task[] = JSON.parse(
      localStorage.getItem(TASKS_LOCAL_STORAGE_KEY) ?? "[]"
    );

    const targetIndex = previousList.findIndex((task) => task.id === id);
    if (targetIndex === -1) {
      return resolveAfter(getRandomNumber(100, 300), { success: false });
    }
    previousList.splice(targetIndex, 1);
    localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(previousList));
    return resolveAfter(getRandomNumber(100, 300), { success: true });
  },
  create: (data: TaskCreateData) => {
    const previousList: Task[] = JSON.parse(
      localStorage.getItem(TASKS_LOCAL_STORAGE_KEY) ?? "[]"
    );
    previousList.push({
      ...data,
      id: previousList.length + 1,
      createdAt: dayjs().toISOString(),
      updatedAt: dayjs().toISOString(),
    });
    localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(previousList));
    return resolveAfter(getRandomNumber(100, 300), { success: true });
  },
  getList: () => resolveAfter(getRandomNumber(400, 700), getMockTasks()),
  editById: (data: TaskEditData) => {
    const previousList: Task[] = JSON.parse(
      localStorage.getItem(TASKS_LOCAL_STORAGE_KEY)!
    );
    for (let i in previousList) {
      if (previousList[i].id === data.id) {
        previousList[i] = {
          ...previousList[i],
          ...data,
          updatedAt: dayjs().toISOString(),
        };
      }
    }
    localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(previousList));
    return resolveAfter(getRandomNumber(100, 300), { success: true });
  },
};

export * from "./type";
export default tasksService;
