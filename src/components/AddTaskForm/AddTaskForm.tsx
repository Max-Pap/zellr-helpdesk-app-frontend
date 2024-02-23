import React, { useState } from "react";
import "./AddTaskForm.scss";
import { useAppDispatch } from "../../Redux/store";
import { resetIsTaskModalShown } from "../../Redux/Slices/isTaskModalShown.slice";
import { CustomInput } from "../CustomInput/CustomInput";
import { CustomTextarea } from "../CustomTextarea/CustomTextarea";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import { FormButtons } from "../FormButtons/FormButtons";

export const AddTaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [makeQuote, setMakeQuote] = useState(false);
  const [duration, setDuration] = useState("");
  const [fee, setFee] = useState("");
  const [eta, setEta] = useState("");

  const dispatch = useAppDispatch();

  const noErrors = {
    noTitle: false,
    shortTitle: "",
    noNotes: false,
    shortNotes: "",
    noDuration: false,
    noFee: false,
    noEta: false,
  };

  const [
    error,
    // setError,
  ] = useState(noErrors);

  const handleClearTitle = () => {
    setTitle("");
  };

  const handleClearNotes = () => {
    setNotes("");
  };

  const handleSetQuote = () => {
    setMakeQuote((prev) => !prev);
  };

  const handleClearDuration = () => {
    setDuration("");
  };

  const handleClearFee = () => {
    setFee("");
  };

  const handleClearEta = () => {
    setEta("");
  };

  const closeModal = () => {
    setTitle("");
    setNotes("");
    setDuration("");
    setFee("");
    setEta("");
    setMakeQuote(false);

    dispatch(resetIsTaskModalShown());
  };

  return (
    <div className="addTaskForm">
      <h2 className="addTaskForm__heading">Add task</h2>

      <CustomInput
        title="Title"
        value={title}
        setAction={setTitle}
        clearAction={handleClearTitle}
        errorNoValue={error.noTitle}
        errorShortValue={error.shortTitle}
      />

      <CustomTextarea
        title="Notes"
        value={notes}
        setAction={setNotes}
        clearAction={handleClearNotes}
        errorNoValue={error.noNotes}
        errorShortValue={error.shortNotes}
      />

      <CustomCheckbox
        title="Make a quote out of this task"
        value={makeQuote}
        setAction={handleSetQuote}
      />

      <div className="addTaskForm__block">
        <CustomInput
          title="Duration"
          value={duration}
          setAction={setDuration}
          clearAction={handleClearDuration}
          errorNoValue={error.noDuration}
        />

        <CustomInput
          title="Fee"
          value={fee}
          setAction={setFee}
          clearAction={handleClearFee}
          errorNoValue={error.noFee}
        />

        <CustomInput
          title="ETA"
          value={eta}
          setAction={setEta}
          clearAction={handleClearEta}
          errorNoValue={error.noEta}
        />
      </div>

      <FormButtons
        redTitle="Cancel"
        redAction={closeModal}
        greenTitle="Add"
        // greenAction={}
      />
    </div>
  );
};
