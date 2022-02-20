import React, { useState} from 'react';
import "./packages.css";
import { Link } from 'react-router-dom';
import C1 from '../../assets/images/c1.jpg';
import A1 from '../../assets/avatar/a1.jpg';
import A2 from '../../assets/avatar/a2.jpg';
import A3 from '../../assets/avatar/a3.jpg';
import A4 from '../../assets/avatar/a4.jpg';
import { Arrow, Button, Container, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper } from './testStyles';
import { ArrowLeftOutlined, ArrowRightOutlined, StarRate, FormatQuote } from '@material-ui/icons';





const Packages = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {

        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }

        else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }


    return (
        <div>
            <div className='margin-top'>
                    <section className='packages-container'>
                    
                    <div className="packages-wrapper">
                    <p className="heading">Our Packages</p>

                        <div className="packages-row">
                            <div className="column1">
                                <div className="text-wrapper">
                                    <p className="top-line">Premium Bank</p>
                                    <p className="sub-title">Get access to our exclusive app that allows you to send 
                                                                unlimited transactions without getting charged any fees.</p>
                                    <div className="btn-wrap">
                                        <Link to="home" 
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                
                                        className="about-btn">Sign Up</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="column2">
                                <div className="img-wrap">
                                    <img src={C1} alt="car" />
                                </div>
                            </div>
                        </div>


                        <div className="packages2-row">
                            <div className="column1">
                                <div className="text-wrapper">
                                    <p className="top-line">Premium Bank</p>
                                    <p className="sub-title">Get access to our exclusive app that allows you to send 
                                                                unlimited transactions without getting charged any fees.</p>
                                    <div className="btn-wrap">
                                        <Link to="home" 
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                
                                        className="about-btn">Sign Up</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="column2">
                                <div className="img-wrap">
                                    <img src={C1} alt="car" />
                                </div>
                            </div>
                        </div>


                        <div className="packages-row">
                            <div className="column1">
                                <div className="text-wrapper">
                                    <p className="top-line">Premium Bank</p>
                                    <p className="sub-title">Get access to our exclusive app that allows you to send 
                                                                unlimited transactions without getting charged any fees.</p>
                                    <div className="btn-wrap">
                                        <Link to="home" 
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                
                                        className="about-btn">Sign Up</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="column2">
                                <div className="img-wrap">
                                    <img src={C1} alt="car" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className='parallax'>
                <div className='parallax-inner'>

                <div class="containers">
                    <div class="section-title">
                        <h2>Testimonials</h2>
                        <span class="section-separator"></span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>


                <Container>

                    <Arrow direction="left" onClick={() => handleClick("left")}>
                        <ArrowLeftOutlined />
                    </Arrow>

                    <Wrapper slideIndex={slideIndex}>
                        <Slide>
                        <div className="testi-item">
                            <div className="testi-avatar"><img src={A1} alt='a1' /></div>
                            <div className="testimonials-text-before"><i class="fa fa-quote-right"></i></div>
                            <div className="testimonials-text">
                                <div class="listing-rating">
                                    <StarRate />
                                    <StarRate />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="testimonials-avatar">
                                    <h3>John Doe</h3>
                                    <h4>Owner</h4>
                                </div>
                            </div>
                            <div class="testimonials-text-after"><FormatQuote /></div> 
                        </div>
                        </Slide>

                        <Slide>
                        <div className="testi-item">
                            <div className="testi-avatar"><img src={A2} alt='a1' /></div>
                            <div className="testimonials-text-before"><i class="fa fa-quote-right"></i></div>
                            <div className="testimonials-text">
                                <div class="listing-rating">
                                    <StarRate />
                                    <StarRate />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="testimonials-avatar">
                                    <h3>John Doe</h3>
                                    <h4>Owner</h4>
                                </div>
                            </div>
                            <div class="testimonials-text-after"><FormatQuote /></div> 
                        </div>

                        </Slide>

                        <Slide>
                        <div className="testi-item">
                            <div className="testi-avatar"><img src={A3} alt='a1' /></div>
                            <div className="testimonials-text-before"><i class="fa fa-quote-right"></i></div>
                            <div className="testimonials-text">
                                <div class="listing-rating">
                                    <StarRate />
                                    <StarRate />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="testimonials-avatar">
                                    <h3>John Doe</h3>
                                    <h4>Owner</h4>
                                </div>
                            </div>
                            <div class="testimonials-text-after"><FormatQuote /></div> 
                        </div>

                        </Slide>

                        <Slide>
                        <div className="testi-item">
                            <div className="testi-avatar"><img src={A4} alt='a1' /></div>
                            <div className="testimonials-text-before"><i class="fa fa-quote-right"></i></div>
                            <div className="testimonials-text">
                                <div class="listing-rating">
                                    <StarRate />
                                    <StarRate />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="testimonials-avatar">
                                    <h3>John Doe</h3>
                                    <h4>Owner</h4>
                                </div>
                            </div>
                            <div class="testimonials-text-after"><FormatQuote /></div> 
                        </div>

                        </Slide>



                    </Wrapper>

                    <Arrow direction="right" onClick={() => handleClick("right")}>
                        <ArrowRightOutlined />
                    </Arrow>

                </Container>
                </div>
            </section>

            {/* <div className='margin'></div> */}
        </div>



        
    )
}


export default Packages;

