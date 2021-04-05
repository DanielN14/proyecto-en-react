import React from 'react';

import Mapa from './mapa';

function Pricing() {
    return (
        <Fragment>
            <section id="banner_parallax" class="inner_page_banner slide_banner1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="full">
                                <div class="slide_cont">
                                    <h2>Pricing</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="layout_padding">
                <div class="container">
                    <div class="row">
                        <div class="full">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="full text_align_center">
                                        <div class="heading_main center_head_border heading_style_1">
                                            <h2>Table price</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="full" style="margin-top:10px;">
                                <div class="row">
                                    <div class="col-sm-12 col-md-4">
                                        <div class="table_price text_align_center">
                                            <div class="table_price_head">
                                                <h5>Basic</h5>
                                            </div>
                                            <div class="table_price_cont">
                                                <div class="table_price_per">
                                                    <p>$29.00<br />
                                                        <small>/month</small>
                                                    </p>
                                                </div>
                                                <div class="table_price_cont_bottm">
                                                    <ul>
                                                        <li>100 MB Disk Space</li>
                                                        <li>2 Subdomains</li>
                                                        <li>5 Email Accounts</li>
                                                        <li>Customer Support 24/7</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="table_price_bottm">
                                                <a class="bt_main" href="index.html">Buy now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4">
                                        <div class="active_price table_price text_align_center">
                                            <div class="table_price_head">
                                                <h5>Standard</h5>
                                            </div>
                                            <div class="table_price_cont">
                                                <div class="table_price_per">
                                                    <p>$39.00<br />
                                                        <small>/month</small>
                                                    </p>
                                                </div>
                                                <div class="table_price_cont_bottm">
                                                    <ul>
                                                        <li>100 MB Disk Space</li>
                                                        <li>2 Subdomains</li>
                                                        <li>5 Email Accounts</li>
                                                        <li>Customer Support 24/7</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="table_price_bottm">
                                                <a class="reverse_bt bt_main" href="index.html">Buy now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4">
                                        <div class="table_price text_align_center">
                                            <div class="table_price_head">
                                                <h5>Profesional</h5>
                                            </div>
                                            <div class="table_price_cont">
                                                <div class="table_price_per">
                                                    <p>$45.00<br />
                                                        <small>/month</small>
                                                    </p>
                                                </div>
                                                <div class="table_price_cont_bottm">
                                                    <ul>
                                                        <li>100 MB Disk Space</li>
                                                        <li>2 Subdomains</li>
                                                        <li>5 Email Accounts</li>
                                                        <li>Customer Support 24/7</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="table_price_bottm"> <a class="bt_main" href="index.html">Buy now</a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact_section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6" style="padding:0;">
                            <div class="full">
                                <Mapa></Mapa>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6" style="padding:0;">
                            <div class="full">
                                <div class="contact_form white_heading_border">
                                    <div class="contact_form_inner">
                                        <div class="full_heading white_fonts heading_main heading_style_1">
                                            <h2>Contact <span>us</span></h2>
                                        </div>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div class="form_contact">
                                            <form action="index.html">
                                                <fieldset>
                                                    <div class="field">
                                                        <input type="text" name="name" placeholder="Your name" required="" />
                                                    </div>
                                                    <div class="field">
                                                        <input type="text" name="name" placeholder="Your phone" required="" />
                                                    </div>
                                                    <div class="field">
                                                        <input type="email" name="email" placeholder="Email" required="" />
                                                    </div>
                                                    <div class="field">
                                                        <textarea name="messager" placeholder="Messager" required=""></textarea>
                                                    </div>
                                                    <div class="field">
                                                        <button class="field_bt">Send</button>
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