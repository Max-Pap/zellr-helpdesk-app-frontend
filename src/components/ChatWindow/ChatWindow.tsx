import { useEffect, useRef, useState } from "react";
import { ChatActions } from "../ChatActions/ChatActions";
import "./ChatWindow.scss";
import { testMessages } from "../../data/testMessages";
import { useSearchParams } from "react-router-dom";
import { Message } from "../Message/Message";
import { ReplyBox } from "../ReplyBox/ReplyBox";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { resetMessageContent } from "../../Redux/Slices/messageContent.slice";
import { adjustHeight } from "../../helpers/adjustHeight";
// import { useGetAllMessagesQuery } from "../../Redux/RTK_Query/message.service";

interface Message {
  id: number;
  chatId: number;
  sender: string;
  name: string;
  content: string;
  createdAt: Date;
}

export const ChatWindow: React.FC = () => {
  const textbox = useRef<HTMLTextAreaElement>(null);
  const content = useAppSelector((state) => state.messageContent.value);
  const chatboxBottom = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[] | null>([]);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const chatId = searchParams.get("chatId");

  // const { data: messages, isSuccess } = useGetAllMessagesQuery(chatId || '');

  useEffect(() => {
    setMessages([]);

    if (chatId) {
      console.log(chatId);
      const chatMessages = testMessages.filter(
        (message) => message.chatId === +chatId
      );

      setMessages(chatMessages);
    }
  }, [chatId]);

  useEffect(() => {
    chatboxBottom.current?.scrollIntoView();
  }, [messages]);

  const handleSendMessage = () => {
    if (content.trim() === "") {
      return;
    }

    setMessages((messages) => [
      ...(messages || []),
      {
        id: 11,
        chatId: +chatId!,
        // sender: "user",
        sender: "admin",
        name: "Max",
        content: content.trim(),
        createdAt: new Date("1995-12-17T03:24:00"),
      },
    ]);

    adjustHeight(textbox);

    dispatch(resetMessageContent());
  };

  return (
    <div className="chatWindow">
      <ChatActions />

      <div className="messageBox">
        {messages?.length === 0 && (
          <p className="messageBox__noChatChosen">
            Please choose a chat to see the messages
          </p>
        )}

        {messages?.map((message) => (
          <Message message={message} key={message.id} />
        ))}

        <div ref={chatboxBottom} />
      </div>

      {chatId && <ReplyBox sendAction={handleSendMessage} />}
    </div>
  );
};
