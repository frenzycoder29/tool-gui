import React, { Component } from 'react'

export default class deploy extends Component {
    render() {
        return (
            <div>
                  <div  className="page-header">
                    <h3 className="page-title"> Deploy </h3>
                    <nav aria-label="breadcrumb">
                    <a  href=""class="btn btn-primary" title="Test Model" onClick={()=>this.props.history.push('/form-elements/test')}><i className="fa fa-wrench"></i> </a> 
                    </nav>
                    </div>

                    <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">MyAImate Playground</h4>
                <div className="media">
                <a href="" style={{textDecoration:'none'}}>
                <img width="100px"src={require("../../../assets/images/myaimate-logo.png" )} alt="logo" />
                </a> <a href="/playground" target='blank' style={{textDecoration:'none'}}>
                  <div className="media-body">
                    <p className="card-text">Deploy your project on myAImate Playgroung and Add AI in projects. </p>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Python Code </h4>
                <div className="media">
                <a href="" style={{textDecoration:'none'}}>
                <img width="100px"src={require("../../../assets/images/Python.png" )} alt="logo" /> 
                </a>  <a href="" style={{textDecoration:'none'}}>
                  <div className="media-body">
                  
                    <p className="card-text">Get a python code which you can run on your local machine and use it building exciting application</p>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

       
            </div>
        )
    }
}
