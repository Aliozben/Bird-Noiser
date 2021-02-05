import {SvgIconComponent} from "@material-ui/icons";
import React from "react";
import "../css/SidebarSection.css";

interface Props {
  text: string;
  Icon: SvgIconComponent;
  active?: boolean;
}

export const SidebarSection = ({active, text, Icon}: Props) => {
  return (
    <div className={`sidebarSection ${active && "sidebarSection--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};
