import React, {useState} from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";

import Para from "../elements/Para"
import styled from "styled-components";
import BannerBg from "../images/servicesBg.png";

// Import slick css files

import MeetExperts from "../components/MeetExperts";
import Banner from "../components/Banner";

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

const InfoSection = (props) =>{

    return(
        <div className={`${props.wrapperClass || ''}`}>
            <h3 className="font-gilroyMedium mt-3 text-left text-sukoon leading-none">{props.title}</h3>
            <Para>
                {props.content}</Para>
        </div>
    )
};

const CareService = (props) =>{

    return(
        <section id={props.titleLight} className="p-4">
            <Title titleLight={props.titleLight} titleBold={props.titleBold} display="block"/>
            <div className="flex flex-wrap overflow-x-hidden ">
                <TabList className="patient_services_nav flex overflow-y-hidden overflow-x-scroll">
                    <li className="mt-3">
                        <Tab className="text-sm text-gray-800 active font-medium py-2 px-2 w-fit text-left">
                            Tab1
                        </Tab>
                    </li>
                    <li className="mt-3">
                        <Tab
                            className="bg-white text-sm text-gray-800 passive font-medium py-2 px-2 w-fit text-left">
                            Tab2
                        </Tab>
                    </li>
                    <li className="mt-3">
                        <Tab
                            className="bg-white text-sm text-gray-800 passive font-medium py-2 px-2 w-fit text-left">Tab3
                        </Tab>
                    </li>
                    <li className=" mt-3">
                        <Tab
                            className="bg-white text-sm text-gray-800 passive font-medium py-2 px-2 w-fit text-left">Tab4
                        </Tab>
                    </li>
                    <li className="mt-3">
                        <Tab
                            className="bg-white text-sm text-gray-800 passive font-medium py-2 px-2 w-fit text-left">Tab5
                        </Tab>
                    </li>
                    <li className="mt-3">
                        <Tab
                            className="bg-white text-sm text-gray-800 passive font-medium py-2 px-2 w-fit text-left">Tab5
                        </Tab>
                    </li>
                    <li className="mt-3">
                        <Tab
                            className="bg-white text-sm text-gray-800 passive font-medium py-2 px-2 w-fit text-left">Tab5
                        </Tab>
                    </li>
                </TabList>
                <ServiceType className="service_content mt-2 overflow-x-hidden text-justify">
                    <InfoSection title="Acute Psychiatry Services" content="Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
                        crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. More than
                        42,000 calls and drop-in visits each year are handled by the Acute Psychiatric Services
                        staff of psychiatrists, social workers, and psychiatric nurses. The APS is supported by
                        Hennepin County funds and state grants, provides these services to any person in need." />
                    <InfoSection title="Service" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente
                        veritatis."/>
                    <InfoSection title="Our Treatment Team" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente
                        veritatis."/>
                    <InfoSection title="Treatment Goal" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente
                        veritatis."/>
                </ServiceType>
            </div>
        </section>
    )
};

function Services() {
    const[overlay, setOverlay] = useState(false);

    return (
        <Layout setOverlay={setOverlay}>
            <SEO
                title="About"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />
            <Banner backgroundImg={BannerBg}/>
            <CareService titleLight="In Patient" titleBold="Care Services"/>
            <CareService titleLight="Out Patient" titleBold="Care Services"/>
            <MeetExperts/>
        </Layout>
    );
}

export default Services;
