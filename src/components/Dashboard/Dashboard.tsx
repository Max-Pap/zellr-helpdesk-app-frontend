import "./Dashboard.scss";

import chatsIconBlue from "../../assets/icons/chats_icon.svg";
import chatsIconGrey from "../../assets/icons/chats_icon-grey.svg";
import tasksIconBlue from "../../assets/icons/tasks_icon.svg";
import tasksIconGrey from "../../assets/icons/tasks_icon-grey.svg";

import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setView } from "../../Redux/Slices/view.slice";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
  const view = useAppSelector((state) => state.view.value);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const refreshView = location.pathname;
    dispatch(setView(refreshView.slice(1)));
  }, []);

  const changeView = (option: string) => {
    dispatch(setView(option));
  };

  return (
    <div className="dashboard">
      {isTaskModalShown && <Modal children={<AddTaskForm />} />}

      {isNoteModalShown && <Modal children={<AddNoteForm />} />}

      {isTagModalShown && <Modal children={<AddTagForm />} />}

      {isStatusModalShown && <Modal children={<SetStatusForm />} />}

      <div className="dashboard__buttons">
        <CustomNavLink
          title={"Conversations"}
          currentView={view}
          viewToSet={"chats"}
          changeViewAction={changeView}
          activeImg={chatsIconBlue}
          inActiveImg={chatsIconGrey}
        />

        <CustomNavLink
          title={"Tasks"}
          currentView={view}
          viewToSet={"tasks"}
          changeViewAction={changeView}
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
