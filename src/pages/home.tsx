import { Icon } from "@iconify/react/dist/iconify.js";
import "./home.scss";
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
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <motion.div
              key={`user-${index}`}
              className="user"
              onClick={() => setGo(index)}
              initial={
                index === clickedIndex ? { x: clickedIndex * -83.3 } : undefined
              }
              animate={index === clickedIndex ? { x: 0 } : undefined}
              transition={{ duration: 0.5 }}
            >
              <div className="avator theme_avatar">
                <img
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </div>
              <div className="name theme_font">館長直播{index}</div>
            </motion.div>
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
