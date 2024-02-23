import { Tag } from "./Tag";
import { User } from "./User";

const Statuses = {
  new: 'Queued',
  open: 'Processing',
  toBeContinued: 'To be continued',
  waitingForMoreInfo: 'Waiting for more info',
  done: 'Done',
  closed: 'Closed',
  archived: 'Archived',
} as const;

type TaskStatus = (typeof Statuses)[keyof typeof Statuses];

export interface Task {
  id: number;
  conversationId: number | null;
  title: string;
  duration: string;
  fee: string;
  estimatedCompletion: string;
  deadline: Date;
  queueIndex: number;
  status: TaskStatus;
  acceptedAt: Date;
  createdAt: Date;
  tags: Tag[];
  assignedTo: User;
}
