import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">ProTasker</h1>
      <div>
        <button className="bg-white text-blue-600 px-3 py-1 rounded">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;