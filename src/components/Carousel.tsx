import { useEffect, useState } from "react";
import "./carousel.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const Carousel = () => {
  const [startX, setStartX] = useState(0);
  const [target, setTarget] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const delta = event.changedTouches[0].clientX - startX;
    const newIndex = target + (delta > 30 ? -1 : delta < -30 ? 1 : 0);
    setTarget(Math.max(0, Math.min(3, newIndex)));
  };

  useEffect(() => {
    const c = document.getElementById("carousel");
    if (!c) return;

    const offset = target * 69;
    c.style.transform = `translateX(-${offset}vw)`;
    c.style.transition = "transform 0.5s ease";

    for (let i = 0; i < 4; i++) {
      const t = document.getElementById(`${i}`);
      if (!t) continue;

      const scaleY = i === target ? "scale(1.2)" : "scale(1)";
      t.style.transition = "transform 0.5s ease";
      t.style.transform = scaleY;
    }
  }, [target]);

  return (
    <div className="carousel_container">
      <div className="carousel" id="carousel">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="item"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            id={`${index}`}
          >
            <img src="https://picsum.photos/200" alt="" />
            <div className="desc_box">
              <div>大戶方案</div>
              <div>
                <span
                  style={{ textDecoration: "line-through", fontSize: "2.5vw" }}
                >
                  ¥ 599.99
                </span>
                {" / "}
                <span style={{ color: "#9e7ed6" }}>¥ 499.99</span>
              </div>
            </div>
            <div className="unlock_box">
              <div className="list_box">
                <div className="list">
                  <Icon icon="ph:seal-check-fill" color="#8ECD93"></Icon>
                  移除視頻廣告
                </div>
                <div className="list">
                  <Icon icon="ph:seal-check-fill" color="#8ECD93"></Icon>
                  移除橫幅廣告
                </div>
                <div className="list">
                  <Icon icon="ph:seal-check-fill" color="#8ECD93"></Icon>
                  開啟上傳權限
                </div>
                <div className="list">
                  <Icon icon="ph:seal-check-fill" color="#8ECD93"></Icon>
                  新功能試用
                </div>
                <div className="list">
                  <Icon icon="ph:seal-check-fill" color="#8ECD93"></Icon>
                  專屬內容
                </div>
              </div>
            </div>
            <div className="pay_box">
              <div className="customer">馬上支付</div>
            </div>
          </div>
        ))}
      </div>
      <div className="dot_box">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="dot"
            style={
              target === index
                ? {
                    backgroundColor: "#9e7ed6",
                    transform: "scale(2)",
                  }
                : {}
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
