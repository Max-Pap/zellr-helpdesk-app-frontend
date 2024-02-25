import {
  resetChatQuery,
  setChatQuery,
} from "../../Redux/Slices/chatSearch.slice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import "./Search.scss";

export const Search: React.FC = () => {
  const chatQuery = useAppSelector((state) => state.chatQuery.value);
  const dispatch = useAppDispatch();

  const handleChatSearch = (query: string) => {
    dispatch(setChatQuery(query));
  };

  const clearChatQuery = () => {
    dispatch(resetChatQuery());
  };

  return (
    <>
      <p className="search__title">Search</p>
      <div className="search__input">
        <input
          type="text"
          value={chatQuery}
          onChange={(e) => handleChatSearch(e.target.value)}
          className="search__field"
        />

        {chatQuery !== "" && (
          <button
            className="search__clear"
            aria-label="Clear search"
            onClick={clearChatQuery}
          />
        )}
      </div>
    </>
  );
};
