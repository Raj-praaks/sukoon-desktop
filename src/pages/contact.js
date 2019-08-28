import React, {useState} from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";

import Para from "../elements/Para"
import styled from "styled-components";
import BannerBg from "../images/servicesBg.png";
import PhoneContact from "../images/contact/phone_contact.svg";
import HelpContact from "../images/contact/help_contact.svg";


// Import slick css files

import MeetExperts from "../components/MeetExperts";
import Banner from "../components/Banner";
import BookBtn from "../elements/BookNowBtn";

const ServiceType = styled.div`
`;

const TabList = styled.ul`
   min-height: 40px;
   height: 60px;
   
   
   
  button{
    border-radius: 10px 10px 0 0;
  }

  .active{
    background: rgba(205,236,227,0.81);
  }
  
  
  .passive{
   background: #d1e1d6cf;
  }
`;

const Tab = styled.button`
    margin-left: 1px;
    width: 75px;
    
    &:focus{
    outline: none;
    }
`;

const PhContact = styled.img`
    width:55px;
    margin-bottom:10px;
`;
const HpContact = styled.img`
    width:55px;
    margin-bottom:10px;
`;
const InfoSection = (props) =>{

  return(
      <div className={`${props.wrapperClass || ''}`}>
        <h2 className="text-2xl text-left text-sukoon leading-none">{props.title}</h2>
        <Para>
          {props.content}</Para>
      </div>
  )
};

const CareService = (props) =>{

  return(
      <section id={props.titleLight} className="p-4">
        <Title titleLight={props.titleLight} titleBold={props.titleBold} display="inline-block"/>
        <div className="flex flex-wrap overflow-x-hidden ">
          <ServiceType className="service_content mt-2 overflow-x-hidden text-justify">
            <InfoSection content="Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
                        crisis with 24-hour, seven-day-a-week." />
          </ServiceType>
            <ul className="flex mt-6 w-full justify-between">
                <li>
                    <div className="text-center">
                        <HpContact src={HelpContact} />
                        <h2 className="text-xl text-sukoon">Helpine No.</h2>
                        <Para width="100%">+91 9818273797</Para>
                    </div>
                </li>
                <li>
                    <div>
                        <PhContact src={PhoneContact} />
                        <h2 className="text-xl text-sukoon">Contact No.</h2>
                        <Para width="100%">+91 9818273797</Para>
                    </div>
                </li>
            </ul>
            <div className="w-full my-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11802.296595422606!2d77.09405926095575!3d28.423970582311863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d220169f5e215%3A0x995dcf81cbb6d65e!2sSector+56%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1565343630794!5m2!1sen!2sin"
                    width="100%" height="350" allowFullScreen>
                </iframe>
            </div>
            <form className="ContactForm w-full">
                <h2 className="text-sukoon text-2xl">Contact Us</h2>
                <div className="flex w-full my-3">
                    <input className="mx-1 w-1/2 border-b border-sukoon" type="text" placeholder="First Name" />
                        <input className="mx-1 w-1/2 border-b" type="text" placeholder="Last Name" />
                </div>
                <div className="flex w-full my-3">
                    <input className="mx-1 w-full" type="text" placeholder="Email Address" />
                </div>
                <div className="flex w-full my-3">
                    <input className="mx-1 w-full" type="text" placeholder="Phone Number" />
                </div>
                <div className="flex w-full my-3">
                    <select className="mx-1 w-full h-8 bg-transparent border-b border-gray-600">
                        <option>Subject 01</option>
                        <option>Subject 02</option>
                        <option>Subject 03</option>
                    </select>
                </div>
                <div className="flex w-full my-3">
                    <textarea className="mx-1 w-full border-b border-gray-600" placeholder="Message" />
                </div>
                <BookBtn border wrapperClass="float-right">
                    Send Us
                </BookBtn>
            </form>
        </div>
      </section>
  )
};

function ContactPage() {

    const[overlay, setOverlay] = useState(false);

  return (
      <Layout setOverlay={setOverlay}>
        <SEO
            title="About"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        />
        <Banner backgroundImg={BannerBg}/>
        <CareService titleLight="Contact" titleBold=" Sukoon"/>
      </Layout>
  );
}

export default ContactPage;
