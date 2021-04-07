import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Mapa from './mapa';

function Home() {
    return (
        <Fragment>

            <section id="banner_parallax" className="slide_banner1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="full">
                                <div className="slide_cont">
                                    <h2>Familiarize Your Creative Application</h2>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..!</p>
                                    <div className="full slide_bt">
                                        <NavLink className="white_bt bt_main" to={"/service"}>Download</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="full">
                                <div className="slide_pc_img wow fadeInRight" data-wow-delay="1s" data-wow-duration="2s">
                                    <img src="Assets/images/pc-banner.png" alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout_padding padding_top_0">
                <div className="container">
                    <div className="row margin_bottom_30">
                        <div className="col-md-6 cont_theme_blog">
                            <div className="full">
                                <h3>Unique app with different features</h3>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo.<br /><br />Ut enim ad minima veniam quis nostrum exercitationem ullam corporis..!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInRight" data-wow-delay="0.5" data-wow-duration="1s">
                            <div className="full">
                                <div className="center">
                                    <img src="Assets/images/ser1.png" alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row margin_bottom_30">
                        <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.5" data-wow-duration="1s">
                            <div className="full">
                                <div className="center">
                                    <img src="Assets/images/ser2.png" alt="#" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 cont_theme_blog">
                            <div className="full">
                                <h3>Why it’s best app for your business</h3>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo.<br /><br />Ut enim ad minima veniam quis nostrum exercitationem ullam corporis..!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row margin_bottom_30">
                        <div className="col-md-6 cont_theme_blog">
                            <div className="full">
                                <h3>Auricle integrated all populatar tools</h3>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo.<br /><br />Ut enim ad minima veniam quis nostrum exercitationem ullam corporis..!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInRight" data-wow-delay="0.5" data-wow-duration="1s">
                            <div className="full">
                                <div className="center">
                                    <img src="Assets/images/ser3.png" alt="#" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="layout_padding gradiant_bg cross_layout">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="information_blogs">
                                <div className="imf_icon">
                                    <img src="Assets/images/icon1.png" alt="#" />
                                </div>
                                <div className="imf_head">
                                    <h3>Awesome Features</h3>
                                </div>
                                <div className="imf_cont">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium</p>
                                </div>
                                <div className="imf_read">
                                    <NavLink to={"/service"}>Read More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="information_blogs">
                                <div className="imf_icon">
                                    <img src="Assets/images/icon2.png" alt="#" />
                                </div>
                                <div className="imf_head">
                                    <h3>Creative Design</h3>
                                </div>
                                <div className="imf_cont">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium</p>
                                </div>
                                <div className="imf_read">
                                    <NavLink to={"/service"}>Read More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="information_blogs">
                                <div className="imf_icon">
                                    <img src="Assets/images/icon3.png" alt="#" />
                                </div>
                                <div className="imf_head">
                                    <h3>24 Hours Supports</h3>
                                </div>
                                <div className="imf_cont">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium</p>
                                </div>
                                <div className="imf_read">
                                    <NavLink to={"/service"}>Read More</NavLink>
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
                                    <h2>Auricle <span>Features</span></h2>
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
                        <div className="col-md-4 wow fadeInRight" data-wow-delay="0.5" data-wow-duration="1s">
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
                                            <i className="fa fa-diamond"></i><br></br>
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
                                            <p>Download & Install</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div className="step_blog">
                                        <div className="step_inner">
                                            <i className="fa fa-thumbs-up"></i><br />
                                            <p>Enjoy & Rate us!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="full">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="full text_align_center">
                                        <div className="heading_main center_head_border heading_style_1">
                                            <h2>Table price</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="full" style={{ marginTop: '10px' }}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <div className="table_price text_align_center">
                                            <div className="table_price_head">
                                                <h5>Basic</h5>
                                            </div>
                                            <div className="table_price_cont">
                                                <div className="table_price_per">
                                                    <p>$29.00<br />
                                                        <small>/month</small>
                                                    </p>
                                                </div>
                                                <div className="table_price_cont_bottm">
                                                    <ul>
                                                        <li>100 MB Disk Space</li>
                                                        <li>2 Subdomains</li>
                                                        <li>5 Email Accounts</li>
                                                        <li>Customer Support 24/7</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="table_price_bottm">
                                                <NavLink className="bt_main" to={"/pricing"}>Buy now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="active_price table_price text_align_center">
                                            <div className="table_price_head">
                                                <h5>Standard</h5>
                                            </div>
                                            <div className="table_price_cont">
                                                <div className="table_price_per">
                                                    <p>$39.00<br />
                                                        <small>/month</small>
                                                    </p>
                                                </div>
                                                <div className="table_price_cont_bottm">
                                                    <ul>
                                                        <li>100 MB Disk Space</li>
                                                        <li>2 Subdomains</li>
                                                        <li>5 Email Accounts</li>
                                                        <li>Customer Support 24/7</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="table_price_bottm">
                                                <NavLink className="reverse_bt bt_main" to={"/pricing"}>Buy now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="table_price text_align_center">
                                            <div className="table_price_head">
                                                <h5>Profesional</h5>
                                            </div>
                                            <div className="table_price_cont">
                                                <div className="table_price_per">
                                                    <p>$45.00<br />
                                                        <small>/month</small>
                                                    </p>
                                                </div>
                                                <div className="table_price_cont_bottm">
                                                    <ul>
                                                        <li>100 MB Disk Space</li>
                                                        <li>2 Subdomains</li>
                                                        <li>5 Email Accounts</li>
                                                        <li>Customer Support 24/7</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="table_price_bottm">
                                                <NavLink className="bt_main" to={"/pricing"}>Buy now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6" style={{ padding: '0' }}>
                            <div className="full">
                                <Mapa />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6" style={{ padding: '0' }}>
                            <div className="full">
                                <div className="contact_form white_heading_border">
                                    <div className="contact_form_inner">
                                        <div className="full_heading white_fonts heading_main heading_style_1">
                                            <h2>Contact <span>us</span></h2>
                                        </div>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                        <div className="form_contact">

                                            <form action="/">
                                                <fieldset>
                                                    <div className="field">
                                                        <input type="text" name="name" placeholder="Your name" required=""></input>
                                                    </div>
                                                    <div className="field">
                                                        <input type="text" name="name" placeholder="Your phone" required=""></input>
                                                    </div>
                                                    <div className="field">
                                                        <input type="email" name="email" placeholder="Email" required=""></input>
                                                    </div>
                                                    <div className="field">
                                                        <textarea name="messager" placeholder="Messager" required=""></textarea>
                                                    </div>
                                                    <div className="field">
                                                        <button className="field_bt">Send</button>
                                                    </div>
                                                </fieldset>
                                            </form>
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

export default Home;