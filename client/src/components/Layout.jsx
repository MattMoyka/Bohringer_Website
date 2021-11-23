import bohringerlogo from '../assets/bohringerlogo.webp'
import { Link } from 'react-router-dom'
import './layout.css'
import { Icon } from '@iconify/react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Layout(props) {
  return (
    <>
      <Navbar bg="light" expand="lg" className='navbar-border'>
        <Container className='nav-container'>
          <Navbar.Brand href="#home"><img src={bohringerlogo} alt='bohringer-logo' id='logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/'>HOME</Nav.Link>
              <Nav.Link href="/about-us">ABOUT US</Nav.Link>
              <Nav.Link href='/impactors'>IMPACTORS</Nav.Link>
              <Nav.Link href='/rgf-feeders'>RGF FEEDERS</Nav.Link>
              <Nav.Link href='/jaw-crushers'>JAW CRUSHERS</Nav.Link>
              <Nav.Link href='/mineral-sizers'>MINERAL SIZERS</Nav.Link>
              <Nav.Link href='/gallery'>GALLERY</Nav.Link>
              <Nav.Link href='/references'>REFERENCES</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      {props.children}
      <footer className='footer'>
        <div className='footer-row'>
          <div >OVER 70 YEARS EXPERIENCE</div>
          <div id='border-left'>
            CALL US <br />
            (631) 261-7211
          </div>
          <div id='border-left'>EMAIL US <br />
            bohringer1@aol.com or <br />
            bohringerusa@gmail.com
          </div>
          <div id='border-left'>OPENING HOURS < br />
            Mon - Fri: 9am - 5pm</div>
          <div id='border-left'>OUR SERVICES<br />
            <ul>
              <li>System Selection - Base Machines</li>
              <li>Wheel Portable Systems - Skid Systems</li>
              <li>Track Mobile Systems - Custom Plants</li>
            </ul>
          </div>
        </div>
        <div className='footer-social-links'>
          <div>links to social media</div>
          <div>
            <Icon icon="logos:facebook" />
            <Icon icon="ant-design:twitter-square-filled" color="#1da1f2" />
            <Icon icon="ant-design:google-plus-square-filled" color="#db4a39" />
            <Icon icon="fa-brands:youtube-square" color="#c4302b" />
          </div>
        </div>
        <div className='footer-disclaimer'>Disclaimer: <br />
          All information and material on the Web Page is meant for educational purposes only, and in no event will Böhringer be liable to any person for any direct, indirect, special or other consequential damages related to the use of the site, or for information on or use of any other hyperlinked web site including, without limitation, any lost profits, business interruption, loss of programs or other data on your handling system or otherwise, arising out of the use of or inability to use the information, even if Böhringer is advised of the possibility of such damages.

          All intellectual property rights relating to the design and structure of the Web Page, as well as to information and content on the Web Page, are the property of Böhringer (or of a third party). Nothing in this web site shall be construed as being a transfer of, or grant of license to, any copyright, trademark, design, know-how or other registered or unregistered intellectual property.</div>
        <div className='footer-arr'>© 2018 BOHRINGER INC "ALL RIGHTS ARE RESERVED"</div>
      </footer>
    </>

  )
}
