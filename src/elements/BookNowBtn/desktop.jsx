import React from "react";
import styled, { ThemeProvider } from "styled-components";


const Wrapper = styled.div`
  /* padding: 4px; */
  padding: ${props => props.wrapperPadding || '4px'};
  background: ${props=> props.transparent ? '' : props.theme.fg};
  border:  ${props => props.transparent ? '' : `1px solid ${props.theme.bg}`};
  
  button:focus{
    outline: none;
  }
`;

const ThemedButton = styled.button`
  
  padding: ${props => props.buttonPadding || '10px 20px'};
  color: ${props => props.transparent ? props.buttonText || '#12443e' :props.theme.fg};
  background: ${props => props.transparent ?  'transparent' : props.theme.bg};
`;

const green = {
  bg: '#12443e',
  fg: '#fff',
  paleMint:'#C2DCD3',
};

const white = ()=>({
  bg: 'white',
  fg: '#12443e',
});

const mint ={
  bg:'#C2DCD3',
  fg: '#12443e',
};

const Button = (props) =>{

  const theme = props.theme === 'green' ? green : props.theme === 'mint' ? mint : props.theme === 'white' ? white : green;

  return(
    <ThemeProvider theme={theme}>
      <Wrapper transparent={props.transparent} wrapperPadding={props.wrapperPadding} className={`${props.wrapperClass || ''} w-fit h-fit`}>
        <ThemedButton buttonText={props.buttonText} onClick={()=>{ props.clickFn ? props.clickFn(...props.arguments) : null }} transparent={props.transparent} buttonPadding={props.buttonPadding}
                      className={`${props.buttonClass || 'text-lg'} block relative font-gilroyMedium outline-none  items-center`}>
          {props.children}
        </ThemedButton>
      </Wrapper>
    </ThemeProvider>

  )
};

export default Button;