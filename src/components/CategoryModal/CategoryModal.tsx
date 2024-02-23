import React from "react";
import { Category } from "../../types/Category";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import "./CategoryModal.scss";

type Props = {
  categories: Category[];
  modalRef: React.RefObject<HTMLDivElement>;
};

export const CategoryModal: React.FC<Props> = ({ categories, modalRef }) => (
  <div className="categoryModal" ref={modalRef}>
    <h4 className="categoryModal__heading">
      Please select the option which best describes your needs
    </h4>

    <div className="categoryModal__list">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  </div>
);
