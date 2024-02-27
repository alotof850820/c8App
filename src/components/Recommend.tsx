import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.jpeg";
import p3 from "@/assets/p3.png";
import "./recommend.scss";

const Recommend = () => {
  const data = [
    { id: 1, brand: "NIKE", type: "AIR MAX 270", price: "4280", img: p1 },
    { id: 2, brand: "NIKE", type: "AIR MAX 270", price: "4280", img: p2 },
    { id: 3, brand: "NIKE", type: "AIR MAX 270", price: "4280", img: p3 },
    { id: 4, brand: "NIKE", type: "AIR MAX 270", price: "4280", img: p1 },
    { id: 5, brand: "NIKE", type: "AIR MAX 270", price: "4280", img: p2 },
    { id: 6, brand: "NIKE", type: "AIR MAX 270", price: "4280", img: p3 },
  ];
  return (
    <div className="recommend_box">
      <div className="title">
        <div className="text">推薦商品</div>
      </div>
      <div className="items_box">
        {data.map((item) => (
          <div key={item.id} className="item_box">
            <img src={item.img} alt="" />
            <div className="detail">
              <div className="brand">{item.brand}</div>
              <div className="type">{item.type}</div>
              <div className="price">NT${item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
