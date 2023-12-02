import { _mockTasks } from "@/mocks/tasks";
import { getRandomNumber, resolveAfter } from "@/utils/shared";

const tasksService = {
  getList: () => resolveAfter(getRandomNumber(400, 700), _mockTasks),
};

export * from "./type";
export default tasksService;
