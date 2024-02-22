import "./index.scss";
import TopBar from "@/components/TopBar";
import Carousel from "@/components/Carousel";

const Index = () => {
  return (
    <div className="index">
      <TopBar num={0}></TopBar>
      <Carousel></Carousel>
      <div className="title">C=8選品</div>
      <div className="content">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
};

export default Index;
