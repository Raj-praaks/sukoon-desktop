import React from "react";
import styled from "styled-components";

const Para = (props) =>{

    const Paragraph = styled.p`
        width: ${props.width || '100%'};
        padding: ${props.padding || ''};
        text-align: ${props => props.textAlign || 'left'};
        hyphens: manual;
        line-height: 1.5;
    `;

    return(
        <Paragraph width={props.width} padding={props.padding} textAlign={props.textAlign} className={`${props.wrapperClass || '' } text-para text-sm font-medium py-1 block`}>
            {props.children || props.content}
        </Paragraph>
    )
};

export default Para;