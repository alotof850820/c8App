import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../pages/index";
import Home from "../pages/home";
import Mine from "../pages/mine";
import Video from "../pages/video";
import Login from "../pages/login";
import Register from "../pages/register";
import Setting from "../pages/setting";
import UserHome from "../pages/userHome";
import Search from "../pages/search";
import Edit from "../pages/edit";
import Wallet from "../pages/wallet";
import Payment from "../pages/payment";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/video/:id?" element={<Video />} />
        <Route path="/mine" element={<Mine />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/userHome" element={<UserHome />} />
        <Route path="/search" element={<Search />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
