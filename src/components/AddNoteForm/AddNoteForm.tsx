import React, { useState } from "react";
import "./AddNoteForm.scss";
import { useAppDispatch } from "../../Redux/store";
import { resetIsNoteModalShown } from "../../Redux/Slices/isNoteModalShown.slice";
import { CustomTextarea } from "../CustomTextarea/CustomTextarea";
import { FormButtons } from "../FormButtons/FormButtons";

export const AddNoteForm: React.FC = () => {
  const [note, setNote] = useState("");

  const dispatch = useAppDispatch();

  const noErrors = {
    noNote: false,
  };

  const [
    error,
    // setError,
  ] = useState(noErrors);

  const handleClearNote = () => {
    setNote("");
  };

  const closeModal = () => {
    setNote("");

    dispatch(resetIsNoteModalShown());
  };

  return (
    <div className="addNoteForm">
      <h2 className="addNoteForm__heading">Add note</h2>

      <CustomTextarea
        title="Note"
        value={note}
        setAction={setNote}
        clearAction={handleClearNote}
        errorNoValue={error.noNote}
        // errorShortValue={error.shortNote}
      />

      <FormButtons
        redTitle="Cancel"
        redAction={closeModal}
        greenTitle="Add"
        // greenAction={}
      />
    </div>
  );
};
