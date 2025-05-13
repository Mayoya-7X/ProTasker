import React from 'react';

const AddTaskModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <input className="w-full p-2 border mb-3" placeholder="Task Title" />
        <textarea className="w-full p-2 border mb-3" placeholder="Description"></textarea>
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded mr-2">Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;