import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
export default class dataset extends Component {
    render() {
        return (
            <div>
                <div  className="page-header">
                    <h3 className="page-title"> Dataset </h3>
                    <nav aria-label="breadcrumb">
                    <a  href=""class="btn btn-primary" title="Model Page" onClick={()=>this.props.history.push('/form-elements/modelpage')}><i className="fa fa-puzzle-piece"></i> </a> <a  href=""class="btn btn-primary" title="Train Model" onClick={()=>this.props.history.push('/form-elements/train')}><i className="fa fa-cogs"></i> </a>
                    </nav>
                    </div>

                    <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <div className="card-media">
                    <input style={{width:"80%",border:"1px solid gray",borderRadius:'.2rem'}} placeholder="Enter Class Here" type="text"></input>
                    <button style={{marginLeft:"10px"}}  className="btn btn-primary mr-2">Add Button</button>               
              </div>  
              </div>
            </div>

                
          </div> 
          <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body py-5">
                <div className="d-flex flex-row justify-content-center align-items">
                  <i className="mdi mdi-facebook text-facebook icon-lg"></i>
                  <div className="ml-3">
                    <h6 className="text-facebook font-weight-semibold mb-0">2.62 Subscribers</h6>
                    <p className="text-muted card-text">You main list growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body py-5">
                <div className="d-flex flex-row justify-content-center align-items">
                  <i className="mdi mdi-facebook text-facebook icon-lg"></i>
                  <div className="ml-3">
                    <h6 className="text-facebook font-weight-semibold mb-0">2.62 Subscribers</h6>
                    <p className="text-muted card-text">You main list growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body py-5">
                <div className="d-flex flex-row justify-content-center align-items">
                  <i className="mdi mdi-facebook text-facebook icon-lg"></i>
                  <div className="ml-3">
                    <h6 className="text-facebook font-weight-semibold mb-0">2.62 Subscribers</h6>
                    <p className="text-muted card-text">You main list growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body py-5">
                <div className="d-flex flex-row justify-content-center align-items">
                  <i className="mdi mdi-facebook text-facebook icon-lg"></i>
                  <div className="ml-3">
                    <h6 className="text-facebook font-weight-semibold mb-0">2.62 Subscribers</h6>
                    <p className="text-muted card-text">You main list growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body py-5">
                <div className="d-flex flex-row justify-content-center align-items">
                  <i className="mdi mdi-facebook text-facebook icon-lg"></i>
                  <div className="ml-3">
                    <h6 className="text-facebook font-weight-semibold mb-0">2.62 Subscribers</h6>
                    <p className="text-muted card-text">You main list growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body py-5">
                <div className="d-flex flex-row justify-content-center align-items">
                  <i className="mdi mdi-facebook text-facebook icon-lg"></i>
                  <div className="ml-3">
                    <h6 className="text-facebook font-weight-semibold mb-0">2.62 Subscribers</h6>
                    <p className="text-muted card-text">You main list growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          </div> 

            </div>
        )
    }
}
