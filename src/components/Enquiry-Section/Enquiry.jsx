import React from "react";
import './enquiry.css';
import { Container, Row, Col } from "reactstrap";

const Enquiry = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">For Enquiery</h2>
            <form>
           

  <div class="form-group row">
    <label for="First Name" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-10">
      <input type="First Name" class="form-control" id="First Name" placeholder="First Name" />
    </div>
  </div>

  <div class="form-group row">
    <label for="Last Name" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-10">
      <input type="lastname" class="form-control" id="lastname" placeholder="Last Name" />
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="number" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inumber" placeholder="Mob Number :(+91-9876543211)"/>
    </div>
  </div>

  <div class="form-group row">
  <label class="col-sm-2 col-form-label" for="inlineFormCustomSelectPref"></label>
  <select class="custom-select col-sm-10" id="inlineFormCustomSelectPref">
    <option selected>Choose Course</option>
    <option value="1">Web Development</option>
    <option value="2">Grapic Design</option>
    <option value="3">UI-UX Design</option>
  </select>

  </div>
 
  <div class="form-group row">
    <label for="iMessage" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-10">
      <input type="Message" class="form-control" id="Message" placeholder="Message"/>
    </div>
  </div>

         <button type="submit" class="btn btn-primary">Submit</button>
</form>
           
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Enquiry;