import React from 'react';
import '../../Components/Work/Work.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import img1 from '../../img/projects/nutras.png';
import img2 from '../../img/projects/education-management-system.PNG';
import img3 from '../../img/projects/car-garage-site.png';
import img4 from '../../img/projects/Doctor-portal.PNG';

const Work = () => {
    return (
        <div className="container">
            <section class="sectionnGap"></section>
            <div className="work" data-aos="fade-down">
                <h3 className="text-center">My Recent works <br /> <span className="text-warning ">Portfolio</span></h3>
                <div className="btmline mx-auto"> </div>
                <div className="btmline mx-auto  "> </div>

            </div>






            <div className="card_container py-5">
                <div className="row">

                    <div className="col-lg-3 col-md-6 col-12 " data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <Card className="  Project_card" sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="170"
                                    image={img1}
                                    alt="img"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Nutras - Fitness & Nutrition

                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Check out this outstanding and versatile fitness and nutrition HTML template and build a well-functional website according to your requirements.
                                        <br></br>


                                        <b>Technology:</b> HTML5, CSS3, React.js, 
                                        React Router, CONTEXT API, Firebase Authentication.

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions >
                                <div className="projectBtn mx-auto">

                                    <a rel="noreferrer" className="btn btn-outline-primary m-2" style={{ textDecoration: 'none', }} href="https://github.com/Olivensu/The-Nutras" target="_blank" ><GitHubIcon  ></GitHubIcon> GitHub</a>
                                    <a rel="noreferrer" className="btn btn-outline-danger m-2 " style={{ textDecoration: 'none', }} href="https://the-nutras.web.app/" target="_blank" ><VisibilityIcon className="  "></VisibilityIcon> Live Demo</a>

                                </div>
                            </CardActions>
                        </Card>


                    </div>

                    <div className="col-lg-3 col-md-6 col-12 "  data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <Card className="  Project_card" sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="170"
                                    image={img3}
                                    alt="img"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Educational Management System
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Doctors Portal: Connect with trusted doctors, book appointments, access medical records, and communicate securely for efficient healthcare management and improved patient-doctor interactions.
                                        <br></br>


                                        <b>Technology:</b>  HTML5, CSS3, React.js, Node.js, Express.js, MongoDB, React
                                        Router, Firebase Authentication

                                        <br></br> 

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions >
                                <div className="projectBtn mx-auto">

                                    <a rel="noreferrer" className="btn btn-outline-primary m-2" style={{ textDecoration: 'none', }} href="https://github.com/Olivensu/Education-Management-System" target="_blank" ><GitHubIcon  ></GitHubIcon> GitHub</a>
                                    <a rel="noreferrer" className="btn btn-outline-danger m-2 " style={{ textDecoration: 'none', }} href="https://education-management-system.netlify.app/" target="_blank" ><VisibilityIcon className="  "></VisibilityIcon> Live Demo</a>

                                </div>
                            </CardActions>
                        </Card>


                    </div>






                    <div className="col-lg-3 col-md-6 col-12"  data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <Card className="  Project_card" sx={{ maxWidth: 345 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="170"
                                    image={img2}
                                    alt="img"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Car Garage Site
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Car Garage Site is your one-stop destination for all your car repair and maintenance needs. Find reliable garages, book appointments, and access expert advice for keeping your vehicle in top condition.
                                        <br></br>


                                        <b>Technology:</b> HTML5, CSS3, React.js, Node.js, Express.js, MongoDB, React
                                        Router, Firebase Authentication

                                        <br></br>

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions >
                                <div className="projectBtn mx-auto">

                                    <a rel="noreferrer" className="btn btn-outline-primary m-2" style={{ textDecoration: 'none', }} href="https://github.com/Olivensu/Car-Garage-Service" target="_blank" ><GitHubIcon  ></GitHubIcon> GitHub</a>
                                    <a rel="noreferrer" className="btn btn-outline-danger m-2 " style={{ textDecoration: 'none', }} href="https://car-garage-site.web.app/" ><VisibilityIcon className="  "></VisibilityIcon> Live Demo</a>

                                </div>
                            </CardActions>
                        </Card>


                    </div>
                    <div className="col-lg-3 col-md-6 col-12 "  data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <Card className="  Project_card" sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="170"
                                    image={img4}
                                    alt="img"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Doctors Portal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Doctors Portal: Connect with trusted doctors, book appointments, access medical records, and communicate securely for efficient healthcare management and improved patient-doctor interactions.
                                        <br></br>


                                        <b>Technology:</b> HTML5, CSS3, tailwind, react, nodejs, ExpressJS, MongoDb

                                        <br></br>
                                        

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions >
                                <div className="projectBtn mx-auto">

                                    <a rel="noreferrer" className="btn btn-outline-primary m-2" style={{ textDecoration: 'none', }} href="https://github.com/Olivensu/Doctors-Portal" target="_blank" ><GitHubIcon  ></GitHubIcon> GitHub</a>
                                    <a rel="noreferrer" className="btn btn-outline-danger m-2 " style={{ textDecoration: 'none', }} href="https://doctors-portals-site.netlify.app/" target="_blank" ><VisibilityIcon className="  "></VisibilityIcon> Live Demo</a>

                                </div>
                            </CardActions>
                        </Card>


                    </div>







                </div>


            </div>

            <div className="buttonInfo text-center " data-aos="zoom-in">
                <Link to="/work" className="btn btn-success w-25 p-2  "> All Works</Link>
            </div>
            <div className="sectionnGap"></div>




        </div>
    );
};

export default Work;