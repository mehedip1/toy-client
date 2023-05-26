import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex mb-4">
        <button
          className={`flex-1 p-4 ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Iron man
        </button>
        <button
          className={`flex-1 p-4 ${
            activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Thor
        </button>
        <button
          className={`flex-1 p-4 ${
            activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(3)}
        >
          Thons
        </button>
      </div>

      <div className="p-4 bg-gray-200">
        {activeTab === 1 && <h1>Content for Tab 1</h1>}
        {activeTab === 2 && <h1>Content for Tab 2</h1>}
        {activeTab === 3 && <h1>Content for Tab 3</h1>}
      </div>
    </div>
  );
};

export default Tabs;
