// import { useGetAllConversationQuery } from "../../Redux/RTK_Query/conversation.service";
import { testChats } from "../../data/testChats";
import { ChatFilter } from "../ChatFilter/ChatFilter";
import { ChatItem } from "../ChatItem/ChatItem";
import "./ChatList.scss";

export const ChatList: React.FC = () => {
  // const { data: converstions, isSuccess } = useGetAllConversationQuery();

  return (
    <div className="chatList">
      <ChatFilter />

      {/* {isSuccess && ( */}
      <div className="chatList__list">
        {testChats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </div>
      {/* )} */}
    </div>
  );
};
