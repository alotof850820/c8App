import { Icon } from "@iconify/react";
import { FC, useState } from "react";
import "./topbar.scss";
import { TopBarProps } from "./types/topbar";

const TopBar: FC<TopBarProps> = ({ num }) => {
  const [number, setNumber] = useState(num);
  return (
    <div className="top_bar">
      <div className="left">
        <Icon icon="bitcoin-icons:search-outline" />
        <Icon icon="solar:user-linear" />
      </div>

      <div className="center">C=8</div>

      <div className="right">
        <button onClick={() => setNumber(number + 1)}>+1</button>
        <div className="cart_box">
          <Icon icon="bi:cart" />
          <span className="number_box">
            <div className="number">{number}</div>
          </span>
        </div>

        <div className="list">
          <Icon icon="ph:list" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
