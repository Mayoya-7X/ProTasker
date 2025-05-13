import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-gray-100 p-4">
      <ul>
        <li className="mb-4 font-semibold">Dashboard</li>
        <li className="mb-4">Tasks</li>
        <li className="mb-4">Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;