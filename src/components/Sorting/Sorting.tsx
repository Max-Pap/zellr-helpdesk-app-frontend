import { useEffect, useRef, useState } from "react";
import "./Sorting.scss";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setSorting } from "../../Redux/Slices/sorting.slice";

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
  const [isDropedDown, setIsDropedDown] = useState(false);
  const sorting = useAppSelector((state) => state.sorting.value);
  const dispatch = useAppDispatch();

  const sortingRef = useRef<HTMLDivElement>(null);

  const handleClickOutside: EventListener = (event) => {
    const targetNode = event.target as Node;

    if (sortingRef.current && !sortingRef.current.contains(targetNode)) {
      setIsDropedDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleListDisplay = () => {
    if (isDropedDown) {
      setIsDropedDown(false);

      return;
    }

    setIsDropedDown(true);
  };

  const handleOptionClick = (option: string) => {
    dispatch(setSorting(option));

    setIsDropedDown(false);
  };

  return (
    <>
      <p className="sorting__text">Teams</p>

      <div className="sorting" ref={sortingRef}>
        <div
          className={cn("sorting__select", {
            "sorting__select-col": isDropedDown,
          })}
          onClick={handleListDisplay}
        >
          <p className="sorting__select--default">{sorting}</p>
          <span
            className={cn("sorting__arrow", {
              "sorting__arrow--open": isDropedDown,
            })}
          />
        </div>

        {isDropedDown && (
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
