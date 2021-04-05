import React from 'react';

function Screenshot() {
    return (
        <Fragment>
            <section id="banner_parallax" class="inner_page_banner slide_banner1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="full">
                                <div class="slide_cont">
                                    <h2>Screenshots</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="layout_padding">
                <div class="container-fuild">
                    <div class="row">

                        <div class="full">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="full text_align_center">
                                        <div class="heading_main center_head_border heading_style_1">
                                            <h2>Screenshot</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="full">
                            <ul>
                                <li class="scren screen1"><img class="img-responsive" src="images/scr1.png" alt="#" /></li>
                                <li class="scren screen2"><img class="img-responsive" src="images/scr2.png" alt="#" /></li>
                                <li class="scren screen3"><img class="img-responsive" src="images/scr3.png" alt="#" /></li>
                                <li class="scren screen4"><img class="img-responsive" src="images/scr1.png" alt="#" /></li>
                                <li class="scren screen1"><img class="img-responsive" src="images/scr3.png" alt="#" /></li>
                                <li class="scren screen2"><img class="img-responsive" src="images/scr1.png" alt="#" /></li>
                                <li class="scren screen3"><img class="img-responsive" src="images/scr4.png" alt="#" /></li>
                                <li class="scren screen4"><img class="img-responsive" src="images/scr2.png" alt="#" /></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section class="layout_padding gradiant_bg cross_layout">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="full text_align_center white_fonts">
                                <div class="heading_main center_head_border heading_style_1">
                                    <h2>Easy <span>Steps</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row step_section">
                        <div class="offset-xl-1 col-xl-10 col-md-12">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div class="step_blog arrow_right_step">
                                        <div class="step_inner">
                                            <i class="fa fa-diamond"></i><br />
                                            <p>Go app store</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div class="step_blog">
                                        <div class="step_inner">
                                            <i class="fa fa-user"></i><br />
                                            <p>Create an Account</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div class="step_blog">
                                        <div class="step_inner">
                                            <i class="fa fa-download"></i><br />
                                            <p>Download &amp; Install</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div class="step_blog">
                                        <div class="step_inner">
                                            <i class="fa fa-thumbs-up"></i><br />
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