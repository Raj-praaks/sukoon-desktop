import React from "react";
import styled from "styled-components";

// Components
import Title from "../elements/Heading";
import Para from "../elements/Para";

// Images
import Carousel from "./Carousel";
import NursesImg from "../images/physician_retail_web_2019-07-29/physician_retail_web.jpg";

const MeetExpertsWrapper = styled.section`
  
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