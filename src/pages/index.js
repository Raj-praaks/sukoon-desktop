import React, {useState} from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import Para from "../elements/Para";

import BlogImg  from "../images/iStock-968194620_2019-07-17/iStock-968194620@3x.jpg";
import HeaderBg from "../images/mobile_header.jpg";

import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import MeetExperts from "../components/MeetExperts";
import {Link} from "gatsby";
import ArrowButton from "../elements/ArrowButton";
import Infrastructure from "../components/Infrastructure";

const Caption = (props) => {
    return (
        <div className="my-4">
            <h3 className="text-sukoon font-semibold block">
                {props.subHeading || ''}
            </h3>
            <Para>
                {props.para || ''}
            </Para>
        </div>

    )
};

const WhySukoon = (props) => {
    return (
        <section id="why-sukoon" className="why-sukoon py-6 px-4">
            <Title subHeading="About" titleLight="Why" titleBold="Sukoon" />
            <Caption subHeading="Consult best doctors"
                     para=" Get expert advice from our team of experienced doctors, led by Dr. Sameer Parikh"/>
            <Caption subHeading="Get personalised care"
                     para="Receive customised and holistic care because of our incredible 1:1 nurse to patient ratio"/>
            <Caption subHeading="Experience premium facilities"
                     para="Enhance your recovery in a calming, positive, and comfortable environment "/>
        </section>
    )
};

const content = [
    {
        mainTitle: 'Acute',
        subTitle: 'Psychiatry Care',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        mainTitle: 'Acute',
        subTitle: 'Psychiatry Care',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        mainTitle: 'Acute',
        subTitle: 'Psychiatry Care',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        mainTitle: 'Acute',
        subTitle: 'Psychiatry Care',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
];

const InPatientServices = (props) => {

    return (
        <section id="inpatient-services" className="p-4">
            <Title subHeading="IPD" titleLight="Residential" titleBold="Services" display="block"/>
            <Carousel class="" content={content}/>
        </section>
    )
};

const FaqCardWrapper = styled.div`

   & summary {
    display: flex;
    justify-content: space-between;
    outline: none
  }

  & summary::-webkit-details-marker {
    display: none;
  }

    & summary:after {
        content: "+";
        color: #12443e;
        float: right;
        font-size: 35px;
        padding: 0;
        text-align: center;
        line-height: 25px;
        margin-top: 4px;
    }
    
    & details[open] summary:after {
        content: "-";
    }

`;

const Faqs = (props) => {

    let content = [
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },

    ];

    let items = content.map((item)=>{
        return(
            <div className="flex-col flex p-4 shadow-lg my-4 bg-white">
                <FaqCardWrapper className="flex justify-between">
                    <details>
                        <summary className="text-sukoon text-lg font-medium">{item.summary}</summary>
                        <Para width="100%" padding="8px 0">
                            {item.description}
                        </Para>
                    </details>
                </FaqCardWrapper>
            </div>
        )
    });


    return (
        <section className="p-4">
            <Title subHeading="Learn" titleLight="Frequently" titleBold="Asked Questions"/>
            <div className="">
                {items}
            </div>
        </section>
    )
};

const Blogs = (props) =>{
    return(
        <section className="p-4 pb-1">
            <div>
                <Title subHeading="Learn" titleLight="" titleBold="Blogs"/>
                <div className="shadow-lg mt-4">
                    <img src={BlogImg} alt="Blog"/>
                    <div className="p-2">
                    <h5 className="block pt-2 text-sukoon font-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h5>
                        <Para className="text-gray-700 text-right py-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s,
                        </Para>
                        <div>
                            <span className="text-sukoon font-bold small">Guest</span>
                            <span className="text-sukoon font-normal small"> / Apr 16 2019</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-sukoon flex">
                    <Link to="/" className="pb-1 border-solid border-b border-sukoon ">Read More Blogs</Link>
                    <ArrowButton border={false} margin="0 12px"/>
                </div>
            </div>
        </section>
    )
};

const OutPatientServices = (props) => {

    return (
        <section id="out-patient-services" className="p-4">
            <Title subHeading="OPD" titleLight="Out Patient" titleBold="Care Services" display="block"/>
            <Carousel content={content}/>
        </section>
    )
};

function IndexPage() {

    const[overlay, setOverlay] = useState(false);

    return (
        <Layout setOverlay={setOverlay}>
            <SEO
                title="Home"
                keywords={[`Sukoon`, `hospital`, `react`, `tailwindcss`]}
            />
            <Banner overlay={overlay} bookNow contact discover backgroundImg={HeaderBg}/>
            <WhySukoon/>
            <InPatientServices/>
            <OutPatientServices/>
            <Infrastructure />
            <MeetExperts/>
            <Faqs/>
            <Blogs/>
        </Layout>

    );
}

export default IndexPage;
