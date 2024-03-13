import TopBar from "@/components/TopBar";
import "./mine.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import UseNavigate from "@/router/hook";

const Mine = () => {
  const { go } = UseNavigate();

  const [Yvalue, setYvalue] = useState(40);

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
  return (
    <div className="mine_container theme_bg">
      <img
        className="bg_Img"
        src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
        style={{
          maskImage: `linear-gradient(to top, transparent ${Yvalue}%, black 100%)`,
        }}
      />
      <TopBar
        title="我的"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${
            Yvalue > 114 ? 1 : ((Yvalue - 90) * 2.8) / 100
          })`,
        }}
      >
        <div className="more theme_note">
          <Icon className=" theme_font" icon="fontisto:more-v-a"></Icon>
        </div>
      </TopBar>
      <div className="main">
        <div className="detail_box">
          <div className="avator">
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <Icon className="icon theme_icon" icon="ic:round-edit"></Icon>
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
            <div className="check theme_btn">簽到</div>
            <div className="pay theme_btn">充值</div>
            <div className="set theme_btn">
              <Icon
                className="icon theme_font"
                icon="lets-icons:filter-big"
              ></Icon>
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
          <div className="tab theme_tab1 ">
            <Icon className="icon" icon="octicon:video-16"></Icon>
            我的作品
          </div>
          <div className="tab theme_tab1 active">
            <Icon className="icon" icon="mdi:star-outline"></Icon>
            我的收藏
          </div>
          <div className="tab theme_tab1">
            <Icon className="icon" icon="ic:round-history"></Icon>
            觀看紀錄
          </div>
        </div>
        <div className="videos_box">
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
      </div>
    </div>
  );
};

export default Mine;
