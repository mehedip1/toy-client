import React, { useState } from 'react';
import ToyCard from './ToyCard';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className="flex mb-4">
        <button
          className={`flex-1 p-4 ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Action Toy
        </button>
        <button
          className={`flex-1 p-4 ${
            activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Super Hero
        </button>
        <button
          className={`flex-1 p-4 ${
            activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(3)}
        >
          War Toy
        </button>
      </div>

      <div className="p-4 bg-gray-200">
        {activeTab === 1 && <h1><ToyCard></ToyCard></h1>}
        {activeTab === 2 && <h1><ToyCard></ToyCard></h1>}
        {activeTab === 3 && <h1><ToyCard></ToyCard></h1>}
      </div>
    </div>
  );
};

export default Tabs;
