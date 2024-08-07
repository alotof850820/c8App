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
    <div className="fixed top-0 left-0 w-full h-[15vw] flex items-center justify-start box-border z-[999]" style={style}>
      <div className="flex items-center justify-start gap-[3vw] p-[4vw] flex-1">
        <Icon
          className="icon theme_font"
          icon="flowbite:angle-left-outline"
          fontSize={"7.5vw"}
          onClick={goBack}
        ></Icon>
        <div className="flex items-center theme_font">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default TopBar;
