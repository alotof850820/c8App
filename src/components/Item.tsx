import { Icon } from "@iconify/react";
import p1 from "@/assets/p1.png";
import p6 from "@/assets/p6.jpeg";
import "./item.scss";
const Item = () => {
  const data = [
    { id: 1, title: "【現貨】VEJA CAMPO NATURAL 氤氳蘭斯 CP0502429A" },
    { id: 2, title: "【現貨】VEJA CAMPO NATURAL 氤氳蘭斯 CP0502429A" },
    { id: 3, title: "【現貨】VEJA CAMPO NATURAL 氤氳蘭斯 CP0502429A" },
    { id: 4, title: "【現貨】VEJA CAMPO NATURAL 氤氳蘭斯 CP0502429A" },
  ];
  return (
    <div className="title_box">
      <div className="title">
        <div className="text">C=8選品</div>
      </div>
      <div className="box">
        <div className="left">
          <img src={p1} alt="" />
        </div>
        <div className="right">
          <div className="content">
            {data.map((item) => (
              <div key={item.id} className="card">
                <div className="img">
                  <img src={p1} alt="" />
                  <img src={p6} alt="" className="hidden" />
                  <div className="like">
                    <Icon className="icon" icon="solar:heart-linear" />
                    <Icon className="icon" icon="bi:cart" />
                  </div>
                </div>
                <div className="description">
                  <div className="text limit_row_2">{item.title}</div>
                  <div className="price">NT$4280</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
