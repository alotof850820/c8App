import { Icon } from "@iconify/react/dist/iconify.js";
import UseNavigate from "@/router/hook";
import Video from "@/components/video";
import { motion } from "framer-motion";
import useStore from "@/store/user";

const Home = () => {
  const { go } = UseNavigate();
  const { clickedIndex, setClickedIndex } = useStore();
  const { setClickedX } = useStore();

  const setGo = (index: number) => {
    setClickedIndex(index);
    setClickedX(index * 50);
    go(`/mine/${index.toString()}`);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col theme_bg">
      <div className="w-full h-[10vh] flex items-center justify-between p-[4vw]">
        <div className="text-[7vw] font-bold theme_font">C=8</div>
        <div className="flex items-center justify-center gap-[7vw]">
          <Icon
            className="icon theme_icon"
            icon="simple-line-icons:magnifier"
            fontSize={"5.5vw"}
            fontWeight={"bolder"}
          ></Icon>
          <div
            className="w-[7vw] h-[7vw] rounded-full relative theme_note"
            onClick={() => go("/mine")}
          >
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="overflow-auto flex-1">
        <div className="w-full flex items-center justify-start gap-[4vw] py-[1vw] px-[4vw] overflow-auto">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <motion.div
              key={`user-${index}`}
              className="rounded-full flex items-center justify-center gap-[1.5vw] flex-col"
              onClick={() => setGo(index)}
              initial={
                index === clickedIndex ? { x: clickedIndex * -83.3 } : undefined
              }
              animate={index === clickedIndex ? { x: 0 } : undefined}
              transition={{ duration: 0.5 }}
            >
              <div className="w-[17vw] h-[17vw] rounded-full flex items-center justify-center theme_avatar">
                <img
                className="w-[16vw] h-[15.5vw] object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </div>
              <div className="text-[3.5vw] font-light theme_font">館長直播{index}</div>
            </motion.div>
          ))}
        </div>
        <div className="w-full flex items-center justify-start gap-[4vw] p-[4vw] overflow-auto ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              className={`text-[3.5vw] font-light whitespace-nowrap px-[4vw] py-[2vw] rounded theme_keyword ${item === 1 ? "active" : ""}`}
              key={Math.random()}
            >
              熱門關鍵字
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <Video index={index} key={Math.random()} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
