import React, {useState} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

// Components
import Para from "../elements/Para";
import Title from "../elements/Heading";
import BookBtn from "../elements/BookNowBtn";
import Banner from "../components/Banner";
import Details from "../elements/Details";

// Images
import RoomImg from "../images/exp/room.jpg";
import FloorAct from "../images/exp/party.jpg";
import Therapy from "../images/exp/bg_2.jpg";
import Highlight from "../images/exp/bg.jpg";
import FacOneBg from "../images/exp/room_dining.jpg";
import FacOneBgSec from "../images/exp/room_spa.jpg";
import HighlightSecond from "../images/exp/bg_3.jpg";
import BannerBg from "../images/servicesBg.png";

const HighlightSection = styled.div(props=>{


    return`
        background-size: cover;
        background-image: url(${props.BgImg});
        background-position: center center;
        background-repeat: no-repeat;
        
        .highlight {
        background: white;
        margin-top: 75px;
        margin-bottom: -65px;
        padding: 25px;
        box-shadow: 0px 6px 10px #00000024;
        }
        .highlight span {
            font-size: 3.8vw;
            font-weight: 600;
        }
    `
});

const Face = styled.div(props=>{

    return`
    height:225px;
    background: url('${props.Img}') center center;
    background-size:cover
    `
});

const Content = (props) =>{
    return(
        <div className="">
            <img className="mt-3 mb-4" src={RoomImg} alt=""/>
            <span>Rooms</span>
            <h3 className="mt-2 mb-1">Suite Room</h3>
            <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
            <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                <ul className="roomFeatures flex overflow-x-scroll w-full">
                    <li className="mr-3 mt-3 mb-3 ">Wifi</li>
                    <li className="mr-3 mt-3 mb-3">Kitchen</li>
                    <li className="mr-3 mt-3 mb-3">Single</li>
                    <li className="mr-3 mt-3 mb-3">Bed</li>
                    <li className="mr-3 mt-3 mb-3">TV</li>
                    <li className="mr-3 mt-3 mb-3">AC</li>
                </ul>
            </div>
        </div>
    )
};

const ActivityContent = (props) =>{

    return(
        <div className="">
            <img className="mt-3 mb-4" src={FloorAct} alt=""/>
            <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
        </div>
    )
};

function Experience() {

    const[overlay, setOverlay] = useState(false);

    return (
        <Layout setOverlay={setOverlay}>
            <SEO
                title="Experience"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />
            <Banner backgroundImg={BannerBg}/>
            <section className="p-4">
                <Title subHeading="Tour" titleLight="Experience " titleBold="Sukoon" />
                <h3 className="mt-3 mb-1 text-sukoon font-gilroyMedium font-normal">Let's Take a Tour   </h3>
                <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Para>
                </div>
            </section>
            <section className="facilities Exp px-5 my-1">
                <Details  open content={Content} border summaryClass="border-gray-700" summaryTextClass="text-xl" summary="Suite Room"/>
                <Details  content={Content} border summaryClass="border-gray-700" summaryTextClass="text-xl" summary="Deluxe Room"/>
                <Details content={Content} border summaryClass="border-gray-700" summaryTextClass="text-xl" summary="Intensive  Care Unit"/>
            </section>
            <div className="facilities Perfloor px-5 my-5">
            <span className="facilities  mb-2 block">Activity Per Floor</span>
                <Details padding="0" open content={ActivityContent} summaryClass="border-gray-700"  summary="Lounge"/>
                <Details padding="0" content={ActivityContent} summaryClass="border-gray-700"  summary="Nursing Station"/>
                <BookBtn border wrapperClass="float-right">
                    Enquiry
                </BookBtn>
            </div>
            <HighlightSection BgImg={Highlight} className="highlightSection px-5 py-5 mt-5">
                <div className="highlight">
                    <span className="text-sukoon">Nurse To Patient Ratio</span>
                    <h2 className="mb-2">1:1 (One Person One Nurse)</h2>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s </Para>
                </div>
            </HighlightSection>
            <div className="px-5 my-5 mt-20">
                <span>ClinicaL Programs</span>
                <div className="">
                    <h2 className="text-left text-sukoon leading-none">Fitness Therapy</h2>
                    <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                        <ul className="patient_services_nav flex overflow-x-scroll">
                            <li className="mr-3 mt-3">
                                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Virtual Therapy</button>
                            </li>
                            <li className="mr-3 mt-3">
                                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Immersive Therapy Programs</button>
                            </li>
                        </ul>
                    </div>
                    <img className="mt-3 mb-4" src={Therapy} alt=""/>
                    <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt exercitationem omnis.</Para>
                </div>
            </div>
            <HighlightSection BgImg={HighlightSecond} className="highlightSection second px-5 py-5 mt-5 mb-24">
                <div className="highlight">
                    <span className="text-sukoon ">Patient Care</span>
                    <h2 className="mb-2">Doctor Visit Twice Daily</h2>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Para>
                </div>
            </HighlightSection>
            <div className="extra_facilities">
                <div className="facOneSec relative z-10">
                    <Face Img={FacOneBg} className="w-full" />
                    <div className="details">
                    <h2 className="text-sukoon">Room Dining</h2>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Para>
                    </div>
                </div>
                <div className="facSecSec relative">
                    <Face Img={FacOneBgSec} className="w-full" />
                    <div className="details">
                    <h2 className="text-sukoon">Room Spa</h2>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Para>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Experience;
