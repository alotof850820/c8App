import "./index.scss";
import { Icon } from "@iconify/react";

const Index = () => {
  return (
    <div className="index">
      <div className="top_bar">
        <div className="left">
          <Icon icon="bi:search"></Icon>
          <Icon icon="ph:user-thin"></Icon>
        </div>

        <div>C=8</div>
        <div className="right">
          <Icon icon="solar:book-bold-duotone"></Icon>
          <Icon icon="gg:list" className="list"></Icon>
        </div>
      </div>
    </div>
  );
};

export default Index;
