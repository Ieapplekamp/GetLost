import React, { Component } from "react";
import Particles from 'react-particles-js';
import { Container, Row, Col, Button } from "react-bootstrap";
import "./creators.css"



class Creators extends Component {

    render() {
        return (
            <>
            <div className="background-sky">
        <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 300,
                      "density": {
                          "enable": true,
                          "value_area": 1500
                      }
                  },
                  "line_linked": {
                      "enable": true,
                      "opacity": 0.02
                  },
                  "move": {
                      "direction": "right",
                      "speed": 0.08
                },
                "color": {
                    "value": "#fff"
                },
                  "size": {
                      "value": 1.5
                  },
                  "opacity": {
                      "anim": {
                          "enable": true,
                          "speed": .2,
                          "opacity_min": 0.05
                      }
                  }
              },
              "retina_detect": true
          }} />
          </div>

          <div className="background-mountain">

              <Container>
                  <Row className="mt-5 text-center justify-content-around">
                  <Col lg={4} className="mb-3">
                    <div className="flip-card">
                    <div className="flip-card-inner">
                     <div className="flip-card-front backgrnd">
                     <img className="avatar" src={require('../../images/marcus.svg')} alt="Marcus Krueger"></img>
                        <h3 className="name">Marcus Krueger</h3>
                        </div>
                        <div className="flip-card-back">
                        <a href="https://github.com/marcuskrueger90" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('../../images/github.svg')} alt="github"></img></a>
                        <br />
                        <a href="https://www.linkedin.com/in/marcus-krueger-47766012b/" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('../../images/linkedin.svg')} alt="linkedin"></img></a>
                        </div>
                     </div>
                     </div> 
                    </Col>

                    <Col lg={4} className="mb-3">
                    <div className="flip-card">
                    <div className="flip-card-inner">
                     <div className="flip-card-front backgrnd">
                     <img className="avatar" src={require('../../images/jake.svg')} alt="Jake Campbell"></img>
                        <h3 className="name">Jake Campbell</h3>
                        </div>
                        <div className="flip-card-back">
                        <a href="https://github.com/HoveringTorso" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('../../images/github.svg')} alt="github"></img></a>
                        <br />
                        <a href="https://lostinthewoods.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('../../images/linkedin.svg')} alt="linkedin"></img></a>
                        </div>
                     </div>
                     </div> 
                    </Col>

                    <Col lg={4} className="mb-3">
                    <div className="flip-card">
                    <div className="flip-card-inner">
                     <div className="flip-card-front backgrnd">
                     <img className="avatar" src={require('../../images/ian.svg')} alt="Ian Applekamp"></img>
                        <h3 className="name">Ian Applekamp</h3>
                        </div>
                        <div className="flip-card-back">
                        <a href="https://github.com/Ieapplekamp" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('../../images/github.svg')} alt="github"></img></a>
                        <br />
                        <a href="https://www.linkedin.com/in/ian-applekamp-316256186/" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('../../images/linkedin.svg')} alt="linkedin"></img></a>
                        </div>
                     </div>
                     </div> 
                    </Col>
                  </Row>

                  <Row className="mt-3 justify-content-around text-center">
                  <Col lg={4} className="mb-3">
                    <div className="flip-card">
                    <div className="flip-card-inner">
                     <div className="flip-card-front backgrnd">
                     <img className="avatar" src={require('../../images/jensey.svg')} alt="Jensey Fifer"></img>
                        <h3 className="name">Jensey Fifer</h3>
                        </div>
                        <div className="flip-card-back">
                        
                        <a href="https://github.com/seyleigh" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('../../images/github.svg')} alt="github"></img></a>
                        <br />
                        <a href="https://www.linkedin.com/in/jensey-fifer/" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('../../images/linkedin.svg')} alt="linkedin"></img></a>
                        </div>
                     </div>
                     </div> 
                    </Col>

                    <Col lg={4} className="mb-3">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                     <div className="flip-card-front backgrnd">
                     <img className="avatar" src={require('../../images/justin.svg')} alt="Justin Carlson"></img>
                        <h3 className="name">Justin Carlson</h3>
                        </div>
                        <div className="flip-card-back">
                        <a href="https://github.com/justincarlson7" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('../../images/github.svg')} alt="github"></img></a>
                        <br />
                        <a href="https://www.linkedin.com/in/justin-carlson-03797432/" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('../../images/linkedin.svg')} alt="linkedin"></img></a>
                        </div>
                     </div>
                     </div> 
                    </Col>
                  </Row>
                  <Button href="/" className="regBtn my-5" block>
                 Back to home
                </Button>
              </Container>

        
            </div>
            </>
        )
    }



}

export default Creators;