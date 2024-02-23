import React, { useState } from "react";
import "./SetStatusForm.scss";
import { useAppDispatch } from "../../Redux/store";
import { resetIsStatusModalShown } from "../../Redux/Slices/isStatusModalShown.slice";
import { CustomInput } from "../CustomInput/CustomInput";
import { FormButtons } from "../FormButtons/FormButtons";

export const SetStatusForm: React.FC = () => {
  const [status, setStatus] = useState("");

  const dispatch = useAppDispatch();

  const noErrors = {
    noStatus: false,
  };

  const [
    error,
    // setError,
  ] = useState(noErrors);

  const handleClearStatus = () => {
    setStatus("");
  };

  const closeModal = () => {
    setStatus("");

    dispatch(resetIsStatusModalShown());
  };

  return (
    <div className="setStatusForm">
      <h2 className="setStatusForm__heading">Set status</h2>

      <CustomInput
        title="Status"
        value={status}
        setAction={setStatus}
        clearAction={handleClearStatus}
        errorNoValue={error.noStatus}
        // errorShortValue={error.shortstatus}
      />

      <FormButtons
        redTitle="Cancel"
        redAction={closeModal}
        greenTitle="Add"
        // greenAction={startNewChat}
      />
    </div>
  );
};
