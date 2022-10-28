import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import Logo from '../../../assets/brands/logo.png';






const Footer = () => {
  return (
    <CDBFooter className="bg-dark bg-opacity-25 mt-5 ">
    <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
      <CDBBox display="flex" justifyContent="between" className="flex-wrap">
        <CDBBox>
          <a href="/" className="d-flex gap-3 align-items-center w-75 p-0 text-dark">
            <img alt="logo" src={Logo} width="30px" />
            <span className="ml-3 h5 font-weight-bold">Dragon News</span>
          </a>
          <p className="my-3" style={{ width: '250px' }}>
            Find the latest news all around the world. If you want to keep update yourself about what happen in the world then stay with us and do subscribe to our newsLetter.
          </p>
          <CDBBox  className="mt-4 d-flex gap-3">
            <CDBBtn flat color="dark">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="linkedin" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="whatsapp" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
        <CDBBox>
          <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            Categories
          </p>
          <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <CDBFooterLink href="/">Resources</CDBFooterLink>
            <CDBFooterLink href="/">About Us</CDBFooterLink>
            <CDBFooterLink href="/">Contact</CDBFooterLink>
            <CDBFooterLink href="/">Blog</CDBFooterLink>
          </CDBBox>
          
        </CDBBox>
        <CDBBox>
          <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            Help
          </p>
          <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <CDBFooterLink href="/">Support</CDBFooterLink>
            <CDBFooterLink href="/">Sign Up</CDBFooterLink>
            <CDBFooterLink href="/">Sign In</CDBFooterLink>
          </CDBBox>
        </CDBBox>
        <CDBBox>
          <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            News
          </p>
          <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <CDBFooterLink href="/">Windframe</CDBFooterLink>
            <CDBFooterLink href="/">Loop</CDBFooterLink>
            <CDBFooterLink href="/">Contrast</CDBFooterLink>
          </CDBBox>
        </CDBBox>
      </CDBBox>
      <small className="text-center mt-5 fw-semibold">&copy; DragonNews, 2022. All rights reserved.</small>
    </CDBBox>
  </CDBFooter>
  );
};

export default Footer;
