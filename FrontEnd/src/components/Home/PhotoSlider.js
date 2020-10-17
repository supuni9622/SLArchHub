import React, { Component } from 'react'

class PhotoSlider extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="slider">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={0}
                        className="active"
                      />
                      <li 
                        data-target="#carouselExampleIndicators" 
                        data-slide-to={1} 
                      />
                      <li 
                        data-target="#carouselExampleIndicators" 
                        data-slide-to={2} 
                      />
                      <li 
                        data-target="#carouselExampleIndicators" 
                        data-slide-to={3}
                      />
                      <li 
                        data-target="#carouselExampleIndicators" 
                        data-slide-to={4} 
                      />
                      <li 
                        data-target="#carouselExampleIndicators" 
                        data-slide-to={5} 
                      />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          style={{width:'1349px', height:'620px'}}
                          className="d-block w-100"
                          src="Logo/New Project.png"
                          alt="Welcome!!"
                        />
                          <div className="carousel-caption">
                            <h5 className="display-5" style={{backgroundColor:'rgba(0,0,0,0.4)',color:'white', fontSize:'5vw',fontWeight:'bold', padding:'20px', textAlign:'center',top:'50%', textShadow: '4px 4px 8px #000000'}}>Welcome to SLArchHub!!</h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              style={{width:'1349px', height:'620px'}}
                              className="d-block w-100"
                              src="Logo/Exterior Design.png"
                              alt="Exterior Designs"
                            />
                            <div className="carousel-caption">
                               <h5 className="display-5" style={{backgroundColor:'rgba(0,0,0,0.4)',color:'white', fontSize:'5vw',fontWeight:'bold', padding:'20px', textAlign:'center',top:'50%',textShadow: '4px 4px 8px #000000'}}>Exterior Design</h5>
                              
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              style={{width:'1349px', height:'620px'}}
                              className="d-block w-100"
                              src="Logo/Interior Design.png"
                              alt="Interior Designs"
                            />
                            <div className="carousel-caption">
                              <h5 className="display-5" style={{backgroundColor:'rgba(0,0,0,0.4)',color:'white', fontSize:'5vw',fontWeight:'bold', padding:'20px', textAlign:'center',top:'50%', textShadow: '4px 4px 8px #000000'}}>Interior Design</h5>
                      
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img
                                style={{width:'1349px', height:'620px'}}
                                className="d-block w-100"
                                src="Logo/Landscape Design.png"
                                alt="Landscape Designs"
                              />
                              <div className="carousel-caption">
                                <h5 className="display-5" style={{backgroundColor:'rgba(0,0,0,0.4)',color:'white', fontSize:'5vw',fontWeight:'bold', padding:'20px', textAlign:'center' ,top:'50%', textShadow: '4px 4px 8px #000000'}}>Landscape Design</h5>
                                  
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img
                                style={{width:'1349px', height:'620px'}}
                                className="d-block w-100"
                                src="Logo/Sustainable Design.png"
                                alt="Sustainable Designs"
                              />
                              <div className="carousel-caption">
                                <h5 className="display-5" style={{backgroundColor:'rgba(0,0,0,0.4)',color:'white', fontSize:'5vw',fontWeight:'bold', padding:'20px', textAlign:'center', top:'50%', textShadow: '4px 4px 8px #000000'}}>Sustainable Design</h5>
                                  
                                </div>
                              </div>
                            </div>
                            <a
                              className="carousel-control-prev"
                              href="#carouselExampleIndicators"
                              role="button"
                              data-slide="prev"
                            >
                              <span className="carousel-control-prev-icon" aria-hidden="true" style={{color:'white'}}/>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a
                              className="carousel-control-next"
                              href="#carouselExampleIndicators"
                              role="button"
                              data-slide="next"
                            >
                              <span className="carousel-control-next-icon" aria-hidden="true" style={{color:'white'}}/>
                              <span className="sr-only">Next</span>
                            </a>
                          </div>
                        </div>    
            </React.Fragment>
        )
    }
}

export default PhotoSlider
