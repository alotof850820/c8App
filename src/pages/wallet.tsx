import TopBar from "@/components/TopBar";
import "./wallet.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
const Wallet = () => {
  return (
    <div className="wallet_container theme_bg">
      <TopBar title={"钱包"} />
      <div className="main theme_font">
        <div className="myCoin">
          我的金幣
          <div className="num">
            <Icon icon="noto:coin"></Icon>
            7,124,356
          </div>
        </div>
        <div className="checkin">
          <div className="header">
            <div className="title">
              <div className="up">
                每日簽到
                <span>
                  <Icon icon="ph:question"></Icon>
                </span>
              </div>
              <div className="down theme_desc">連續簽到7天將獲得額外金幣</div>
            </div>
            <div className="note">
              簽到提醒
              <Icon icon="line-md:switch-off-filled" fontSize={"5vw"}></Icon>
            </div>
          </div>
          <div className="check_box">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
              return (
                <div key={Math.random()} className="item_box">
                  <div className="item">
                    {item < 3 ? (
                      <Icon
                        style={{ color: "#8ECD93" }}
                        icon="fa6-solid:check"
                      ></Icon>
                    ) : item % 7 === 0 ? (
                      <Icon
                        style={{ color: "#8ECD93" }}
                        icon="noto:coin"
                      ></Icon>
                    ) : (
                      "+1"
                    )}
                  </div>
                  <div className="day">{item}天</div>
                </div>
              );
            })}
          </div>
          <div className="checkBtn theme_btn">立即簽到</div>
        </div>
        <div className="mission_box">
          <div className="header">
            <div className="title">
              <div className="up">任務清單</div>
            </div>
          </div>
          <div className="check_box">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
              return (
                <div key={Math.random()} className="item_box">
                  <div className="avator">
                    <Icon icon="la:user-plus"></Icon>
                  </div>
                  <div className="context">
                    解鎖一個視頻
                    <div className="desc ">+10金幣．進度（1/5）</div>
                  </div>
                  {item < 3 ? (
                    <div className="executed">已完成</div>
                  ) : (
                    <div className="execute">去完成</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
