import React from "react";
import styled from "styled-components";

const DetailWrapper = styled.details((props)=>{

    return`
            &{
            border: ${props.border ? '1px solid #969696' : ''};
            padding: ${props.padding || '10px'};
            border-radius: 4px;
           }
          & summary {
            line-height: normal;
            display: flex;
            justify-content: space-between;
            outline: none
            align-items: center;
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
            
            &[open] summary:after {
                content: "-";
            }
    `
});


const Details = (props) =>{

    return(
        <DetailWrapper open={props.open} padding={props.padding} border={props.border}  className= "mb-3">
            <summary className={`${props.summaryClass || 'leading-normal px-5'} `}><h2 className={`${props.summaryTextClass || 'text-2xl'}  text-left text-sukoon leading-none`}>{props.summary}</h2></summary>
            {props.content()}
        </DetailWrapper>
    )
};

export default Details;