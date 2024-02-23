import { Conversation } from "./Conversation";
import { Task } from "./Task";

export interface Tag {
  id: number;
  title: string;
  color: string;
  conversations: Conversation[];
  tasks: Task[];
}
