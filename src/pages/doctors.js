import React, {useState} from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import Para from "../elements/Para";


import HeaderBg from "../images/mobile_header.jpg";
import MedicalDoc from "../images/doctors/doc.jpg";

import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import BookBtn from "../elements/BookNowBtn";
import MeetExperts from "../components/MeetExperts";


const Caption = (props) => {
    return (
        <div className="my-4">
            <h2 className="text-sukoon text-lg font-normal font-bold block">
                {props.subHeading || ''}
            </h2>
            <Para>
                {props.para || ''}
            </Para>
        </div>

    )
};

const WhySukoon = (props) => {
    return (
        <section id="why-sukoon" className="why-sukoon p-4">
            <Title subHeading="Meet" titleLight="Our" titleBold="Team" />
        </section>
    )
};

const content = [
    {
        mainTitle: 'Acute',
        subTitle: 'Psychiatry Care',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },

];

const DocCard = styled.div`
    width:75vw;
    margin-right: 20px;
`;

const Doctors = [
    {
        name: 'John Doe',
        image: MedicalDoc,
    },
    {
        name: 'John Doe',
        image: MedicalDoc,
    },
    {
        name: 'John Doe',
        image: MedicalDoc,
    },
    {
        name: 'John Doe',
        image: MedicalDoc,
    },
    {
        name: 'John Doe',
        image: MedicalDoc,
    },
    {
        name: 'John Doe',
        image: MedicalDoc,
    },

    ];

const CarouselItems = (item) =>{
    return(
            <DocCard className="">
                <div className="DocImgSec">
                    <img src={item.image} alt="doctor"/>
                    <h3 className="bg-sukoon text-white p-2 text-center text-xl">{item.name}</h3>
                </div>
                <BookBtn border wrapperClass="mx-auto mt-3">Book Appointment</BookBtn>
            </DocCard>
    )
};

const InPatientServices = (props) => {

    return (
        <section id="inpatient-services" className="p-4">
            <Title subHeading="Meet" titleLight="Our" titleBold="Doctors" display="block"/>
            <Carousel container  cardFn={CarouselItems} content={Doctors}/>
        </section>
    )
};

function DoctorsPage() {
    const[overlay, setOverlay] = useState(false);
    return (
        <Layout setOverlay={setOverlay}>
            <SEO
                title="Home"
                keywords={[`Sukoon`, `hospital`, `react`, `tailwindcss`]}
            />
            <Banner backgroundImg={HeaderBg}/>
            <WhySukoon/>
            <section className="MedicalDirectorSection p-4 pt-0">
                <div className="MedicalDocImg">
                    <img src={MedicalDoc} />
                </div>
                <div className="MedicalDocInfo pt-4">
                    <h3 className="text-sukoon text-3xl font-Gilroy-Bold">Medical Director</h3>
                    <Para width="100%">MBBS, DPM, MD (Psychiatry)</Para>
                    <Para width="100%">Director, Mental Health And Behavioural Sciences</Para>
                    <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto delectus distinctio dolorum eius, facilis fuga iure iusto magnam nam natus nihil, odit quam tempora, velit. Animi architecto blanditiis cupiditate dolore explicabo, facere in itaque necessitatibus neque, odio odit officia perferendis quam quo repellat? Est, impedit, sapiente! Aspernatur, error obcaecati? Consectetur eaque eos laudantium molestias recusandae sunt? Aliquam asperiores atque, autem debitis esse fuga fugit necessitatibus nesciunt.</Para>
                </div>
            </section>
            <InPatientServices/>
            <MeetExperts/>
        </Layout>

    );
}

export default DoctorsPage;
