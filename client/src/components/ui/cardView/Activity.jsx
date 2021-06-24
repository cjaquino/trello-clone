import React from "react";

const Activity = () => {
  return (
    <li className="activity-section">
      <h2 className="activity-icon icon">Activity</h2>
      <ul className="horiz-list">
        <li className="not-implemented">Show Details</li>
      </ul>
      <ul className="modal-activity-list">
        <p>No recent activity...</p>
      </ul>
    </li>
  );
};

export default Activity;