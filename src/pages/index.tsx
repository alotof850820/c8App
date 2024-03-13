import "./index.scss";
import useNavigate from "@/router/hook";
import bg from "@/assets/bg.webp";

const Index = () => {
  const { go } = useNavigate();
  return (
    <div className="index_container">
      <div className="bg_box">
        <img className="bg" src={bg} alt="" />
        <img className="bg1" src={bg} alt="" />
      </div>

      <div className="main">
        <div className="title_box">
          <div className="title">C=8</div>
          <div className="desc">立即加入吸吧, 絕密視頻任您瀏覽</div>
          <div className="note">試營運期間, 全面八折起</div>
        </div>
        <div className="footer_box">
          <div className="customer" onClick={() => go("/home")}>
            訪客模式
          </div>
          <div className="register" onClick={() => go("/login")}>
            註冊登錄
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
