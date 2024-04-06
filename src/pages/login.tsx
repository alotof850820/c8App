import "./login.scss";
import UseNavigate from "@/router/hook";
import TopBar from "@/components/TopBar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
const Login = () => {
  const { go } = UseNavigate();
  const [switchView, setSwitchView] = useState(false);
  const checkRegister = () => {
    if (switchView) {
      go("/register");
    } else {
      setSwitchView(true);
    }
  };

  return (
    <div className="login_container">
      <div className="main">
        <TopBar title="註冊" />
        <div className="title_box">
          <div className="title">C=8</div>
          <div className="desc">立即加入吸吧, 絕密視頻任您瀏覽</div>
          <div className="note theme_desc">試營運期間, 全面八折起</div>
        </div>
        {!switchView && (
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
              <div>＊ 請務必填寫正確郵箱以免造成您的權益損失。</div>
              <div>＊ 一個郵箱號僅供一組帳號使用，請勿重複註冊。</div>
            </div>
          </div>
        )}
        {switchView && (
          <div className="email_box">
            <div className="top_box">
              <label className="email" htmlFor="email">
                密碼
              </label>
              <div className="input_box">
                <Icon
                  className="icon"
                  icon="material-symbols:password"
                  fontSize={"6vw"}
                ></Icon>
                <input type="text" id="email" placeholder="請輸入密碼" />
              </div>
              <label className="email" htmlFor="email">
                密碼確認
              </label>
              <div className="input_box">
                <Icon
                  className="icon"
                  icon="material-symbols:password"
                  fontSize={"6vw"}
                ></Icon>
                <input type="text" id="email" placeholder="請再次輸入密碼" />
              </div>
            </div>

            <div className="note">
              <div>＊ 密碼至少需六位大小寫英文或數字混合。</div>
              <div>＊ 密碼不可包含特殊符號。</div>
            </div>
          </div>
        )}
        <div className="footer_box">
          <div className="customer" onClick={() => checkRegister()}>
            {switchView ? "註冊" : "下一步"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
