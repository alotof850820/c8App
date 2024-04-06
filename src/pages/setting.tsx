import { Icon } from "@iconify/react/dist/iconify.js";
import "./setting.scss";
import TopBar from "@/components/TopBar";

const Setting = () => {
  return (
    <div className="setting_container theme_bg">
      <TopBar title="設定" className="theme_bg"></TopBar>
      <div className="lists_box theme_font">
        <div className="list_box">
          <div className="left">
            <Icon className="theme_font" icon="mdi:bell-outline"></Icon>
            <div className="desc">信息通知</div>
          </div>
          <div className="right">
            <div className="note_count">99+</div>
            <Icon className="theme_font" icon="fa6-solid:angle-right"></Icon>
          </div>
        </div>
        <div className="list_box">
          <div className="left">
            <Icon className="theme_font" icon="ic:baseline-qrcode"></Icon>
            <div className="desc">邀請碼</div>
          </div>
          <div className="right">
            <Icon className="theme_font" icon="fa6-solid:angle-right"></Icon>
          </div>
        </div>
        <div className="list_box">
          <div className="left">
            <Icon className="theme_font" icon="mdi:sun-moon-stars"></Icon>
            <div className="desc">系統主題</div>
          </div>
          <div className="right">
            <div className="note">深色主題</div>
            <Icon className="theme_font" icon="fa6-solid:angle-right"></Icon>
          </div>
        </div>
        <div className="list_box">
          <div className="left">
            <Icon className="theme_font" icon="material-symbols:android"></Icon>
            <div className="desc">應用圖示</div>
          </div>
          <div className="right">
            <div className="note">預設</div>
            <Icon className="theme_font" icon="fa6-solid:angle-right"></Icon>
          </div>
        </div>
        <div className="list_box">
          <div className="left">
            <Icon
              className="theme_font"
              icon="material-symbols:info-outline"
            ></Icon>
            <div className="desc">版本信息</div>
          </div>
          <div className="right">
            <div className="note">1.0</div>
            <Icon className="theme_font" icon="fa6-solid:angle-right"></Icon>
          </div>
        </div>
        <div className="list_box">
          <div className="left">
            <Icon className="theme_font" icon="basil:trash-alt-outline"></Icon>
            <div className="desc">註銷帳戶</div>
          </div>
        </div>
      </div>
      <div className="logout theme_font">退出登錄</div>
    </div>
  );
};

export default Setting;
