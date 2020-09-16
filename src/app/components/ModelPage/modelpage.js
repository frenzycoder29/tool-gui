import React, { Component } from 'react'
import './modelpage.css'
export default class modelpage extends Component {
    render() {
        return (
            <div>
                  <div  className="page-header">
          <h3 className="page-title"> Project Options </h3>
          <nav aria-label="breadcrumb">
          <a  href=""class="btn btn-primary" title="Download Template" onClick={()=>this.props.history.push('/form-elements/createproject')}><i className="fa fa-plus-square"></i> </a> <a  href=""class="btn btn-primary" title="Download Template" onClick={()=>this.props.history.push('/form-elements/copyproject')}><i className="fa fa-cloud-download"></i> </a>
          </nav>
        </div>

        <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>Add Dataset to your model</p>
              <a onClick={()=>this.props.history.push('/form-elements/dataset')} className="btn ml-auto btn-primary button1">Add Data</a>
              
            </span>
          </div>
        </div>
        <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>Train your Model on Dataset you have entered</p>
              <a onClick={()=>this.props.history.push('/form-elements/train')} className="btn ml-auto btn-primary button1">Train</a>
              
            </span>
          </div>
        </div>
        <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>Test your Model on new data</p>
              <a onClick={()=>this.props.history.push('/form-elements/test')} className="btn ml-auto btn-primary button1">Test</a>
              
              
            </span>
          </div>
        </div>
        <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>Deploy model on myAImate playground </p>
              <a  onClick={()=>this.props.history.push('/form-elements/deploy')} className="btn ml-auto btn-primary button1">Deploy</a>
              
            </span>
          </div>
        </div>
            </div>
        )
    }
}
