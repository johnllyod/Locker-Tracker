import React, { useState } from "react";
import { db } from "./firebaseConfig";
import {
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import "./Form.css";

const Form = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lockerNumber, setLockerNumber] = useState("");

  const handleAddUser = async (e) => {
    e.preventDefault();

    try {
      const userDoc = doc(db, "users", employeeId);
      await setDoc(userDoc, {
        name,
        email,
        lockerNumber: parseInt(lockerNumber, 10),
      });
      alert("User added successfully!");
      clearForm();
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    try {
      const userDoc = doc(db, "users", employeeId);
      await updateDoc(userDoc, {
        name,
        email,
        lockerNumber: parseInt(lockerNumber, 10),
      });
      alert("User updated successfully!");
      clearForm();
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  const handleDeleteUserByLockerNumber = async () => {
    try {
      if (!lockerNumber) {
        alert("Please select a locker number.");
        return;
      }

      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("lockerNumber", "==", parseInt(lockerNumber, 10))
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert(`No user found for locker number ${lockerNumber}`);
        return;
      }

      const userDoc = querySnapshot.docs[0].ref;
      await deleteDoc(userDoc);
      alert(`User for locker number ${lockerNumber} deleted successfully!`);
      clearForm();
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  const clearForm = () => {
    setEmployeeId("");
    setName("");
    setEmail("");
    setLockerNumber("");
  };

  return (
    <form className="user-locker-form">
      <div className="form-inputs">
        <p>
          <label>Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </p>
        <p>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </p>
        <p>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <label>Locker Number:</label>
          <input
            type="number"
            value={lockerNumber}
            onChange={(e) => setLockerNumber(e.target.value)}
            required
          />
        </p>
      </div>

      <div className="form-btn">
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
        <button
          type="button"
          onClick={handleUpdateUser}
          style={{ marginLeft: "10px" }}
        >
          Update User
        </button>
        <button
          type="button"
          onClick={handleDeleteUserByLockerNumber}
          style={{ marginLeft: "10px" }}
        >
          Delete User by Locker Number
        </button>
      </div>
    </form>
  );
};

export default Form;
