import React from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:"url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)"
      }}
    >
    <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}>
         Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          In the era of beautiful and delicious life we are providing you the best opportunities to decorate <br/> as well as make your hosue more and more beautifull.Here you can find lot of things to make <br/> your house good looking and very attractive for people vision
        </p>
        <Link to="/products" className="inline-block">
       <div className={`${styles.button}`}>
       <span className="text-[#fff] text-[18px] font-[Poppins]">
        Shope Now
       </span>
       </div>

        </Link>
    </div>
    </div>
  );
};

export default Hero;
