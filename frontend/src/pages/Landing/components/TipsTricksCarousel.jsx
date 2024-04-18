// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import TipsCard from "./TipsCard";

const TipsTricksCarousel = () => {
  return (
    <Carousel showArrows={false} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true} showThumbs={false}>
      <TipsCard title="Tip title 1">Some tip here</TipsCard>
      <TipsCard title="Tip title 1">Some tip here</TipsCard>
      <TipsCard title="Tip title 1">Some tip here</TipsCard>
    </Carousel>
  );
};

export default TipsTricksCarousel;
