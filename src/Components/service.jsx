import React, { Fragment } from 'react';

function Service() {
    return (
        <Fragment>
            <section id="banner_parallax" className="slide_banner1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div className="slide_cont">
                                    <h2>Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout_padding layer_style">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="full text_align_center">
                                <div className="heading_main center_head_border heading_style_1">
                                    <h2>Auricle <span>Services</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row app-features">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="features-left">
                                <li>
                                    <i className="flaticon-wordpress-logo"></i>
                                    <div className="fl-inner">
                                        <h4>WordPress Installation</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-windows"></i>
                                    <div className="fl-inner">
                                        <h4>Browser Compatible</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-price-tag"></i>
                                    <div className="fl-inner">
                                        <h4>eCommerce Ready</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-new-file"></i>
                                    <div className="fl-inner">
                                        <h4>Easy to Customize</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="features-right">
                                <li>
                                    <i className="flaticon-pantone"></i>
                                    <div className="fr-inner">
                                        <h4>Limitless Colors</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-cloud-computing"></i>
                                    <div className="fr-inner">
                                        <h4>Lifetime Update</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-line-graph"></i>
                                    <div className="fr-inner">
                                        <h4>SEO Friendly</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-coding"></i>
                                    <div className="fr-inner">
                                        <h4>Simple Clean Code</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 wow fadeInRight" data-wow-delay="0.5" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}>
                            <div className="full">
                                <div className="center">
                                    <img src="Assets/images/application_screen.png" alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout_padding gradiant_bg cross_layout">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="full text_align_center white_fonts">
                                <div className="heading_main center_head_border heading_style_1">
                                    <h2>Easy <span>Steps</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row step_section">
                        <div className="offset-xl-1 col-xl-10 col-md-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div className="step_blog arrow_right_step">
                                        <div className="step_inner">
                                            <i className="fa fa-diamond"></i><br />
                                            <p>Go app store</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div className="step_blog">
                                        <div className="step_inner">
                                            <i className="fa fa-user"></i><br />
                                            <p>Create an Account</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div className="step_blog">
                                        <div className="step_inner">
                                            <i className="fa fa-download"></i><br />
                                            <p>Download &amp; Install</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div className="step_blog">
                                        <div className="step_inner">
                                            <i className="fa fa-thumbs-up"></i><br />
                                            <p>Enjoy &amp; Rate us!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    );
}

export default Service;
