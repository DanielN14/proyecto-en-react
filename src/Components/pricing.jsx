import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import Mapa from './mapa';

function Pricing() {
    return (
        <Fragment>
            <section id="banner_parallax" className="inner_page_banner slide_banner1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div className="slide_cont">
                                    <h2>Pricing</h2>
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
                                                {/* <Link to={"/home"} className="bt_main">Buy now</Link> */}
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
                                                {/* <Link to={"/home"} className="reverse_bt bt_main">Buy now</Link> */}
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
                                                {/* <Link to={"/home"} className="bt_main">Buy now</Link> */}
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
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="form_contact">
                                            <form action="index.html">
                                                <fieldset>
                                                    <div className="field">
                                                        <input type="text" name="name" placeholder="Your name" required="" />
                                                    </div>
                                                    <div className="field">
                                                        <input type="text" name="name" placeholder="Your phone" required="" />
                                                    </div>
                                                    <div className="field">
                                                        <input type="email" name="email" placeholder="Email" required="" />
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

export default Pricing;