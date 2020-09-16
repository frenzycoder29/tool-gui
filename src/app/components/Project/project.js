import React, { Component } from 'react'

export default class project extends Component {
    render() {
        return (
            <div>
                <div  className="page-header">
          <h3 className="page-title"> Projects </h3>
          <nav aria-label="breadcrumb">
          <a  href=""class="btn btn-primary" title="Download Template" onClick={()=>this.props.history.push('/form-elements/createproject')}><i className="fa fa-plus-square"></i> </a> <a  href=""class="btn btn-primary" title="Download Template" onClick={()=>this.props.history.push('/form-elements/copyproject')}><i className="fa fa-cloud-download"></i> </a>
          </nav>
        </div>
            <div style={{marginTop:"10px"}} className="col-lg-12 stretch-card">
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title">News Paper Headlines</h4>
                        <p className="card-text"> Classifying : Text  
                        </p>
                        <p className="card-description"> Description : Recognising Type of Newspaper by analyzing Text from Newspaper 
                        </p>
                        <a href="" style={{marginTop:"10px"}} class="btn btn-primary" onClick={()=>this.props.history.push('/form-elements/modelpage')}>Open Project</a> <a  style={{marginTop:"10px"}} href="#" class="btn btn-primary">Delete Project</a>
                    </div>
                    
                </div>
            </div>

            <div style={{marginTop:"10px"}} className="col-lg-12 stretch-card">
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title">News Paper Headlines</h4>
                        <p className="card-text"> Classifying : Text  
                        </p>
                        <p className="card-description">  Description : Recognising Type of Newspaper by analyzing Text from Newspaper 
                        </p>
                        <a href="#" style={{marginTop:"10px"}} class="btn btn-primary" onClick={()=>this.props.history.push('/form-elements/modelpage')}>Open Project</a> <a  style={{marginTop:"10px"}} href="#" class="btn btn-primary">Delete Project</a>
                    </div>
                    
                </div>
            </div>
            <div style={{marginTop:"10px"}} className="col-lg-12 stretch-card">
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title">News Paper Headlines</h4>
                        <p className="card-text"> Classifying : Text  
                        </p>
                        <p className="card-description">  Description : Recognising Type of Newspaper by analyzing Text from Newspaper 
                        </p>
                        <a href="#" style={{marginTop:"10px"}} class="btn btn-primary" onClick={()=>this.props.history.push('/form-elements/modelpage')}>Open Project</a> <a  style={{marginTop:"10px"}} href="#" class="btn btn-primary">Delete Project</a>
                    </div>
                    
                </div>
            </div>
            <div style={{marginTop:"10px"}} className="col-lg-12 stretch-card">
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title">News Paper Headlines</h4>
                        <p className="card-text"> Classifying : Text  
                        </p>
                        <p className="card-description">  Description : Recognising Type of Newspaper by analyzing Text from Newspaper 
                        </p>
                        <a href="#" style={{marginTop:"10px"}} class="btn btn-primary" onClick={()=>this.props.history.push('/form-elements/modelpage')}>Open Project</a> <a  style={{marginTop:"10px"}} href="#" class="btn btn-primary">Delete Project</a>
                    </div>
                    
                </div>
            </div>

            
            
            </div>
        )
    }
}
