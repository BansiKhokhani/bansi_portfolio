import React, { useState } from "react";
import "./Tooltip.css"; // Make sure to create this file

const Tooltip = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className="tooltip">{content}</div>}
    </div>
  );
};

export default Tooltip;
