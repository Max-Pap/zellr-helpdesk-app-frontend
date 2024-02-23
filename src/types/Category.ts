import { Conversation } from "./Conversation";

export interface Category {
  id: number;
  title: string;
  description: string;
  conversations?: Conversation[];
}
