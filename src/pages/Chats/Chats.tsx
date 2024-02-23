import React from "react";
import "./Chats.scss";
import { ChatList } from "../../components/ChatList/ChatList";
import { ChatWindow } from "../../components/ChatWindow/ChatWindow";

export const Chats: React.FC = () => {
  return (
    <div className="chats">
      <ChatList />
      <ChatWindow />
    </div>
  );
};
