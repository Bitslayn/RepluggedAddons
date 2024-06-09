import React, { useState } from "react";
import { Divider, Text } from "replugged/components";

export const TabBar = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleTabClick = tabId => {
    setActiveTab(tabId);
  };

  const handleMouseEnter = tabId => {
    setHoveredTab(tabId);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="channelTabBar" style={{ padding: "8px 8px 0px 8px" }}>
        {tabs.map(
          (tab: {
            id: React.Key;
            label:
              | string
              | number
              | boolean
              | React.ReactElement<any, string | React.JSXElementConstructor<any>>
              | Iterable<React.ReactNode>
              | React.ReactPortal;
          }) => (
            <div key={tab.id} style={{ display: "inline-block" }}>
              <button
                className={`channelTabBarItem${activeTab === tab.id ? " selected" : ""}`}
                onClick={() => handleTabClick(tab.id)}
                onMouseEnter={() => handleMouseEnter(tab.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  position: "relative",
                  color:
                    hoveredTab === tab.id || activeTab === tab.id
                      ? "var(--interactive-active)"
                      : "var(--interactive-normal)",
                }}>
                {tab.label}
                {activeTab === tab.id && <div className="obscureHighlight"></div>}
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
                      backgroundColor:
                        activeTab === tab.id
                          ? "var(--control-brand-foreground)"
                          : "var(--brand-500)",
                    }}
                  />
                )}
              </button>
            </div>
          )
        )}
        {/* <Text.Normal
          style={{
            position: "absolute",
            top: "52px",
            right: "254px",
            color: "var(--control-brand-foreground)",
          }}>
          {
            tabs.map(tab => activeTab === tab.id && tab.element().props.children.length)[
              activeTab - 1
            ]
          }{" "}
          icons
        </Text.Normal> */}
        <Divider></Divider>
      </div>
      {tabs.map(tab => activeTab === tab.id && tab.element())}
    </div>
  );
};
