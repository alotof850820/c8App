import TopBar from "@/components/TopBar";
import "./edit.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import UseNavigate from "@/router/hook";

const Register = () => {
  const { go } = UseNavigate();

  return (
    <div className="edit_container theme_bg">
      <img className="bg_Img" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
      <TopBar title="更新訊息" />
      <div className="title_box">
        <div className="title">C=8</div>
        <div className="desc">保持最新信息，讓大家更懂你</div>
        <div className="note theme_desc">系統會根據您的取向為您提供視頻</div>
      </div>
      <div className="main">
        <div className="avator_box">
          <div className="avator">
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <Icon className="icon" icon="mdi:camera"></Icon>
          </div>
        </div>
        <div className="detail_box">
          <div className="top_box">
            <label className="email" htmlFor="email">
              郵箱
            </label>
            <div className="input_box">
              <Icon className="icon" icon="solar:user-circle-linear"></Icon>
              <input type="text" id="email" placeholder="請輸入郵箱" />
            </div>
          </div>
          <div className="top_box">
            <label className="email" htmlFor="email">
              簡介
            </label>
            <div className="input_box">
              <textarea rows={4} id="email" placeholder="請輸入簡介" />
            </div>
          </div>
          <div className="top_box">
            <label className="email" htmlFor="email">
              取向
            </label>
            <div className="input_box">
              <select>
                <option value="option1">男女</option>
                <option value="option2">男男</option>
                <option value="option3">女女</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer_box">
          <div className="customer" onClick={() => go("/home")}>
            完成
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
