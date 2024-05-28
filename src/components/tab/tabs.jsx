import React, { useRef, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import {
  TabHeaderContainer,
  StylizedTab,
  StyledTabPanel,
  TabsHolder,
  inactiveTab,
  TabSlider
} from "./styles";

export const Tab = ({ label, active, onClick }) => {
  return (
    <StylizedTab
      role="tab"
      active={active}
      onClick={onClick}
      inactiveStyle={inactiveTab}
    >
      {label}
    </StylizedTab>
  );
};

export const Tabs = ({ selectedTab, onChange, children }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    setContainerWidth(containerRef.current.getBoundingClientRect().width);
  }, [containerRef]);

  const sliderWidth = containerWidth / children.length;

  const tabs = children.map((child) => {
    const handleClick = (e) => {
      onChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick
    });
  });

  return (
    <TabHeaderContainer ref={containerRef}>
      <TabsHolder >{tabs}</TabsHolder>
      <TabSlider width={sliderWidth} index={selectedTab} />
    </TabHeaderContainer>
  );
};

export const TabPanel = ({ children, value, selectedIndex }) => {
  const hidden = value !== selectedIndex;

  return (
    <StyledTabPanel hidden={hidden} active={!hidden}>
      {children}
    </StyledTabPanel>
  );
};




Tab.propsTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
  active: PropTypes.any,
  onClick: PropTypes.any,
};

Tabs.propsTypes = {
  selectedTab: PropTypes.any,
  onChange: PropTypes.any,
  children: PropTypes.any,
};

TabPanel.propsTypes = {
  children: PropTypes.any,
  value: PropTypes.any,
  selectedIndex: PropTypes.any,
};
