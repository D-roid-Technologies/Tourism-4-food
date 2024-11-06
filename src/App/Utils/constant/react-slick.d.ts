declare module "react-slick" {
  import { Component } from "react";

  export interface SliderSettings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    initialSlide?: number;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    afterChange?: (current: number) => void;
    beforeChange?: (current: number, next: number) => void;
    slickGoTo?: number;
    [key: string]: any; // For additional props if necessary
  }

  export default class Slider extends Component<SliderSettings> {
    slickNext: () => void;
    slickPrev: () => void;
    slickGoTo: (slideNumber: number) => void;
  }
}
