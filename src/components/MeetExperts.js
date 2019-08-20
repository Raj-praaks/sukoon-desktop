import React from "react";
import styled from "styled-components";
import Slider from "react-slick/lib";

// Components
import Title from "../elements/Heading";
import Para from "../elements/Para";

// Slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import Physician from "../images/physician_retail_web_2019-07-29/physician_retail_web@3x.jpg";
import Carousel from "./Carousel";
import MedicalDoc from "../images/doctors/doc.jpg";
import NursesImg from "../images/physician_retail_web_2019-07-29/physician_retail_web.jpg";
import BookBtn from "../elements/BookNowBtn";

const CarouselParenWrapper = styled.div`
  text-align: center;
  
  h2{
  display: none;
   font-size: 12px;
  }
  p{
  display: none;
  font-size: 11px;
  }
`;

const CarouselImgWrapper = styled.div`
  width: 33vw;
  height: 29vw;
  position: relative;
  
  > img{
    opacity: 0.71;
    margin: 10px 0;
    object-fit: cover;
    height: 100%;
  }
`;

const Ovarlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.31);
`;


const MeetExpertsCarousel = () =>{
    const settings = {
        slidesToScroll: 1,
        arrow:true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "1rem",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return(
        <div>
            <Slider {...settings}>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto opacity-1" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
            </Slider>
        </div>
    )
};

const MeetExpertsWrapper = styled.section`
  .slick-center {
    z-index: 3;
    position: relative;
    padding: 1rem 0;
    margin-bottom: 1rem;
    transform: scale(1.08);
  }

    .slick-center .ovarlay {
        display: none;
    }
    .slick-center h2, .slick-center  p{
        display: inline-block;
    }
    .slick-center .CarouselImgWrapper img {
        margin: 0;
        background: rgba(0, 0, 0, 0.61);
        opacity: 1;
        padding: 7px;
    }
`;


const Doctors = [
    {
        name: 'John Doe',
        image: NursesImg,
    },
    {
        name: 'John Doe',
        image: NursesImg,
    },
    {
        name: 'John Doe',
        image: NursesImg,
    },
    {
        name: 'John Doe',
        image: NursesImg,
    },
    {
        name: 'John Doe',
        image: NursesImg,
    },
    {
        name: 'John Doe',
        image: NursesImg,
    },

];
const Nurses = styled.div`
    width:75vw;
    margin-right: 20px;
`;

const CarouselItems = (item) =>{
    return(
        <Nurses className="">
            <div className="DocImgSec">
                <img src={item.image} alt="doctor"/>
                <h3 className="bg-sukoon text-white p-2 text-center text-xl">{item.name}</h3>
            </div>
        </Nurses>
    )
};


const MeetExperts = (props) => {
    return (
        <MeetExpertsWrapper id="meet-experts" className="p-4 relative">
            <Title subHeading="About" titleLight="Our" titleBold="Doctors"/>
            <Para width="100%" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s" />
            <Carousel container  cardFn={CarouselItems} content={Doctors}/>
        </MeetExpertsWrapper>
    )
};

export default MeetExperts;