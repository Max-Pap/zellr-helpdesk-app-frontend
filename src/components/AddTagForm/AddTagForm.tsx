import React, { useState } from "react";
import "./AddTagForm.scss";
import { useAppDispatch } from "../../Redux/store";
import { resetIsTagModalShown } from "../../Redux/Slices/isTagModalShown.slice";
import { CustomInput } from "../CustomInput/CustomInput";
import { FormButtons } from "../FormButtons/FormButtons";

export const AddTagForm: React.FC = () => {
  const [tag, setTag] = useState("");
  const dispatch = useAppDispatch();

  const noErrors = {
    noTag: false,
  };

  const [
    error,
    // setError,
  ] = useState(noErrors);

  const handleClearTag = () => {
    setTag("");
  };

  const closeModal = () => {
    setTag("");

    dispatch(resetIsTagModalShown());
  };

  return (
    <div className="addTagForm">
      <h2 className="addTagForm__heading">Add tag</h2>

      <CustomInput
        title="Tag"
        value={tag}
        setAction={setTag}
        clearAction={handleClearTag}
        errorNoValue={error.noTag}
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
