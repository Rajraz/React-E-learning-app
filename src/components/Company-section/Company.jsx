import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Company = () => {
  return (
    <section>
        <Container>
        <Row>
            <Col lg='2' md='3'> 
            <h5 className='d-flex align-items-center gap-1'> <i class="ri-vimeo-fill"></i>Vimeo</h5>
            </Col>
            <Col lg='2' md='3'>
                <h5 className='d-flex align-items-center gap-1'><i class="ri-pinterest-fill"></i>Pinterest</h5>
            </Col>
            <Col lg='2' md='3'>
                <h5 className='d-flex align-items-center gap-1'><i class="ri-dribbble-line"></i> Dribble </h5>
                 </Col>
            <Col lg='2' md='3'>
                <h5 className='d-flex align-items-center gap-1'><i class="ri-apple-fill"></i>Apple</h5>
                 </Col>
            <Col lg='2' md='3'>
                <h5 className='d-flex align-items-center gap-1'><i class="ri-disqus-line"></i>Disqus</h5>
                 </Col>
            <Col lg='2' md='3'>
                <h5 className='d-flex align-items-center gap-1'>
                <i class="ri-dropbox-fill"></i>
                Dropbox
                </h5>
                 </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Company
