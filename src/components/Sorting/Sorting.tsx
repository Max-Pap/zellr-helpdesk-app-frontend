import { useRef, useState } from "react";
import "./Sorting.scss";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setSorting } from "../../Redux/Slices/sorting.slice";
import { useClickOutside } from "../../hooks/useClickOutside";

const teams = [
  "First team",
  "Second team",
  "Third team",
  "Fourth team",
  "Fifth team",
  "Sixth team",
  "Seventh team",
  "Eighth team",
  "Ninth team",
  "Tenth team",
];

export const Sorting: React.FC = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const sorting = useAppSelector((state) => state.sorting.value);
  const dispatch = useAppDispatch();

  const sortingRef = useRef<HTMLDivElement>(null);
  useClickOutside(sortingRef, () => setIsDropDown(false));

  const handleListDisplay = () => {
    setIsDropDown((prevState) => !prevState);
  };

  const handleOptionClick = (option: string) => {
    dispatch(setSorting(option));

    setIsDropDown(false);
  };

  return (
    <>
      <p className="sorting__text">Teams</p>

      <div className="sorting" ref={sortingRef}>
        <div
          className={cn("sorting__select", {
            "sorting__select-col": isDropDown,
          })}
          onClick={handleListDisplay}
        >
          <p className="sorting__select--default">{sorting}</p>
          <span
            className={cn("sorting__arrow", {
              "sorting__arrow--open": isDropDown,
            })}
          />
        </div>

        {isDropDown && (
          <ul className="sorting__select-items">
            {sorting !== "All teams" && (
              <li
                className="sorting__item"
                onClick={() => handleOptionClick("All teams")}
              >
                All teams
              </li>
            )}

            {teams.map((team) => (
              <li
                className="sorting__item"
                key={team}
                onClick={() => handleOptionClick(team)}
              >
                {team}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
