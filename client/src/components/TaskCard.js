import React from 'react';

const TaskCard = ({ title, status }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-3">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">Status: {status}</p>
    </div>
  );
};

export default TaskCard;