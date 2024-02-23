import React from "react";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Homepage } from "./pages/Homepage/Homepage";
import { Chats } from "./pages/Chats/Chats";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Tasks } from "./pages/Tasks/Tasks";

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="home" element={<Homepage />} />
        <Route path="/" element={<Navigate to="home" />} />
        <Route element={<Dashboard />}>
          <Route path="chats" element={<Chats />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>

        {/* <Route path="dashboard" element={<ChatList />} /> */}

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>

      <Footer />
    </div>
  );
};
