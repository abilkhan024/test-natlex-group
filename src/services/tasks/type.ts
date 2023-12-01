export type Task = {
  id: number;
  title: string;
  // Support markdown
  body: string;
  createdAt: string;
  updatedAt: string;
  // Allow user to customize
  status: string;
};
