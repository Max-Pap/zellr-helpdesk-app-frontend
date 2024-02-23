// import { Conversation } from "./Conversation";

// export interface Message {
//   id: number;
//   conversationId: number;
//   content: string; 
//   sender: string;
//   sendingParty: string;
//   createdAt: Date;
//   conversation: Conversation;
// }

export interface Message {
  id: number;
  chatId: number;
  sender: string;
  senderName: string;
  content: string;
  createdAt: Date;
}
