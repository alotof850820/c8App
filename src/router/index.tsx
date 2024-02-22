import { ReactNode, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback="Loading...">{children}</Suspense>;
};

const RouterComponent = () => {
  const Index = lazy(() => import("../pages/index"));
  const Home = lazy(() => import("../pages/home"));



  return (
    <Router>
      <Routes>
        <Route path="/" element={lazyLoad(<Index />)} />
        <Route path="/home" element={lazyLoad(<Home />)} />
        <Route path="*" element={lazyLoad(<Home />)} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
