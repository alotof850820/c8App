import { ReactNode, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense >{children}</Suspense>;
};

const RouterComponent = () => {
  const Index = lazy(() => import("../pages/index"));
  const Home = lazy(() => import("../pages/home"));
  const Mine = lazy(() => import("../pages/mine"));
  const Video = lazy(() => import("../pages/video"));
  const Login = lazy(() => import("../pages/login"));



  return (
    <Router>
      <Routes>
        <Route path="/" element={lazyLoad(<Index />)} />
        <Route path="/home" element={lazyLoad(<Home />)} />
        <Route path="/video/:id?" element={lazyLoad(<Video />)} />
        <Route path="/mine" element={lazyLoad(<Mine />)} />
        <Route path="/login" element={lazyLoad(<Login />)} />
        <Route path="*" element={lazyLoad(<Home />)} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
