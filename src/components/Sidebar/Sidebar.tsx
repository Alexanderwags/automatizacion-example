import React from "react";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li className="selected">
          <p>Dashboard</p>
        </li>
        <li>
          <p>Users</p>
        </li>
        <li>
          <p>Posts</p>
        </li>
        <li>
          <p>Settings</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
