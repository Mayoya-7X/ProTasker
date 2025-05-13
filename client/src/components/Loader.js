import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full border-4 border-t-4 border-blue-500 h-12 w-12"></div>
    </div>
  );
};

export default Loader;