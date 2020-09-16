import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class train extends Component {
    render() {
        return (
            <div >
                  <div  className="page-header">
          <h3 className="page-title"> Train Project </h3>
          <nav aria-label="breadcrumb">
          <a  href=""class="btn btn-primary"   onClick={()=>this.props.history.push('/form-elements/dataset')} title="Dataset"><i className="fa fa-book"></i> </a> <a  href=""class="btn btn-primary" title="Test" onClick={()=>this.props.history.push('/form-elements/test')}><i className="fa fa-wrench"></i> </a>
          </nav>
        </div>
<div style={{alignItems:"center",width:'60%',marginLeft:"20%"}}>
        <button style={{marginTop:"100px"}}  className="  btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >Start Training</button>
        <p style={{textAlign:"center"}}>Training is Done. Now you can start Testing</p>
 </div>       
        </div>
        )
    }
}
