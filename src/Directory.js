import React from "react";
import "./Directory.css";

const Directory = () => {
  return (
    <div className="directory">
      <div className="convert-button">
        <a href="/#">Convert to Excel</a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Employer ID</th>
            <th>Locker Number</th>
            <th>Locker Status</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {sampleUsers.map((user, i) => (
            <tr key={i}>
              <td>
                <input type="checkbox" name="user" id="User" value={user.eid} />
                #{user.eid}
              </td>
              <td>{user.lockerNum}</td>
              <td>
                <div className="stat-container">
                  <div className="status">
                    <div></div>
                    {user.lockerStat}
                  </div>
                </div>
              </td>
              <td>{user.name}</td>
              <td>{user.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Directory;

// Sample data
const sampleUsers = [
  {
    eid: "0000",
    lockerNum: 1,
    lockerStat: "Active",
    name: "Olivia Rhye",
    department: "Creatives",
  },
  {
    eid: "0001",
    lockerNum: 2,
    lockerStat: "Active",
    name: "Phoenix Baker",
    department: "Creatives",
  },
  {
    eid: "0002",
    lockerNum: 3,
    lockerStat: "Active",
    name: "Lana Steiner",
    department: "Creatives",
  },
];
