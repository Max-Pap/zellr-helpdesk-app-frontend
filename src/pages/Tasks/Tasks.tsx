import { ChatActions } from "../../components/ChatActions/ChatActions";
import { ChatFilter } from "../../components/ChatFilter/ChatFilter";
import { TaskTable } from "../../components/TaskTable/TaskTable";
import "./Tasks.scss";

export const Tasks: React.FC = () => {
  return (
    <div className="tasks">
      <div className="tasks__header">
        <div className="tasks__filter">
          <ChatFilter />
        </div>
        <div className="tasks__actions">
          <ChatActions />
        </div>
      </div>

      <div className="tasks__list">
        <TaskTable />
      </div>
    </div>
  );
};
