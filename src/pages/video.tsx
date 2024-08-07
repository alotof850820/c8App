import TopBar from "@/components/TopBar";
import { Icon } from "@iconify/react/dist/iconify.js";
import VideoPlayer from "@/components/VideoPlayer";
import VideoBox from "@/components/video";

const Video = () => {
  return (
    <div className="w-full min-h-[100%] theme_bg">
      <TopBar>
        <div className="ml-auto relative px-[4vw] theme_note">
          <Icon className="theme_font" icon="fontisto:more-v-a"></Icon>
        </div>
      </TopBar>
      <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4"></VideoPlayer>
      <div className="w-full px-[5vw] py-[2vw] flex flex-col gap-[4vw]">
        <div className="flex flex-col gap-[0.5vw] theme_font ">
          <div className="limit_row_2">
            refcqrcfqerfcqewrcfqwercfqwecfqcwefcqwecfewfwefdwefwefwwefwefewfqwefcwefcew
          </div>
          <div className="text-[3vw] theme_desc">
            觀看次數：100次 。 11小時前
          </div>
        </div>
        <div className="flex items-center gap-[2vw]">
          <div className="w-[10vw] h-[10vw] rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
          <div className="flex items-center gap-[1vw] mr-auto">
            <div className="text-[3.5vw] font-bold theme_font limit_row_1">
              惡名昭彰
            </div>
            <div className="dtext-[3vw] theme_desc limit_row_1">7,878 關注</div>
          </div>
          <div className="bg-custom-primary text-white px-[6vw] py-[1.5vw] rounded-3xl text-[2.5vw] flex items-center justify-center theme_font">
            關注
          </div>
        </div>
        <div className="flex items-center gap-[2vw] overflow-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <div
                className="text-[3vw] flex items-center gap-[3vw] px-[4vw] py-[1.5vw] rounded-3xl theme_option"
                key={item}
              >
                <Icon
                  className="w-[4vw] h-[4vw] theme_option"
                  icon="ant-design:like-outlined"
                ></Icon>
                {item}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-[2vw] bg-[#313131] px-[5vw] py-[3vw] rounded-lg">
          <div className="flex justify-between text-[3vw] theme_font">
            <div className="flex items-center gap-[1.5vw] ">
              <div>留言</div>
              <div>52</div>
            </div>
            <div className="theme_desc">顯示更多</div>
          </div>
          <div className="flex items-center gap-[2vw] theme_font">
            <div>
              <img
                className="w-[7.5vw] h-[7.5vw] object-cover rounded-full"
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
            <div className="w-[90%] text-[3vw] theme_font limit_row_1">
              留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center flex-col">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
          <VideoBox index={index} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default Video;
