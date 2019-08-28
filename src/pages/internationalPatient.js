import React, {useState} from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import Para from "../elements/Para";
import HeaderBg from "../images/mobile_header.jpg";

import Banner from "../components/Banner";
import MeetExperts from "../components/MeetExperts";
import VirtualFormBg from "../images/intertional-patient/form_bg.png";
import PartnerHotel from "../images/intertional-patient/partner_hotel.png";
import SukoonBullets from "../images/intertional-patient/sukoon_bullet.svg";
import BookBtn from "../elements/BookNowBtn";


const Caption = (props) => {
    return (
        <div className="my-2">
            <h2 className="text-sukoon text-lg font-normal font-bold block">
                {props.subHeading || ''}
            </h2>
            <Para className="text-right py-2">
                {props.para || ''}
            </Para>
        </div>

    )
};

const MainForm = styled.div`
   background-image: url(${VirtualFormBg});
   background-position: center center;
   background-size:cover;
   background-repeat:no-repeat;
`;
const PartnerHotelContent = styled.div`
    position:relative;
    background:white;
    margin-top:-65px;
    z-index:1;
`;



const WhySukoon = (props) => {
    return (
        <section id="why-sukoon" className="why-sukoon p-4">
            <Title titleLight="Plan a" titleBold=" Trip" />
            <Caption subHeading="Caption 1"
                     para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            <Caption subHeading="Caption 2"
                     para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            <Caption subHeading="Caption 3"
                     para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
        </section>
    )
};

function InternationalPatient() {

    const[overlay, setOverlay] = useState(false);

    return (
        <Layout setOverlay={setOverlay}>
            <SEO
                title="Home"
                keywords={[`Sukoon`, `hospital`, `react`, `tailwindcss`]}
            />
            <Banner bookNow contact discover backgroundImg={HeaderBg}/>
            <WhySukoon/>
            <form className="VirtualConsForm p-4 ">
                <div className="FormHead border-b border-yellow-500 bg-sukoon px-4 py-2">
                    <h2 className="text-white text-xl">Free Virtual Consultation</h2>
                </div>
                <MainForm className="p-4 text-white">
                    <input className="bg-transparent border-b border-gray-100 w-full py-1 mb-2" type="text" placeholder="Patient Name" />
                    <input className="bg-transparent border-b border-gray-100 w-full py-1 mb-2" type="text" placeholder="Age" />
                    <input className="bg-transparent border-b border-gray-100 w-full py-1 mb-2" type="text" placeholder="Email Address" />
                    <input className="bg-transparent border-b border-gray-100 w-full py-1 mb-2" type="text" placeholder="Contact No." />
                    <select className="bg-transparent border-b border-gray-100 w-full py-1 mb-2" placeholder="Select Your Country">
                        <option>Country List</option>
                        <option>Country List</option>
                        <option>Country List</option>
                    </select>
                    <select className="bg-transparent border-b border-gray-100 w-full py-1 mb-2" placeholder="Medical Concern">
                        <option>Country List</option>
                        <option>Country List</option>
                        <option>Country List</option>
                    </select>
                    <input className="bg-transparent border-b border-gray-100 w-full py-1 mb-2" type="text" placeholder="Upload Your Doc." />
                    <input className="bg-transparent border-b border-gray-100 w-full py-1 mb-2" type="text" placeholder="Upload Your Medical Pres.." />
                    <textarea className="bg-transparent border-b border-gray-100 w-full py-1 mb-2" type="text" placeholder="Comments">
                    </textarea>
                    <BookBtn theme="green">
                        Get An Estimate
                    </BookBtn>
                </MainForm>
                <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut hic recusandae vero.</Para>
            </form>
            <section className="p-4" id="InternationalPatientInfo">
                <h2 className="text-sukoon text-3xl font-semibold">Facilities For International Patient</h2>
                <Para width="100%">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at, deleniti dolor dolorem doloribus ducimus, ex excepturi illo illum ipsa quas, quos sapiente totam.</Para>
                <ul>
                    <li className="text-para font-gilroyMedium text-base mt-3">1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga id nisi.</li>
                    <li className="text-para font-gilroyMedium text-base mt-1">2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga id nisi.</li>
                    <li className="text-para font-gilroyMedium text-base mt-1">3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga id nisi.</li>
                    <li className="text-para font-gilroyMedium text-base mt-1">4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga id nisi.</li>
                    <li className="text-para font-gilr<dioyMedium text-base mt-1">5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga id nisi.</li>
                    <li className="text-para font-gilroyMedium text-base mt-1">6. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga id nisi.</li>
                </ul>
            </section>
            <section className="partnerhotelinfo py-6" id="">
                <div className="mb-6">
                    <img src={PartnerHotel} />
                    <PartnerHotelContent className="mx-5 p-5 shadow-lg">
                        <span className="text-sukoon">Patient Care</span>
                        <h2 className="text-sukoon text-2xl font-semibold">Partners Hotels / Guest Houses</h2>
                        <Para width="100%">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum dicta facilis, iure mollitia numquam quae quis tenetur voluptate voluptatibus! Distinctio minima non pariatur.</Para>
                    </PartnerHotelContent>
                </div>
            </section>
            <section className="Stats p-5 pt-0">
                <div className="Steps mb-5">
                    <h2 className="text-sukoon font-semibold text-3xl">Process</h2>
                    <ul className="mt-2">
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                    </ul>
                </div>
                <div className="Steps mb-5">
                    <h2 className="text-sukoon font-semibold text-3xl">Checklist</h2>
                    <ul className="mt-2">
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                    </ul>
                </div>
                <div className="Steps">
                    <h2 className="text-sukoon font-gilroyBold text-3xl">Document Needed</h2>
                    <ul className="mt-2">
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                        <li className="flex"><img width="12px" className="mr-2" src={SukoonBullets} /> Lorem ipsum dolor sit amet,</li>
                    </ul>
                </div>
            </section>
            <MeetExperts/>
        </Layout>

    );
}

export default InternationalPatient;

