import { Task } from "./Task";

const Levels = {
  client: 'client',
  staff: 'staff',
  admin: 'admin',
} as const;

type UserLevels = (typeof Levels)[keyof typeof Levels];

const App = {
  web: 'web',
  mobile: 'mobile',
} as const;

type AppTypes = (typeof App)[keyof typeof App];

export interface User {
  id: number;
  token: string;
  customerUid: string;
  userId: string;
  name: string;
  userLevel: UserLevels;
  team: string;
  appType: AppTypes;
  createdAt: Date;
  lastAccessDatetime: string;
  tasks: Task[];
}
