import { Task } from "@/services/tasks";
import dayjs from "dayjs";

const _mockTasks: Task[] = [];

/**
 * @description
 * Could add random logic,
 * but want to make updates and delete more predictable
 * ---
 * @todo
 * Implement logic to check local storage for edits, deletes, and creations
 */
for (let i = 1; i <= 24; i++) {
  if (i % 3 === 0) {
    _mockTasks.push({
      id: i,
      title: "Title " + i,
      body: "Heading for body",
      createdAt: dayjs().subtract(i, "d").toISOString(),
      updatedAt: dayjs()
        .subtract(i - 1, "d")
        .toISOString(),
      status: i % 5 === 0 ? "SKIPPED" : "COMPLETED",
    });
  }
}

export { _mockTasks };
