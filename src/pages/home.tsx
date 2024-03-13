import { Icon } from "@iconify/react/dist/iconify.js";
import "./home.scss";
import UseNavigate from "@/router/hook";
import Video from "@/components/video";

const Home = () => {
  const { go } = UseNavigate();
  return (
    <div className="home_container theme_bg">
      <div className="top_box">
        <div className="title theme_font">C=8</div>
        <div className="right">
          <Icon
            className="icon theme_icon"
            icon="simple-line-icons:magnifier"
            fontSize={"5.5vw"}
            fontWeight={"bolder"}
          ></Icon>
          <div className="avator_box theme_note" onClick={() => go("/mine")}>
            <img
              className="avator"
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="users_box">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <div className="user" key={Math.random()}>
              <div className="avator theme_avatar">
                <img
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </div>
              <div className="name theme_font">館長直播</div>
            </div>
          ))}
        </div>
        <div className="keyword_list ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              className={`keyword theme_keyword ${item === 1 ? "active" : ""}`}
              key={Math.random()}
            >
              熱門關鍵字
            </div>
          ))}
        </div>
        <div className="video_box">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <Video index={index} key={Math.random()} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
