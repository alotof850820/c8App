import { Icon } from "@iconify/react/dist/iconify.js";
import { FC } from "react";
import "./video.scss";

const Video: FC<{ index: number }> = ({ index }) => {
  return (
    <div className="video" key={index}>
      <div className="cover">
        <img
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
        <div className="duration">11:00</div>
      </div>

      <div className="user_box">
        <div className="avator">
          <img
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>

        <div className="detail">
          <div className="name limit_row_1 theme_font">
            館長直播館長直播館長直播館長直播館長直播館長直播館長直播
          </div>
          <div className="desc limit_row_1 theme_desc">
            館長直播 · 觀看次數：100次 · 11小時前
          </div>
        </div>

        <div className="more">
          <Icon className="icon theme_font" icon="fontisto:more-v-a"></Icon>
        </div>
      </div>
      {index === 4 && (
        <div className="reccomend_box">
          <div className="title theme_font">為您推薦</div>
          <div className="videos">
            {[1, 2, 3, 4, 5].map(() => (
              <div className="video_box" key={Math.random()}>
                <div className="video">
                  <div className="cover">
                    <img
                      src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt=""
                    />
                    <div className="duration">11:00</div>
                  </div>
                </div>

                <div className="user_box">
                  <div className="detail">
                    <div className="name limit_row_1 theme_font">
                      館長直播館長直播館長直播館長直播館長直播館長直播館長直播
                    </div>
                    <div className="desc limit_row_1 theme_desc">
                      觀看次數：100次 · 11小時前
                    </div>
                  </div>
                  <div className="more">
                    <Icon
                      className="icon theme_font"
                      icon="fontisto:more-v-a"
                    ></Icon>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
