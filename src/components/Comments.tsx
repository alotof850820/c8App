import { useEffect, useState } from "react";
import "./comments.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const Popup = ({
  show,
  height = "43vw",
  className,
  children,
  onClose,
}: {
  show?: boolean;
  height?: string;
  background?: string;
  className?: string;
  children?: JSX.Element;
  onClose?: () => void;
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [shouldFadeOut, setShouldFadeOut] = useState(show);

  const close = () => {
    setShouldFadeOut(true);
    setTimeout(() => {
      onClose && onClose();
      setShouldFadeOut(false);
    }, 300);
  };

  const stopScroll = () => {
    setScrollY(window.pageYOffset);
    document.body.style.position = "fixed";
    document.body.style.overflow = "hidden";
    document.body.style.top = `-${scrollY}px`;
  };

  const recoverScroll = () => {
    document.body.style.position = "";
    document.body.style.overflow = "";
    window.scrollTo(0, scrollY);
  };

  useEffect(() => {
    if (show) {
      stopScroll();
    } else {
      recoverScroll();
    }

    return () => {
      recoverScroll();
    };
  }, [show]);

  return (
    <div className={className}>
      {show && (
        <div className="comments_backdrop_component">
          <div
            className={`popup_box_component theme_bg theme_font  ${
              shouldFadeOut ? "fade-out" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{ height }}
          >
            <div className="comments-content  ">
              <div className="title">
                留言
                <Icon icon="akar-icons:cross" onClick={close}></Icon>
              </div>
              <div className="comments-inner-content">
                {children || "无内容"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
