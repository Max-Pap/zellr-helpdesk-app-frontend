import "./Dashboard.scss";

import chatsIconBlue from "../../assets/icons/chats_icon.svg";
import chatsIconGrey from "../../assets/icons/chats_icon-grey.svg";
import tasksIconBlue from "../../assets/icons/tasks_icon.svg";
import tasksIconGrey from "../../assets/icons/tasks_icon-grey.svg";

import { useAppSelector } from "../../Redux/store";
import { Outlet } from "react-router-dom";
import { AddTaskForm } from "../AddTaskForm/AddTaskForm";
import { AddNoteForm } from "../AddNoteForm/AddNoteForm";
import { AddTagForm } from "../AddTagForm/AddTagForm";
import { Modal } from "../Modal/Modal";
import { SetStatusForm } from "../SetStatusForm/SetStatusForm";
import { CustomNavLink } from "../CustomNavLink/CustomNavLink";

export const Dashboard = () => {
  const isTaskModalShown = useAppSelector(
    (state) => state.isTaskModalShown.value
  );
  const isNoteModalShown = useAppSelector(
    (state) => state.isNoteModalShown.value
  );
  const isTagModalShown = useAppSelector(
    (state) => state.isTagModalShown.value
  );
  const isStatusModalShown = useAppSelector(
    (state) => state.isStatusModalShown.value
  );

  return (
    <div className="dashboard">
      {isTaskModalShown && <Modal children={<AddTaskForm />} />}

      {isNoteModalShown && <Modal children={<AddNoteForm />} />}

      {isTagModalShown && <Modal children={<AddTagForm />} />}

      {isStatusModalShown && <Modal children={<SetStatusForm />} />}

      <div className="dashboard__buttons">
        <CustomNavLink
          title="Conversations"
          viewToSet="/chats"
          activeImg={chatsIconBlue}
          inActiveImg={chatsIconGrey}
        />

        <CustomNavLink
          title="Tasks"
          viewToSet="/tasks"
          activeImg={tasksIconBlue}
          inActiveImg={tasksIconGrey}
        />
      </div>

      <div className="dashboard__outlet">
        <Outlet />
      </div>
    </div>
  );
};
