import "./topbar.scss";
import UseNavigate from "@/router/hook";
import { Icon } from "@iconify/react/dist/iconify.js";

const TopBar = ({
  title,
  children,
  style,
  className,
}: {
  title?: string;
  children?: JSX.Element;
  style?: React.CSSProperties;
  className?: string;
}) => {
  const { goBack } = UseNavigate();
  return (
    <div
      style={style}
      className={className ? className + " top_bar" : "top_bar"}
    >
      <div className="top_box">
        <Icon
          className="icon theme_font"
          icon="flowbite:angle-left-outline"
          fontSize={"7.5vw"}
          onClick={goBack}
        ></Icon>
        <div className="register theme_font">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default TopBar;
