import { Category } from "./Category";
import { Message } from "./Message";
import { Tag } from "./Tag";

const Statuses = {
  new: 'New',
  open: 'Open',
  waitingForReply: 'Waiting for reply',
  waitingForClient: 'Waiting for client',
  waitingForTaskCompletion: 'Waiting for task completion',
  solved: 'Solved',
  closed: 'Closed',
  archived: 'Archived',
} as const;

type ConversationStatus = (typeof Statuses)[keyof typeof Statuses];

export interface Conversation {
  id: number;
  customerUid: string;
  userId: string;
  status: ConversationStatus;
  priority: number;
  title: string;
  description: string;
  private: boolean;
  startedDatetime: Date;
  endedDatetime: Date; 
  messages?: Message[];
  comments?: Comment[];
  category?: Category;
  tags?: Tag;
}

// remove it later

export type Chat = {
  id: number;
  title: string;
  customerUid: string;
  startedDatetime: Date;
  description: string;
};
