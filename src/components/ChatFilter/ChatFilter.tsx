import { Search } from "../Search/Search";
import { Sorting } from "../Sorting/Sorting";
import "./ChatFilter.scss";

export const ChatFilter: React.FC = () => (
  <div className="chatFilter">
    <div className="chatFilter__container">
      <Sorting />
    </div>

    <div className="chatFilter__container">
      <Search />
    </div>
  </div>
);
