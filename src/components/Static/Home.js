import React from "react";
import { ToastContainer } from "react-toastify";
import home from "../../assets/images/1.jpg";
import home1 from "../../assets/images/2.jpg";
import home2 from "../../assets/images/3.jpg";
import home3 from "../../assets/images/4.jpg";
import home4 from "../../assets/images/5.jpg";
import HomeSlider from "../Static/HomeSlider";
import PageTitle from '../Shared/PageTitle';
import Footer from "../Shared/Footer";

const sliderImages = [
  {
    img: home,
  },
  {
    img: home1,
  },
  {
    img: home2,
  },
  {
    img: home3,
  },
  {
    img: home4,
  },
];

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"/>
      <HomeSlider sliderImages={sliderImages}>
  
      </HomeSlider> 
      <ToastContainer/>
      <Footer/>
    </div>
  );
};

export default Home;
