import React from "react";
import "../css/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's good?</h2>
      </div>
    </div>
  );
};
