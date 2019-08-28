import React, {useState} from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import Para from "../elements/Para";
import HeaderBg from "../images/mobile_header.jpg";

import Banner from "../components/Banner";

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
                        <summary className="text-sukoon text-lg font-gilroyMedium">{item.summary}</summary>
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
            <Title titleLight="Frequently" titleBold="Asked Questions"/>
            <Para width="100%">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab explicabo, maxime? Accusamus aliquam consectetur ducimus ea.</Para>
            <div className="flex flex-wrap overflow-x-hidden">
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
            </div>
            <div className="">
                {items}
            </div>
        </section>
    )
};


function Faq() {

    const[overlay, setOverlay] = useState(false);

    return (
        <Layout setOverlay={setOverlay}>
            <SEO
                title="Home"
                keywords={[`Sukoon`, `hospital`, `react`, `tailwindcss`]}
            />
            <Banner backgroundImg={HeaderBg}/>
            <Faqs/>
        </Layout>

    );
}

export default Faq;
