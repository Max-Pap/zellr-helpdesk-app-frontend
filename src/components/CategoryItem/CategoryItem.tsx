import { Category } from "../../types/Category";
import "./CategoryItem.scss";
import { useAppDispatch } from "../../Redux/store";
import { setIsCategoryModalClose } from "../../Redux/Slices/isCategoryModalOpen";
import { setIsNewChatModalOpen } from "../../Redux/Slices/isNewChatModalOpen";
import { setChosenCategory } from "../../Redux/Slices/chosenCategory.slice";

type Props = {
  category: Category;
};

export const CategoryItem: React.FC<Props> = ({ category }) => {
  const { title, description } = category;
  const dispatch = useAppDispatch();

  const initializeNewChat = () => {
    dispatch(setIsCategoryModalClose());
    dispatch(setIsNewChatModalOpen());
    dispatch(setChosenCategory(title));
  };

  return (
    <div className="categoryItem" onClick={initializeNewChat}>
      <h3 className="categoryItem__title">{title}</h3>
      <p className="categoryItem__description">{description}</p>
    </div>
  );
};
