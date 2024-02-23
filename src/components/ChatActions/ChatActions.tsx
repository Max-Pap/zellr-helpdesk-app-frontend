import "./ChatActions.scss";

import addNewTask from "../../assets/icons/addTask.svg";
import addNote from "../../assets/icons/addNote.svg";
import addTag from "../../assets/icons/addTag.svg";
import setStatus from "../../assets/icons/setStatus.svg";

import { ActionButton } from "../ActionButton/ActionButton";
import { useAppDispatch } from "../../Redux/store";
import { setIsTaskModalShown } from "../../Redux/Slices/isTaskModalShown.slice";
import { setIsNoteModalShown } from "../../Redux/Slices/isNoteModalShown.slice";
import { setIsTagModalShown } from "../../Redux/Slices/isTagModalShown.slice";
import { setIsStatusModalShown } from "../../Redux/Slices/isStatusModalShown.slice";

export const ChatActions: React.FC = () => {
  const dispatch = useAppDispatch();

  const openTaskModal = () => {
    dispatch(setIsTaskModalShown());
  };

  const openNoteModal = () => {
    dispatch(setIsNoteModalShown());
  };

  const openTagModal = () => {
    dispatch(setIsTagModalShown());
  };

  const openStatusModal = () => {
    dispatch(setIsStatusModalShown());
  };

  return (
    <>
      <div className="chatActions">
        <div className="chatActions__mainActions">
          <ActionButton
            action={openTaskModal}
            actionName="Add task"
            imgSrc={addNewTask}
          />

          <ActionButton
            action={openNoteModal}
            actionName="Add note"
            imgSrc={addNote}
          />

          <ActionButton
            action={openTagModal}
            actionName="Add tag"
            imgSrc={addTag}
          />
        </div>

        <div className="chatActions__secondaryActions">
          <ActionButton
            action={openStatusModal}
            actionName="Set status"
            imgSrc={setStatus}
          />
        </div>
      </div>
    </>
  );
};
