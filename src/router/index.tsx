// import { ReactNode, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/index";
import Home from "@/pages/home";
import Mine from "@/pages/mine";
import Video from "@/pages/video";
import Login from "@/pages/login";

// const lazyLoad = (children: ReactNode): ReactNode => (<Suspense>{children}</Suspense>);

const RouterComponent = () => {
  //   const Index = lazy(() => import("../pages/index"));

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/video/:id?" element={<Video />} />
        <Route path="/mine/:id?" element={<Mine />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RouterComponent;

// import { AnimatePresence, motion } from "framer-motion";
// import { Route, Routes, Link, useLocation } from "react-router-dom";

// const Home = () => (
//   <div>
//     <Link to="/detail">
//       <motion.div
//         layoutId="shared-element"
//         style={{
//           background: "red",
//           width: 100,
//           height: 100,
//           position: "absolute",
//           left: 0, // 初始位置在左边
//         }}
//         initial={{ left: 300 }} // 初始状态，从左边移入
//         animate={{ left: 0 }} // 进入时的动画，移至中间或指定位置
//         exit={{ left: 0 }} // 退出时的动画，向右移出
//         transition={{ type: "tween", duration: 0.5 }} // 过渡动画类型和时间
//       >
//         Home
//       </motion.div>
//     </Link>
//   </div>
// );

// const Detail = () => (
//   <div>
//     <Link to="/">
//       <motion.div
//         layoutId="shared-element"
//         style={{
//           background: "red",
//           width: 100,
//           height: 100,
//           position: "absolute",
//           left: 300, // 初始位置在右边
//         }}
//         initial={{ left: 0 }} // 初始状态，从右边移入
//         animate={{ left: 300 }} // 进入时的动画，移至中间或指定位置
//         exit={{ left: 300 }} // 退出时的动画，向左移出
//         transition={{ type: "tween", duration: 0.5 }} // 过渡动画类型和时间
//       >
//         Detail
//       </motion.div>
//     </Link>
//   </div>
// );
