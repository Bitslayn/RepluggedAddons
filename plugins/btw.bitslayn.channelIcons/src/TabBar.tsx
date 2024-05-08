import React, { useState } from "react";

export const TabBar = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleMouseEnter = (tabId) => {
    setHoveredTab(tabId);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {tabs.map((tab) => (
        <div key={tab.id} style={{ display: "inline-block" }}>
          <button
            className={`channelTabBarItem ${activeTab === tab.id ? "selected" : ""}`}
            onClick={() => handleTabClick(tab.id)}
            onMouseEnter={() => handleMouseEnter(tab.id)}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative" }}>
            {tab.label}
            {activeTab === tab.id && <div className="highlight"></div>}
            {(hoveredTab === tab.id || activeTab === tab.id) && (
              <div
                className="hoverIndicator"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: 2,
                  borderRadius: 3,
                  backgroundColor: activeTab === tab.id ? "darkblue" : "lightblue",
                }}
              />
            )}
          </button>
        </div>
      ))}
      <div>{tabs.map((tab) => activeTab === tab.id && tab.element())}</div>
    </div>
  );
};
