import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import king from '../../Media/king.png'

const Header = () => {
  return (
    <Navbar
  style={{backgroundColor:'#111827',color:'white'}}
  fluid={true}
  rounded={false}
>
  <Navbar.Brand href="#">
    
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      New-Starter
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button className="hidden md:block">
      Get started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  );
};

export default Header;
