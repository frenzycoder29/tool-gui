import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
export default class test extends Component {
    render() {
        return (
            <div>
                  <div  className="page-header">
          <h3 className="page-title"> Test Model </h3>
          <nav aria-label="breadcrumb">
          <a  href=""class="btn btn-primary" title="Train Model" onClick={()=>this.props.history.push('/form-elements/train')}><i className="fa fa-cogs"></i> </a> <a  href=""class="btn btn-primary" title="Deploy Model" onClick={()=>this.props.history.push('/form-elements/deploy')}><i className="fa fa-chain"></i> </a>
          </nav>
        </div>

        <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Test Data</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Test Data Here" />
                  </Form.Group>
                  
                    
                  <button  className="btn btn-primary mr-2">Start Testing</button>
                  
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h3 className='card-title'> Test Result </h3>
                <p className='card-description'> Class Predicted : Test</p>
                <p className='card-description'> Confidence score : 23%</p>
              </div>
            </div>
          </div>
            </div>
        )
    }
}
