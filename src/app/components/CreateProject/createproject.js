import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
 

export default class createproject extends Component {
    render() {
        return (
            <div>
                <div  className="page-header">
          <h3 className="page-title"> Create Project </h3>
          <nav aria-label="breadcrumb">
          </nav>
        </div>

        <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Project Name</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                  </Form.Group>
                  
                    <Form.Group>
                    <label htmlFor="exampleSelectGender">Gender</label>
                    <select className="form-control" id="exampleSelectGender">
                    
                      <option>--Select--</option>
                      <option>Text</option>
                      <option>Images</option>
                      <option>Number</option>
                      
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleTextarea1">Description</label>
                    <textarea className="form-control" id="exampleTextarea1" placeholder="Describe your Project here" rows="4"></textarea>
                  </Form.Group>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
            </div>
        )
    }
}
