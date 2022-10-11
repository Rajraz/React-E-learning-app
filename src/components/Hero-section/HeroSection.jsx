import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../../assets/images/hero-1.jpg';
import './hero-section.css';

const herosection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                   <div className="hero__content">
                   <h2 className='mb-4'>Anytime Anywhere Easy To Learn</h2>
                    <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Nulla laudantium amet explicabo <br /> veritatis iure maxime quae eligendi atque. </p>
                   
                   <div className="search">
                    <input type="text" placeholder="search" />
                    <button className='btn'>Search</button>
                   </div>

                   </div>
                </Col>
                <Col lg='6' md='6'>
                    <img src={heroImg} alt="" className='w-100' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default herosection
