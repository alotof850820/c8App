import TopBar from "@/components/TopBar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import UseNavigate from "@/router/hook";
import { motion } from "framer-motion";
import useStore from "@/store/user";

const Mine = () => {
  const { go } = UseNavigate();
  const { clickedX } = useStore();

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
    <div className="w-full min-h-[100vh] flex flex-col relative theme_bg">
      <img
        className="absolute w-full h-[100vh] object-cover z-[1]"
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
        <div className="ml-auto relative px-[4vw] theme_note">
          <Icon className=" theme_font" icon="fontisto:more-v-a"></Icon>
        </div>
      </TopBar>
      <div className="z-[2]">
        <div className="flex items-center justify-between mt-[10vh] px-[6vw]">
          <motion.div
            className="w-[20vw] h-[20vw] rounded-full relative"
            initial={{ x: clickedX || 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }} // 可选的过渡时间
          >
            <img
            className="w-full h-full object-cover rounded-full"
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <Icon className="absolute bottom-0 right-0 w-[5vw] h-[5vw] bg-zinc-800 p-[1vw] rounded-full theme_icon" icon="ic:round-edit"></Icon>
          </motion.div>
          <div className="flex gap-[15vw]">
            <div className="flex flex-col items-center justify-center gap-[2vw]">
              <div className="text-[4.3vw] font-bold theme_font">1.25k</div>
              <div className="text-[3.3vw] font-normal theme_desc">點贊</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[2vw]">
              <div className="text-[4.3vw] font-bold theme_font">647</div>
              <div className="text-[3.3vw] font-normal theme_desc">關注</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[2vw]">
              <div className="text-[4.3vw] font-bold theme_font">81</div>
              <div className="text-[3.3vw] font-normal theme_desc">收藏</div>
            </div>
          </div>
        </div>
        <div className="mt-[2vw] px-[6vw] flex flex-col gap-[2vw]">
          <div className="text-[4.5vw] font-normal theme_font">橙汁汗</div>
          <div className="text-[4vw] font-thin break-all theme_desc limit_row_3">
            45sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw645sxwsxwdxw6
          </div>
          <div className="flex gap-[2vw]">
            <div className="px-[15vw] py-[2vw] text-[3.5vw] font-light flex items-center justify-center rounded theme_btn">簽到</div>
            <div className="px-[15vw] py-[2vw] text-[3.5vw] font-light flex items-center justify-center rounded theme_btn">充值</div>
            <div className="p=[2vw] text-[5vw] font-light flex items-center justify-center rounded theme_btn">
              <Icon
                className="icon theme_font"
                icon="lets-icons:filter-big"
              ></Icon>
            </div>
          </div>
        </div>
        <div
          className="flex justify-between sticky top-[8.8vh] z-[3]"
          style={{
            backgroundColor:
              (Yvalue - 40) * 2.8 < 160 ? `transparent` : "rgba(0, 0, 0, 1)",
          }}
        >
          <div className="text-[3.5vw] font-light px-[6vw] py-[5vw] flex items-center justify-center gap-[1vw] theme_tab1 ">
            <Icon className="w-[4.5vw] h-[4.5vw]" icon="octicon:video-16"></Icon>
            我的作品
          </div>
          <div className="text-[3.5vw] font-light px-[6vw] py-[5vw] flex items-center justify-center gap-[1vw] theme_tab1 active">
            <Icon className="w-[4.5vw] h-[4.5vw]" icon="mdi:star-outline"></Icon>
            我的收藏
          </div>
          <div className="text-[3.5vw] font-light px-[6vw] py-[5vw] flex items-center justify-center gap-[1vw] theme_tab1">
            <Icon className="w-[4.5vw] h-[4.5vw]" icon="ic:round-history"></Icon>
            觀看紀錄
          </div>
        </div>
        <div className="flex flex-wrap gap-[0.4vw]">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 111, 211, 311,
            411, 511, 611, 711, 811, 911, 1011, 1111, 1211, 1311, 1411, 1511,
          ].map((item, index) => (
            <div
              className="relative w-[33vw] h-[33vw]"
              key={item}
              onClick={() => goVideo(index)}
            >
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
              <div className="bottom-[1vw] left-[2vw] absolute text-white text-[3.5vw] font-light flex items-center justify-center gap-[1vw]">
                <Icon className="icon" icon="octicon:video-16"></Icon>
                12k
              </div>
              <div className="bottom-[1vw] right-[2vw] absolute text-white text-[3.5vw] font-light flex items-center justify-center gap-[1vw]">23:18</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mine;
