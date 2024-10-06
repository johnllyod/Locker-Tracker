import React, { useState } from "react";
import "./LockerGrid.css";
import { db } from "./firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const LockerGrid = () => {
  const lockers = Array.from({ length: 40 }, (_, i) => i + 1);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [lockerData, setLockerData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLockerClick = async (lockerNumber) => {
    setSelectedLocker(lockerNumber);
    setLoading(true);

    try {
      const q = query(
        collection(db, "users"),
        where("lockerNumber", "==", lockerNumber)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        setLockerData(userData);
      } else {
        console.log("No such document for this lockerNumber!");
        setLockerData(null);
      }
    } catch (error) {
      console.error("Error fetching locker data:", error);
      setLockerData(null);
    }

    setLoading(false);
  };

  return (
    <div className="locker-tracker">
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
        Welcome to Locker Tracker
      </h2>
      <p>Locker # 001 - 070</p>
      <div className="locker-grid">
        {lockers.map((locker) => (
          <div
            key={locker}
            className="locker"
            onClick={() => handleLockerClick(locker)}
          >
            {locker}
            <div className="locker-lines">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="search-filter">
        <input type="text" placeholder="Search" />
        <button>Search</button>
        <button>Filter</button>
      </div>

      {selectedLocker && (
        <div className="selected-locker">
          <h3>Selected Locker: {selectedLocker}</h3>
          {loading ? (
            <p>Loading...</p>
          ) : lockerData ? (
            <div>
              <p>
                <strong>Name:</strong> {lockerData.name}
              </p>
              <p>
                <strong>Email:</strong> {lockerData.email}
              </p>
              <p>
                <strong>Locker Number:</strong> {lockerData.lockerNumber}
              </p>
            </div>
          ) : (
            <p>No data available for this locker.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LockerGrid;
