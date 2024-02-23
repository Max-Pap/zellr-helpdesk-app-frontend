import { testChats } from "../../data/testChats";
import { ChatItem } from "../ChatItem/ChatItem";
// import { ConversationItem } from "../ConversationItem/ConversationItem";
import "./ConversationList.scss";

export const ConversationList: React.FC = () => {
  return (
    <div className="conversationList">
      <h4 className="conversationList__heading">{`Conversations - ${testChats.length}`}</h4>

      <div className="conversationList__list">
        {testChats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
};
