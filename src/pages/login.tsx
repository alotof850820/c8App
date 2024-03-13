import "./login.scss";
import UseNavigate from "@/router/hook";
import TopBar from "@/components/TopBar";
import { Icon } from "@iconify/react/dist/iconify.js";
const login = () => {
  const { go } = UseNavigate();

  return (
    <div className="login_container">
      <div className="main">
        <TopBar />
        <div className="title_box">
          <div className="title">C=8</div>
          <div className="desc">立即加入吸吧, 絕密視頻任您瀏覽</div>
          <div className="note">試營運期間, 全面八折起</div>
        </div>
        <div className="email_box">
          <div className="top_box">
            <label className="email" htmlFor="email">
              郵箱
            </label>
            <div className="input_box">
              <Icon
                className="icon"
                icon="carbon:email"
                fontSize={"6vw"}
              ></Icon>
              <input type="text" id="email" placeholder="請輸入郵箱" />
            </div>
          </div>

          <div className="note">
            <div>* 請務必填寫正確郵箱以免造成您的權益損失。</div>
            <div>* 一個郵箱號僅供一組帳號使用，請勿重複註冊。</div>
          </div>
        </div>
        <div className="footer_box">
          <div className="customer" onClick={() => go("/home")}>
            下一步
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
