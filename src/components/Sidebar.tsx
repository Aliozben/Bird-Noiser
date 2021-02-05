import React from "react";
import "../css/Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import {SidebarSection} from "./SidebarSection";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Button} from "@material-ui/core";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_twitterIcon" />
      <SidebarSection active={true} text="Home" Icon={HomeIcon} />
      <SidebarSection text="Search" Icon={SearchIcon} />
      <SidebarSection text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarSection text="Messages" Icon={MailOutlineIcon} />
      <SidebarSection text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarSection text="List" Icon={ListAltIcon} />
      <SidebarSection text="Profile" Icon={PermIdentityIcon} />
      <SidebarSection text="More" Icon={MoreHorizIcon} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};
