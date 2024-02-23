import "./Message.scss";
import cn from "classnames";
import { handleGetTime } from "../../helpers/handleGetTime";

interface Message {
  id: number;
  chatId: number;
  sender: string;
  name: string;
  content: string;
  createdAt: Date;
}

type Props = {
  message: Message;
};

export const Message: React.FC<Props> = ({ message }) => {
  const { sender, name, content, createdAt } = message;

  return (
    <div
      className={cn("message", {
        "message--admin": sender === "admin",
        "message--user": sender === "user",
      })}
    >
      <p className="message__content">{content}</p>

      <p className="message__timeAndSender">
        {`${handleGetTime(createdAt)}, ${name}`}
      </p>
    </div>
  );
};
