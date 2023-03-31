import React, { Fragment } from "react";
import Header from "./Header";
import './Home.css';
import prideimg from './../../assets/1.png';
import ingredients from './../../assets/2.png';
import Data from '../../Data';
import { Carousel } from "react-bootstrap";
import item1 from './../../assets/p1.jpg';
import item2 from './../../assets/p2.jpg';





const Home = () => {
    const blogitem = Data.map((item) => {
        return (

            <div className="col-md-4">
                <div className="box">
                    <img src={item.img} />
                    <h5>{item.title}</h5>
                    <span>{item.time}</span>
                    <h6>{item.price}</h6>
                </div>

                <button><a href="#">order now</a></button>


            </div>
        )
    })

    return (
        <Fragment>
            <Header />
            <section className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>2487+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>3233+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>5287+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={prideimg} title="img" />
                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button><a href="#">learn more</a></button>
                        </div>

                    </div>

                </div>
            </section>
            <section className="ingredients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button>
                                <a href="#">learn more</a>
                            </button>
                        </div>
                        <div className="col-md-6">
                            <img src={ingredients} alt="ingredients" />
                        </div>

                    </div>
                </div>
            </section>
            <section className="paralex">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>When a man's stomach is full it makes no<br />
                                difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br />
                                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <a href="#">Watch Our Story</a>
                        </div>

                    </div>

                </div>

            </section>

            <section className="blogs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>

                    </div>
                    <div className="row">
                        {blogitem}

                    </div>
                </div>

            </section>

            <section className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2 className="test">Testimonials</h2>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img src={item1}></img>
                                    <Carousel.Caption className="cp">
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        <h3>First slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={item2}></img>

                                    <Carousel.Caption  className="cp">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h3>Second slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>


            </section>

            <footer >
            © 2023. All rights reserved.
            </footer>
        </Fragment>

    )
}

export default Home;