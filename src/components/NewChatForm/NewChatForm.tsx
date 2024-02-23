import React, { useState } from "react";
import "./NewChatForm.scss";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { resetSubject, setSubject } from "../../Redux/Slices/subject.slice";
import {
  resetInitialMessage,
  setInitialMessage,
} from "../../Redux/Slices/initialMessage.slice";
import { resetChosenCategory } from "../../Redux/Slices/chosenCategory.slice";
import { setIsNewChatModalClose } from "../../Redux/Slices/isNewChatModalOpen";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../CustomInput/CustomInput";
import { CustomTextarea } from "../CustomTextarea/CustomTextarea";
import { FormButtons } from "../FormButtons/FormButtons";

type Props = {
  newChatRef: React.RefObject<HTMLDivElement>;
};

export const NewChatForm: React.FC<Props> = ({ newChatRef }) => {
  const subject = useAppSelector((state) => state.subject.value);
  const initialMessage = useAppSelector((state) => state.initialMessage.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const noErrors = {
    noSubject: false,
    shortSubject: "",
    noInitialMessage: false,
    shortInitialMessage: "",
  };

  const [error, setError] = useState(noErrors);

  const handleAddSubject = (subject: string) => {
    dispatch(setSubject(subject));
  };

  const handleClearSubject = () => {
    dispatch(resetSubject());
  };

  const handleAddInitialMessage = (subject: string) => {
    dispatch(setInitialMessage(subject));
  };

  const handleClearInitialMessage = () => {
    dispatch(resetInitialMessage());
  };

  const handleCancel = () => {
    dispatch(resetInitialMessage());
    dispatch(resetSubject());
    dispatch(resetChosenCategory());
    dispatch(setIsNewChatModalClose());
  };

  const startNewChat = () => {
    const anyError =
      subject === "" ||
      subject.length < 5 ||
      initialMessage === "" ||
      initialMessage.length < 5;

    if (anyError) {
      if (subject === "") {
        setError((error) => ({
          ...error,
          noSubject: true,
        }));
      }

      if (subject.length < 5) {
        setError((error) => ({
          ...error,
          shortSubject: "The subject is too short",
        }));
      }

      if (initialMessage === "") {
        setError((error) => ({
          ...error,
          noInitialMessage: true,
        }));
      }

      if (initialMessage.length < 5) {
        setError((error) => ({
          ...error,
          shortInitialMessage: "The message is too short",
        }));
      }

      setTimeout(() => {
        setError(noErrors);
      }, 2000);

      console.log(error);

      return;
    }

    dispatch(resetInitialMessage());
    dispatch(resetSubject());
    dispatch(resetChosenCategory());
    dispatch(setIsNewChatModalClose());

    navigate("/chats");
  };

  return (
    <div className="newChatForm" ref={newChatRef}>
      <CustomInput
        title="Please specify the subject of your new conversation"
        value={subject}
        setAction={handleAddSubject}
        clearAction={handleClearSubject}
        errorNoValue={error.noSubject}
        errorShortValue={error.shortSubject}
      />

      <CustomTextarea
        title="Please describe your request or the issue you faced"
        value={initialMessage}
        setAction={handleAddInitialMessage}
        clearAction={handleClearInitialMessage}
        errorNoValue={error.noInitialMessage}
        errorShortValue={error.shortInitialMessage}
      />

      <FormButtons
        redTitle="Cancel"
        redAction={handleCancel}
        greenTitle="Start a new chat"
        greenAction={startNewChat}
      />
    </div>
  );
};
