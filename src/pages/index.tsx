import "./index.scss";
import TopBar from "@/components/TopBar";
import Carousel from "@/components/Carousel";

const Index = () => {
  return (
    <div className="index">
      <TopBar num={0}></TopBar>
      <Carousel></Carousel>
    </div>
  );
};

export default Index;
