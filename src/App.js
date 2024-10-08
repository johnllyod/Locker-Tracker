import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { ProtectedRoute } from "./components/protectedRoute";
import Welcome from "./Welcome";
import Home from "./Home";
import Directory from "./Directory";
import Form from "./Form";
import UserTable from "./UserTable";
import LockerGrid from "./LockerGrid";
import TopNav from "./TopNav";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome user={user} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute user={user}>
              <TopNav />
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directory"
          element={
            <ProtectedRoute user={user}>
              <TopNav />
              <Directory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/locker"
          element={
            <ProtectedRoute user={user}>
              <TopNav />
              <LockerGrid />
              <Form />
              <UserTable />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
