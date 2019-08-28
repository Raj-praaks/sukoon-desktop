import {Link} from "gatsby";
import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import styled from "styled-components";

import Call from "../images/icons/phone.svg";

// Components
import BookBtn from "../elements/BookNowBtn";

const MenuLinkWrapper = styled.div`
  height: 88%;
`;

const Nav = styled.nav`
  width: 100%;
  transition: all 200ms ease-in-out;
  background: #C2DCD3;
  min-height: 50px;
  z-index: 101;
`;

const Menu = styled.span`
    
  &::before{
    top: 20px;
    left:14px;
    position: absolute;
    content: '';
    background: #12443e;
    width: 34px;
    height: 2px;
  }
  
  &::after{
    left: 14px;
    top: 26px;
    position: absolute;
    content: '';
    background: #12443e;
    width: 34px;
    height: 2px;
  }
`;

function Header(props) {
    const [isExpanded, toggleExpansion] = useState(false);

    // Makes nav bar sticky after user scrolls past banner section.
    const handleScroll = () =>{

        let Header = document.getElementById('header-intro');
        let StickyMenu = document.getElementById('nav-bar');
        let Booking = document.getElementById('nav-booking-button');
        let offset =  Math.abs(Number(Header.getBoundingClientRect().top));

        if(offset > 786 || offset > 666 || offset > 556){
            Booking.classList.add('show');
            Booking.classList.remove('hide');
            StickyMenu.classList.add('sticky');
            StickyMenu.classList.remove('static');
        }
        else{
            Booking.classList.add('hide');
            Booking.classList.remove('show');
            StickyMenu.classList.remove('sticky');
            StickyMenu.classList.add('static');
        }

    };

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    });

    return (
        <Nav id="nav-bar" className="fixed bottom-0">

            <div
                className={`${
                    isExpanded ? `` : `hidden`
                    } items-center justify-between w-full bg-menuBg`}
            >
                <MenuLinkWrapper className="flex flex-col">
                    <div className="mt-6 flex justify-around">
                        <div className="">
                            <img src={Call} className="w-4 inline-block" alt="Contact Sukoon"/>
                            <span className="ml-2">+91 9876543210</span>
                        </div>
                        <div className="">
                            <img src={Call} className="w-4 inline-block" alt="Contact Sukoon"/>
                            <span className="ml-2">+91 9876543210</span>
                        </div>
                    </div>
                    <div className="text-lg ml-6 text-sukoon flex flex-col">
                        <Link
                            to="/"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Services
                        </Link>

                        <Link
                            to="/infrastructure"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Infrastructure
                        </Link>
                        <Link
                            to="/experience"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Experience
                        </Link>
                        <Link
                            to="/"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Doctors
                        </Link>
                        <Link
                            to="/internationalPatient"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            International Patients
                        </Link>
                        <Link
                            to="/faqs"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            FAQS
                        </Link>
                        <Link
                            to="/"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Blogs
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Contact
                        </Link>
                    </div>
                </MenuLinkWrapper>
            </div>
            <div className={`${
                isExpanded ? `` : ``
                } flex flex-wrap items-center justify-between mx-auto p-2`}
            >
                <div className="">
                    <BookBtn theme="green" id="nav-booking-button" wrapperClass="hide mr-2" full>
                        Book Appointment
                    </BookBtn>
                </div>
                <div className="flex justify-between py-2">
                    <button
                        className="block relative focus:outline-none flex items-center px-3 pb-2 rounded text-sukoon"
                        onClick={() => {
                            toggleExpansion(!isExpanded);
                            props.toggleMenu(!isExpanded);
                            }
                        }>
                        <Menu id="menu-hamburger-icon" className="text-xs font-bold">
                            <span>MENU</span>
                        </Menu>
                    </button>
                </div>
            </div>
        </Nav>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
