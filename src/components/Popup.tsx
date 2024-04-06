import { useEffect, useState } from "react";
import "./popup.scss";

const Popup = ({
  show,
  height = "43vw",
  background = "white",
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
        <div className="popup_backdrop_component" onClick={close}>
          <div
            className={`popup_box_component ${shouldFadeOut ? "fade-out" : ""}`}
            onClick={(e) => e.stopPropagation()}
            style={{ height, background }}
          >
            <div className="popup-content">
              <div className="popup-inner-content">{children || "无内容"}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
