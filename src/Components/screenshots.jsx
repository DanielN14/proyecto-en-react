import React, { Fragment } from 'react';

function Screenshot() {
    return (
        <Fragment>
            <section id="banner_parallax" className="inner_page_banner slide_banner1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div className="slide_cont">
                                    <h2>Screenshots</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout_padding">
                <div className="container-fuild">
                    <div className="row">

                        <div className="full">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="full text_align_center">
                                        <div className="heading_main center_head_border heading_style_1">
                                            <h2>Screenshot</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="full">
                            <ul>
                                <li className="scren screen1"><img className="img-responsive" src="Assets/images/scr1.png" alt="#" /></li>
                                <li className="scren screen2"><img className="img-responsive" src="Assets/images/scr2.png" alt="#" /></li>
                                <li className="scren screen3"><img className="img-responsive" src="Assets/images/scr3.png" alt="#" /></li>
                                <li className="scren screen4"><img className="img-responsive" src="Assets/images/scr1.png" alt="#" /></li>
                                <li className="scren screen1"><img className="img-responsive" src="Assets/images/scr3.png" alt="#" /></li>
                                <li className="scren screen2"><img className="img-responsive" src="Assets/images/scr1.png" alt="#" /></li>
                                <li className="scren screen3"><img className="img-responsive" src="Assets/images/scr4.png" alt="#" /></li>
                                <li className="scren screen4"><img className="img-responsive" src="Assets/images/scr2.png" alt="#" /></li>
                            </ul>
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
        </Fragment>
    );
}

export default Screenshot;