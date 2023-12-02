export type Task = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  // Allow user to customize
  status: string;
};
