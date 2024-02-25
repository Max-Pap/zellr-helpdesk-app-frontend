import React, { useRef } from "react";
import "./Homepage.scss";

import logo from "../../assets/images/KirppariKalleFullLogo.png";
import { ConversationList } from "../../components/ConversationList/ConversationList";
import { CategoryModal } from "../../components/CategoryModal/CategoryModal";
// import { useGetAllCategoriesQuery } from "../../Redux/RTK_Query/category.service";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import {
  setIsCategoryModalClose,
  setIsCategoryModalOpen,
} from "../../Redux/Slices/isCategoryModalOpen";
import { testChats } from "../../data/testChats";
import { testCategories } from "../../data/testCategories";
import { Modal } from "../../components/Modal/Modal";
import { NewChatForm } from "../../components/NewChatForm/NewChatForm";
import { useClickOutside } from "../../hooks/useClickOutside";

export const Homepage: React.FC = () => {
  const isCategoryModalOpen = useAppSelector(
    (state) => state.isCategoryModalOpen.value
  );
  const isNewChatModalOpen = useAppSelector(
    (state) => state.isNewChatModalOpen.value
  );
  const dispatch = useAppDispatch();

  const categoryModalRef = useRef<HTMLDivElement>(null);
  useClickOutside(categoryModalRef, () => dispatch(setIsCategoryModalClose()));

  // const { data: categories, isSuccess } = useGetAllCategoriesQuery();

  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(setIsCategoryModalOpen());
  };

  return (
    <div className="homepage">
      <div className="homepage__flex">
        {/* {isSuccess &&  */}
        {isCategoryModalOpen && (
          <Modal
            children={
              <CategoryModal
                categories={testCategories}
                modalRef={categoryModalRef}
              />
            }
          />
        )}

        {isNewChatModalOpen && <Modal children={<NewChatForm />} />}

        <img src={logo} alt="KirppariKalle Logo" className="homepage__logo" />

        <h1 className="homepage__heading">Helpdesk</h1>

        <button className="homepage__button" onClick={handleOpenModal}>
          New conversation
        </button>
      </div>

      {testChats.length !== 0 && (
        <>
          <p className="homepage__notice">
            Please start a new conversation for each new subject instead of
            continuing an old one.
          </p>

          <ConversationList />
        </>
      )}
    </div>
  );
};
