import { useEffect, useRef } from "react";
import "./ReplyBox.scss";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import {
  resetMessageContent,
  setMessageContent,
} from "../../Redux/Slices/messageContent.slice";
import { adjustHeight } from "../../helpers/adjustHeight";

type Props = {
  sendAction: () => void;
};

export const ReplyBox: React.FC<Props> = ({ sendAction }) => {
  const textbox = useRef<HTMLTextAreaElement>(null);
  const content = useAppSelector((state) => state.messageContent.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (textbox.current) {
      adjustHeight(textbox);
    }
  }, [content]);

  const handleKeyDown = () => {
    adjustHeight(textbox);
  };

  const handleTypeMessage = (text: string) => {
    handleKeyDown();

    dispatch(setMessageContent(text));
  };

  const handleClearContent = () => {
    dispatch(resetMessageContent());
  };

  return (
    <div className="replyBox">
      <div className="replyBox__input">
        <textarea
          className="replyBox__inputField"
          ref={textbox}
          value={content}
          onChange={(e) => handleTypeMessage(e.target.value)}
        />
        {content !== "" && (
          <button className="replyBox__clear" onClick={handleClearContent} />
        )}
      </div>

      <div className="replyBox__actions">
        <button
          className="replyBox__button replyBox__send"
          aria-label="Send message"
          onClick={sendAction}
        >
          Send
        </button>

        <button
          className="replyBox__button replyBox__attachImage"
          aria-label="Attach image"
          // onClick={handleCancel}
        >
          Attach image
        </button>
      </div>
    </div>
  );
};
