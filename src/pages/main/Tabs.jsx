import React from 'react';

const Tabs = ({ activeTab, setActiveTab, children }) => {
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className=''>
      <ul className="flex  absolute bottom-0 w-full bg-custom-dark-green border-t-2  shadow-lg">
        {children.map((tab) => (
          <li
            key={tab.props.label}
            className={`flex-1 text-center text-xs py-4 cursor-pointer ${activeTab === tab.props.label ? 'text-white font-semibold' : 'text-custom-green'}`}
            onClick={(e) => handleClick(e, tab.props.label)}
          >
            <div className="flex flex-col items-center text-sm">
              {tab.props.icon}
              <span className="mt-1">{tab.props.label}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        {children.map((one) => {
          if (one.props.label === activeTab) return <div key={one.props.label}>{one.props.children}</div>;
          return null;
        })}
      </div>
    </div>
  );
};

export default Tabs;