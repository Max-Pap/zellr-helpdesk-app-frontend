import {
  resetChatQuery,
  setChatQuery,
} from "../../Redux/Slices/chatSearch.slice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { Sorting } from "../Sorting/Sorting";
import "./ChatFilter.scss";

export const ChatFilter: React.FC = () => {
  const chatQuery = useAppSelector((state) => state.chatQuery.value);
  const dispatch = useAppDispatch();

  const handleChatSearch = (query: string) => {
    dispatch(setChatQuery(query));
  };

  const clearChatQuery = () => {
    dispatch(resetChatQuery());
  };

  return (
    <div className="chatFilter">
      <div className="chatFilter__search">
        <Sorting />
      </div>

      <div className="chatFilter__search">
        <p className="chatFilter__text">Search</p>
        <div className="chatFilter__block">
          <input
            type="text"
            value={chatQuery}
            onChange={(e) => handleChatSearch(e.target.value)}
            className="chatFilter__input"
          />
          {chatQuery !== "" && (
            <button className="chatFilter__clear" onClick={clearChatQuery} />
          )}
        </div>
      </div>
    </div>
  );
};
