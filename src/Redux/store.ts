import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CategoryApi } from "./RTK_Query/category.service";
import { chatQueryReducer } from "./Slices/chatSearch.slice";
import { isCategoryModalOpenReducer } from "./Slices/isCategoryModalOpen";
import { isNewChatModalOpenReducer } from "./Slices/isNewChatModalOpen";
import { chosenCategoryReducer } from "./Slices/chosenCategory.slice";
import { subjectReducer } from "./Slices/subject.slice";
import { initialMessageReducer } from "./Slices/initialMessage.slice";
import { sortingReducer } from "./Slices/sorting.slice";
import { isTaskModalShownReducer } from "./Slices/isTaskModalShown.slice";
import { isNoteModalShownReducer } from "./Slices/isNoteModalShown.slice";
import { isTagModalShownReducer } from "./Slices/isTagModalShown.slice";
import { isStatusModalShownReducer } from "./Slices/isStatusModalShown.slice";
import { ConversationApi } from "./RTK_Query/conversation.service";
import { MessageApi } from "./RTK_Query/message.service";
import { messageContentReducer } from "./Slices/messageContent.slice";

export const store = configureStore({
  reducer: {
    chatQuery: chatQueryReducer,
    isCategoryModalOpen: isCategoryModalOpenReducer,
    isNewChatModalOpen: isNewChatModalOpenReducer,
    isTaskModalShown: isTaskModalShownReducer,
    isNoteModalShown: isNoteModalShownReducer,
    isTagModalShown: isTagModalShownReducer,
    isStatusModalShown: isStatusModalShownReducer,
    messageContent: messageContentReducer,

    chosenCategory: chosenCategoryReducer,
    subject: subjectReducer,
    initialMessage: initialMessageReducer,
    sorting: sortingReducer,

    [CategoryApi.reducerPath]: CategoryApi.reducer,
    [ConversationApi.reducerPath]: ConversationApi.reducer,
    [MessageApi.reducerPath]: MessageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      CategoryApi.middleware,
      ConversationApi.middleware,
      MessageApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
