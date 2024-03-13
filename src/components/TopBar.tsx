import "./topbar.scss";
import UseNavigate from "@/router/hook";
import { Icon } from "@iconify/react/dist/iconify.js";

const TopBar = ({
  title,
  children,
  style,
}: {
  title?: string;
  children?: JSX.Element;
  style?: React.CSSProperties;
}) => {
  const { goBack } = UseNavigate();
  return (
    <div className="top_bar " style={style}>
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
