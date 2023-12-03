export type Task = {
  id: number;
  title: string; // modifiable
  body: string; // modifiable
  createdAt: string;
  updatedAt: string;
  status: TaskStatus; // modifiable
};

export type TaskEditData = Omit<Task, "createdAt" | "updatedAt">;
export type TaskCreateData = Omit<TaskEditData, "id">;

export type TaskStatus = "COMPLETED" | "IN_PROGRESS" | "NEW";
