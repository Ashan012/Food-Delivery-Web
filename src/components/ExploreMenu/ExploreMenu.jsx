import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = () => {
  return (
    <div>
      {menu_list.map((e) => {
        return <div>{e.menu_name}</div>;
      })}
    </div>
  );
};

export default ExploreMenu;
