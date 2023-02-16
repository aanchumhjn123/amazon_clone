import React from 'react'
import "./footer.css"
import logo from "../../assets/images/amazon@.png";
import { Container,Row,Col } from 'reactstrap'

const Footer = () => {
  return (<> 
    <footer className='main_footer align-items-center'>
      <span className='centerword'>Back to Top</span></footer>
     <footer className='main_footer2' >
      <Container>
        <Row className='rowinline'>
          <Col lg='3' >
            <h6 className='dec'>Get to know us</h6>
            <p>About Us</p>
            <p>Careers</p>
            <p>press Releases</p>
            <p>Amazon Science</p>
          </Col>
          <Col lg='3'>
            <h6 className='dec'>Connect With Us</h6>
            <p >Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </Col>
          <Col lg='3'>
          <h6 className='dec'>Make Money With Us</h6>
           <p>Sell on Amazon</p>
           <p>Sell Under Amazon Accelerator</p>
           <p>Protect Global Selling</p>
           <p>Become an affiliate</p>
           <p>Fulfilment by Amazon</p>
           <p>Advertise Your Product</p>
           <p>Amazon Pay on Mwechants</p>
          </Col>
          <Col lg='2'>
          <h6 className='dec'>Let Us Help You</h6>
          <p>COVID- 19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Perchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
          </Col>
        </Row>
        <Row><p className='bord'></p></Row>
      </Container>
      <Container>
        <Row>
        <Col lg='6'><div className="logo2">
         <img src={logo} alt="logo" />
        </div></Col>
          <Col lg='6'>
            <button className='btn2'><i class="ri-global-line"></i>English</button>
          </Col>

        </Row>
        <Row className='foot_wrapper'><div className='nav_wrapper1'><span className='dec'>Australia</span><span className='dec'>Brazil</span>
        <span className="dec">canado</span><span className="dec">France</span><span className="dec">Germany</span>
        <span className="dec">Italy</span><span className='dec'>Japan</span><span className="dec">Mexio</span>
        <span className="dec">Netherlends</span><span className="dec">Poland</span><span className="dec">Singapore</span>
       <span className='dec'>Spain</span><span className="dec">Turkey</span><span className="dec">United Arab Emirates</span>
        </div>
        </Row>
        <Row className='foot_wrapper1'><div className='nav_wrapper2'><span className="dec">United Kingdom</span><span className='dec'>United States</span></div></Row>
      </Container>

     </footer>
     <footer className='main_footer3'>
      
     </footer>
     </>
  )
}

export default Footer