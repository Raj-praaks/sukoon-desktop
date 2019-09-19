import React  from "react";

// Components
import Mobile from "./Home/mobile";
import Desktop from "./Home/desktop";
import Layout from "../components/view/layout";
import SEO from "../components/seo";

export  default  class IndexPage extends React.Component{
      constructor(props) {
        super(props);
        this.state={
          overlay:false,
        }
      }

      // Function to update state.
      updateState = (stateName, value) => {
        this.setState({[stateName] : value});
      };

  render() {
    if (window && window.matchMedia("(max-device-width: 760px)").matches) {
      return  (
       <Layout overlay={this.state.overlay} setOverlay={this.updateState}>
         <SEO
           title="Home"
           keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
         />
         <Mobile/>
       </Layout>
      )
    }
    else{
      return(
        <Layout>
          <SEO
            title="Home"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />
          <Desktop/>
        </Layout>
        )
    }
  }

}
