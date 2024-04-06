import TopBar from "@/components/TopBar";
import "./userHome.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import UseNavigate from "@/router/hook";
import Popup from "@/components/Popup";

const UserHome = () => {
  const { go } = UseNavigate();

  const [Yvalue, setYvalue] = useState(40);
  const [showTab, setShowTab] = useState(1);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY / 2.8 < 66) {
        const scrollPercentage = window.scrollY / 2.8 + 50;
        setYvalue(scrollPercentage);
      } else {
        setYvalue(115);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goVideo = (videoId: number) => {
    go(`/video/${videoId}`);
  };
  const close = () => {
    setShowMore(false);
  }

  return (
    <div className="userHome_container theme_bg">
      <img
        className="bg_Img"
        src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
        style={{
          maskImage: `linear-gradient(to top, transparent ${Yvalue}%, black 100%)`,
        }}
      />
      <TopBar
        title="館長視頻"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${
            Yvalue > 114 ? 1 : ((Yvalue - 90) * 2.8) / 100
          })`,
        }}
      >
        <div className="more theme_note" onClick={() => setShowMore(true)}>
          <Icon className=" theme_font" icon="fontisto:more-v-a"></Icon>
        </div>
      </TopBar>
      <div className="main">
        <div className="detail_box">
          <div className="avator" onClick={() => go("/edit")}>
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <div className="icon theme_font">Lv1</div>
          </div>
          <div className="detail">
            <div className="item_box">
              <div className="num theme_font">1.25k</div>
              <div className="item theme_desc">點贊</div>
            </div>
            <div className="item_box">
              <div className="num theme_font">647</div>
              <div className="item theme_desc">關注</div>
            </div>
            <div className="item_box">
              <div className="num theme_font">81</div>
              <div className="item theme_desc">收藏</div>
            </div>
          </div>
        </div>
        <div className="desc_box">
          <div className="name theme_font">橙汁汗</div>
          <div className="desc theme_desc limit_row_3">
            45sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw6
          </div>
          <div className="option">
            <div className="check theme_btn">點贊</div>
            <div className="pay theme_btn">關注</div>
            <div className="set theme_btn">
              <Icon className="icon theme_font" icon="mdi:heart-outline"></Icon>
            </div>
          </div>
        </div>
        <div
          className="tab_box sticky"
          style={{
            backgroundColor:
              (Yvalue - 40) * 2.8 < 160 ? `transparent` : "rgba(0, 0, 0, 1)",
          }}
        >
          <div
            className={
              showTab == 0 ? "tab theme_tab1 active" : "tab theme_tab1"
            }
            onClick={() => setShowTab(0)}
          >
            <Icon className="icon" icon="octicon:video-16"></Icon>
            TA的作品
          </div>
          <div
            className={
              showTab == 1 ? "tab theme_tab1 active" : "tab theme_tab1"
            }
            onClick={() => setShowTab(1)}
          >
            <Icon className="icon" icon="mdi:star-outline"></Icon>
            收藏
          </div>
          <div
            className={
              showTab == 2 ? "tab theme_tab1 active" : "tab theme_tab1"
            }
            onClick={() => setShowTab(2)}
          >
            <Icon className="icon" icon="mdi:heart-outline"></Icon>
            喜歡
          </div>
        </div>
        {showTab === 0 && (
          <div className="myFavorite_box">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 111, 211, 311,
              411, 511, 611, 711, 811, 911, 1011, 1111, 1211, 1311, 1411, 1511,
            ].map((item, index) => (
              <div
                className="video_box"
                key={item}
                onClick={() => goVideo(index)}
              >
                <img
                  className="video"
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
                <div className="play_count">
                  <Icon className="icon" icon="octicon:video-16"></Icon>
                  12k
                </div>
                <div className="duration">23:18</div>
              </div>
            ))}
          </div>
        )}
        {showTab === 1 && (
          <div className="myFavorite_box">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 111, 211, 311,
              411, 511, 611, 711, 811, 911, 1011, 1111, 1211, 1311, 1411, 1511,
            ].map((item, index) => (
              <div
                className="video_box"
                key={item}
                onClick={() => goVideo(index)}
              >
                <img
                  className="video"
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
                <div className="play_count">
                  <Icon className="icon" icon="octicon:video-16"></Icon>
                  12k
                </div>
                <div className="duration">23:18</div>
              </div>
            ))}
          </div>
        )}
        {showTab === 2 && (
          <div className="myWorks_box">
            <div className="empty_box">
              <div className="title_box">
                <div className="title theme_font">還沒有作品</div>
                <div className="desc theme_desc">
                  想上傳自己的精彩視頻賺點快嗎?
                </div>
              </div>
              <div className="create theme_btn">立即申請</div>
            </div>
          </div>
        )}
      </div>

      <Popup
        className="popup theme_font"
        show={showMore}
        height="15vh"
        background="#252525"
        onClose={close}
      >
        <div className="popup_box">
          <div className="cancel " onClick={close}>
            <Icon className="icon" icon="material-symbols:share"></Icon>
            分享
          </div>
          <div className="confirm " onClick={close}>
            <Icon className="icon" icon="material-symbols:info-outline"></Icon>
            檢舉
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default UserHome;
