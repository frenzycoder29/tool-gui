import React, { Component } from 'react'

export default class video extends Component {
    constructor(props){
        super(props)
        this.state={
            courses:[{
                title:'myAImate Playground',
                subcourses:[{
                    title:'Basic of Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },
                {
                    title:'Loops in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Postitions in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Conditional Statements in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Variables in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                }]
            },{
                title:'Artificial Intelligence',
                subcourses:[{
                    title:'Basic of Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },
                {
                    title:'Loops in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Postitions in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Conditional Statements in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Variables in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                }]
            },{
                title:'Machine Learning',
                subcourses:[{
                    title:'Basic of Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },
                {
                    title:'Loops in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Postitions in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Conditional Statements in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Variables in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                }]
            },{
                title:'Basics of Data',
                subcourses:[{
                    title:'Basic of Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },
                {
                    title:'Loops in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Postitions in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Conditional Statements in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Variables in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                }]
            },
            {
                title:'Capstone Project',
                subcourses:[{
                    title:'Basic of Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },
                {
                    title:'Loops in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Postitions in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Conditional Statements in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                },{
                    title:'Variables in Programming',
                    text:'12345',
                    video:'1234',
                    assignment:'12345'
                }]
            }]
        }
    }

    render() {
        return (
            <div>
                <div  className="page-header">
                    <h3 className="page-title"> Video Material </h3>
                    <nav aria-label="breadcrumb">
                    <a  href=""class="btn btn-primary" title="Model Page" onClick={()=>this.props.history.push('/form-elements/modelpage')}><i className="fa fa-puzzle-piece"></i> </a> <a  href=""class="btn btn-primary" title="Train Model" onClick={()=>this.props.history.push('/form-elements/train')}><i className="fa fa-cogs"></i> </a>
                    </nav>
                </div>


            {
                this.state.courses.map((course,index)=>{
                    return (
                        <div key={index}>
                            <div  className="row">
                                <h5 className='card-title'>Module {index+1} : {course.title}</h5>       
                                <div style={{paddingTop:'25px'}} className='card col-lg-12 grid-margin d-flex flex-row flex-wrap '>
                                {
                                    
                                    course.subcourses.map((subcourse,idx)=>{
                                        return(
                                            
                                            <div  index={idx} className="col-md-3 grid-margin stretch-card">
                                            <div className="card box">
                                            <div className="card-body py-5">
                                                <div className=" justify-content-center align-items">
                                                <div style={{textAlign:'-webkit-center'}} className="ml-3">

                                                <img width="100px"src={require("../../../assets/images/myaimate-logo.png" )} alt="logo" />
                                                </div>
                                                <div style={{textAlign:'center'}} className="ml-3">
                                                    <h6 style={{fontSize:'15px'}} className="text-muted card-text">{subcourse.title}</h6>
                                                    <a style={{textDecoration:'none',fontSize:'15px'}} href="/hh"  className="text-facebook font-weight-semibold mb-0">Watch Now</a>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                            
                                        )
                                    })
                                }  

                                </div>
                            </div>               
                        </div>   
                    )
                })
            }

        


            </div>
        )
    }
}
