import { useNavigate, useSearchParams } from "react-router-dom";
import "./ChatItem.scss";
import cn from "classnames";
import { Chat } from "../../types/Conversation";

type Props = {
  chat: Chat;
};

export const ChatItem: React.FC<Props> = ({ chat }) => {
  const { id, title, customerUid, startedDatetime, description } = chat;

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const chatId = searchParams.get("chatId");

  return (
    <div
      className={cn("chatItem", {
        "chatItem--active": chatId && id === +chatId,
      })}
      onClick={() => navigate(`/chats?chatId=${chat.id}`)}
    >
      <h5 className="chatItem__store">{customerUid}</h5>
      <div className="chatItem__header">
        <h5 className="chatItem__title">{title}</h5>
        <p className="chatItem__timestamp">{startedDatetime.toDateString()}</p>
      </div>

      <p className="chatItem__description">{description}</p>
    </div>
  );
};
