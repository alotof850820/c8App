import "./payment.scss";
import bg from "@/assets/bg.webp";
import TopBar from "@/components/TopBar";
import smoothscroll from "smoothscroll-polyfill";
import Carousel from "@/components/Carousel";

// 应用 Polyfill
smoothscroll.polyfill();
const Payment = () => {

  return (
    <div className="payment_container ">
      <div className="bg_box theme_bg">
        <img className="bg" src={bg} alt="" />
        <img className="bg1" src={bg} alt="" />
      </div>
      <TopBar title="充值"></TopBar>

      <div className="main">
        <div className="title_box">
          <div className="title">C=8</div>
          <div className="desc">經濟方案適合小試水溫，喜歡在買</div>
          <div className="note">試營運期間, 全面八折起</div>
        </div>
        <Carousel></Carousel>
        <div className="footer_box">
          <div className="customer">優惠卷</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
