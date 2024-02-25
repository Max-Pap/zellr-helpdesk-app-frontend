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

export const NewChatForm: React.FC = () => {
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

  const [errors, setErrors] = useState(noErrors);

  const handleAddSubject = (subject: string) => {
    dispatch(setSubject(subject));
  };

  const handleClearSubject = () => {
    dispatch(resetSubject());
  };

  const handleAddMessage = (message: string) => {
    dispatch(setInitialMessage(message));
  };

  const handleClearMessage = () => {
    dispatch(resetInitialMessage());
  };

  const handleCancel = () => {
    dispatch(resetInitialMessage());
    dispatch(resetSubject());
    dispatch(resetChosenCategory());
    dispatch(setIsNewChatModalClose());
  };

  const startNewChat = () => {
    const errors = {
      noSubject: subject === "",
      shortSubject: subject.length < 5
      ? "The subject is too short"
      : "",
      noInitialMessage: initialMessage === "",
      shortInitialMessage:
        initialMessage.length < 5
        ? "The message is too short"
        : "",
    };
  
    if (Object.values(errors).some((error) => error)) {
      setErrors(errors);

      setTimeout(() => {
        setErrors(noErrors);
      }, 2000);

      return;
    }

    dispatch(resetInitialMessage());
    dispatch(resetSubject());
    dispatch(resetChosenCategory());
    dispatch(setIsNewChatModalClose());

    navigate("/chats");
  };

  return (
    <div className="newChatForm">
      <CustomInput
        title="Please specify the subject of your new conversation"
        value={subject}
        setAction={handleAddSubject}
        clearAction={handleClearSubject}
        errorNoValue={errors.noSubject}
        errorShortValue={errors.shortSubject}
      />

      <CustomTextarea
        title="Please describe your request or the issue you faced"
        value={initialMessage}
        setAction={handleAddMessage}
        clearAction={handleClearMessage}
        errorNoValue={errors.noInitialMessage}
        errorShortValue={errors.shortInitialMessage}
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
