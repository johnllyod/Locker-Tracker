import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Home from "./Home";
import Directory from "./Directory";
import Form from "./Form";
import UserTable from "./UserTable";
import LockerGrid from "./LockerGrid";
import TopNav from "./TopNav";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route
          path="/home"
          element={
            <>
              <TopNav />
              <Home />
            </>
          }
        />
        <Route
          path="/directory"
          element={
            <>
              <TopNav />
              <Directory />
            </>
          }
        />
        <Route
          path="/locker"
          element={
            <>
              <TopNav />
              <LockerGrid />
              <Form />
              <UserTable />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
