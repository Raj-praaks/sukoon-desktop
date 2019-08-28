import React from "react";
import styled from "styled-components";
import Para from "../elements/Para";
import ArrowButton from "../elements/ArrowButton";

// Images
import GreenLeavs from "../images/green-leaves-waterdrops-4k-wallpaper-3840x2400_2019-07-17/green-leaves-waterdrops-4k-wallpaper-3840x2400@2x.jpg";

const CardContainer = styled.div`
  background-image: url(${GreenLeavs});
  background-position: center center  ;
`;

const Cards = (item) =>{

    return(
        <CardContainer className={`my-2 p-3 mx-1`}>
            <div className="bg-white">
                <div className="py-6 px-4 w-full">
                    <h3 className="font-bold text-sukoon block">{item.mainTitle}
                        <span className="font-bold block">{item.subTitle}</span>
                    </h3>
                    <Para wrapperClass="my-1 py-2" width="14rem">
                        {item.para}
                    </Para>
                    <ArrowButton margin="10px 0"/>
                </div>
            </div>
        </CardContainer>
    )
};

const Carousel = (props) => {

    let item = props.content.map(item => {

        if(props.container){
            return props.cardFn(item);
        }
        else{
            return Cards(item);
        }
    });




    return (
        <div className="overflow-y-hidden mt-4">
            <div className="carousel-container overflow-y-scroll flex flex-no-wrap">
                {item}
            </div>
        </div>
    );
};

export default Carousel;