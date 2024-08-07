import { Icon } from "@iconify/react/dist/iconify.js";
import { FC } from "react";

const Video: FC<{ index: number }> = ({ index }) => {
  return (
    <div
      className="w-full items-center justify-center flex-col gap-[1.5vw]"
      key={index}
    >
      <div className="w-full h-[30vh] relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
        <div className="absolute right-[2%] bottom-[2%] text-white text-[3.5vw] font-light bg-[rgba(0,0,0,0.7)] px-[1,5vw] py-[0.5vw] rounded">
          11:00
        </div>
      </div>

      <div className="w-full flex items-center justify-start gap-[5vw] p-[4vw]">
        <div className="flex items-center justify-center">
          <img
            className="w-[12vw] h-[12vw] rounded-full object-cover"
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>

        <div>
          <div className="w-[60vw] text-[4.5vw] font-normal limit_row_1 theme_font">
            館長直播館長直播館長直播館長直播館長直播館長直播館長直播
          </div>
          <div className="text-[3.5vw] font-light limit_row_1 theme_desc">
            館長直播 · 觀看次數：100次 · 11小時前
          </div>
        </div>

        <div className="px-[3vw] flex items-center justify-center">
          <Icon className="icon theme_font" icon="fontisto:more-v-a"></Icon>
        </div>
      </div>
      {index === 4 && (
        <div className="flex flex-col px-[4vw] w-full">
          <div className="text-[3.5vw] font-light theme_font">為您推薦</div>
          <div className="overflow-auto flex gap-[4vw] w-full">
            {[1, 2, 3, 4, 5].map(() => (
              <div className="py-[4vw] min-w-[70%]" key={Math.random()}>
                <div className="w-full flex items-center justify-center flex-col gap-[1.5vw]">
                  <div className="w-full h-[20vh] relative">
                    <img
                    className="w-full h-full object-cover rounded-t-md"
                      src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt=""
                    />
                    <div className="absolute right-[2%] bottom-[2%] text-white text-[3.5vw] font-light bg-[rgba(0,0,0,0.7)] px-[1,5vw] py-[0.5vw] rounded">11:00</div>
                  </div>
                </div>

                <div className="w-full flex items-center justify-start gap-[5vw] px-[4vw] py-[2vw] rounded-s-md shadow-[0px_0px_3px_0px_rgba(0,0,0,0.2) inset]">
                  <div>
                    <div className="text-[4.5vw] font-normal limit_row_1 theme_font">
                      館長直播館長直播館長直播館長直播館長直播館長直播館長直播
                    </div>
                    <div className="text-[3.5vw] font-light limit_row_1 theme_desc">
                      觀看次數：100次 · 11小時前
                    </div>
                  </div>
                  <div className="px-[3vw] flex items-center justify-center">
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
