import TopBar from "@/components/TopBar";
import "./video.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import VideoPlayer from "@/components/VideoPlayer";
import VideoBox from "@/components/video";

const Video = () => {
  return (
    <div className="video_container theme_bg">
      <TopBar>
        <div className="more theme_note">
          <Icon className=" theme_font" icon="fontisto:more-v-a"></Icon>
        </div>
      </TopBar>
      <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4"></VideoPlayer>
      <div className="detail_box">
        <div className="title_box theme_font ">
          <div className="limit_row_2">
            refcqrcfqerfcqewrcfqwercfqwecfqcwefcqwecfewfwefdwefwefwwefwefewfqwefcwefcew
          </div>
          <div className="detail theme_desc">觀看次數：100次 。 11小時前</div>
        </div>
        <div className="user_box">
          <div className="avator">
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
          <div className="info">
            <div className="name theme_font limit_row_1">惡名昭彰</div>
            <div className="desc theme_desc limit_row_1">7,878 關注</div>
          </div>
          <div className="focus theme_font">關注</div>
        </div>
        <div className="option_box">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <div className="option theme_option" key={item}>
                <Icon
                  className="icon theme_option"
                  icon="ant-design:like-outlined"
                ></Icon>
                {item}
              </div>
            );
          })}
        </div>
        <div className="comment_box">
          <div className="up_box theme_font">
            <div className="total ">
              <div>留言</div>
              <div>52</div>
            </div>
            <div className="theme_desc">顯示更多</div>
          </div>
          <div className="content_box theme_font">
            <div className="avator_box">
              <img
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
            <div className="content theme_font limit_row_1">
              留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言
            </div>
          </div>
        </div>
      </div>
      <div className="video_box">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <VideoBox index={index} key={Math.random()} />
          ))}
        </div>
    </div>
  );
};

export default Video;
