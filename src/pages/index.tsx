import "./index.scss";
import TopBar from "@/components/TopBar";
import Carousel from "@/components/Carousel";
import Item from "@/components/Item";
import Footer from "@/components/Footer";
import Recommend from "@/components/Recommend";


const Index = () => {

  return (
    <div className="index">
      <TopBar num={0}></TopBar>
      <Carousel></Carousel>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Recommend></Recommend>
      <Footer></Footer>
    </div>
  );
};

export default Index;
